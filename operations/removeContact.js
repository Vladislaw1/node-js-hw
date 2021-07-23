
const getAll = require("./getAll");
const updateFile = require("./updateFile");

const del = async (id) => {
    try {
        const contacts = await getAll();
        const newContacts = contacts.filter(item => item.id !== id);
        await updateFile(newContacts);
        return newContacts;
    } catch (error) {
        throw error;
    }
}

module.exports = del;