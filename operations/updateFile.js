
const fs = require("fs").promises;

const contactsPath = require("./contactsPath");

const updateFile = async (newContacts) => {
    const contactsStr = JSON.stringify(newContacts);
    await fs.writeFile(contactsPath, contactsStr);
};

module.exports = updateFile;