const chalk = require('chalk')
const { describe } = require('yargs')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Commands
// Add
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    handler: function () {
        console.log('Adding a new note.')
    }
})

// Remove
yargs.command({
    command: 'remove',
    describe: 'Removes a note.',
    handler: function () {
        console.log('Removing note.')
    }
})

// List
yargs.command({
    command: 'list',
    describe: 'Lists your notes.',
    handler: function () {
        console.log('Listing your notes.')
    }
})

// Read
yargs.command({
    command: 'read',
    describe: 'Reads a note.',
    handler: function () {
        console.log('Reading your note.')
    }
})

console.log(yargs.argv)


