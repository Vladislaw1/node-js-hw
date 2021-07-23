
const getAll = require('./getAll');

const getOne = async (id) => {
    try {
        const contacts = await getAll();
        const contact = contacts.find((item) => item.id === id);
        return contact;
    } catch (error) {
        throw error;
    }
}


module.exports = getOne;