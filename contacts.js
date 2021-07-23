const fs = require("fs").promises;
const path = require("path");
const { v4 } = require('uuid');

const contactsPath = path.join(__dirname, 'db', "contacts.json");

// Function to get all contacts

const getAllContacts = async () => {
    try {
        const file = await fs.readFile(contactsPath);
        const data = JSON.parse(file);
        return data;
    } catch (error) {
        throw error;
    }
}

//Function to get one contact by id

const getOneContact = async (id) => {
    try {
        const contacts = await getAllContacts();
        const contact = contacts.find((item) => item.id === id);
        return contact;
    } catch (error) {
        throw error;
    }
}

//Function to remove contact by id

const removeContact = async (id) => {
    try {
        const contacts = await getAllContacts();
        const newContacts = contacts.filter(item => item.id !== id);
        const contactsStr = JSON.stringify(newContacts);
        await fs.writeFile(contactsPath, contactsStr);
        return newContacts;
    } catch (error) {
        throw error;
    }
}

//Function to add a new contact to the list of contacts

const addContact = async (newContact) => {
    try {
        const contacts = await getAllContacts();
        newContact.id = v4();
        contacts.push(newContact);
        return newContact;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllContacts,
    getOneContact,
    removeContact,
    addContact
}