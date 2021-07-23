const getOneContact = require('./getOneContact')
const removeContact = require("./removeContact")
const addContact = require('./addContact')
const getAllContacts = require("./getAllContacts");

module.exports = {
    getAllContacts,
    getOneContact,
    removeContact,
    addContact
}

console.log(getAllContacts());