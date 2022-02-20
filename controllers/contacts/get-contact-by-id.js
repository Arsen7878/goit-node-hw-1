const { readContent } = require('./read-content.js');

async function getContactById(contactId) {
  const contacts = await readContent();

  const contactsById = contacts.reduce((acc, item) => {
    if (item.id == contactId) {
      acc = item;
    }
    return acc;
  });

  return contactsById;
}

module.exports = { getContactById };
