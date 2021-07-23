const { getAllContacts } = require('./contacts');
const { getOneContact } = require('./contacts');
const { removeContact } = require('./contacts');
const { addContact } = require('./contacts');

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const { argv } = yargs(hideBin(process.argv))

function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':
            console.log(getAllContacts().then(data => console.table(data)));
            break;
        case 'get':
            console.log(getOneContact(id).then(data => console.table(data)));
            break;
        case 'add':
            const newContact = {
                name,
                email,
                phone
            }
            console.log(addContact(newContact).then(data => console.table(data)));
            break;
        case 'remove':
            console.log(removeContact(id).then(data => console.table(data)));
            break;

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

invokeAction(argv);