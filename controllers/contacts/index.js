const { addContact } = require('./add-contact.js');
const { getContactById } = require('./get-contact-by-id.js');
const { listContacts } = require('./list-contacts.js');
const { removeContact } = require('./remove-contact.js');

module.exports = {
  addContact,
  getContactById,
  listContacts,
  removeContact,
};
