const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove note
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// Read the note
yargs.command({
  command: 'read',
  describe: 'Read the note...',
  handler: function () {
    console.log('Reading the note');
  },
});

// Create list
yargs.command({
  command: 'list',
  describe: 'Notes list',
  handler: function () {
    console.log('Listing the notes...');
  },
});
// add, remove, read, list

yargs.parse();
