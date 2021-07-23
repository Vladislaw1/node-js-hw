
const { v4 } = require("uuid");

const getAll = require("./getAll");

const add = async (newContact) => {
    try {
        const contacts = await getAll();
        newContact.id = v4();
        contacts.push(newContact);
        return newContact;
    } catch (error) {
        throw error;
    }
}

module.exports = add;