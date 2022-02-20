const { readContent } = require('./read-content');
const { writeContent } = require('./write-content');
const { isAnExistingContact } = require('../../utils/is-an-existing-contact');
const { newContacts } = require('../../utils/new-contacts');

async function removeContact(contactId) {
  const contacts = await readContent();

  if (!isAnExistingContact(contacts, contactId)) {
    return await isAnExistingContact(contacts, contactId);
  }

  await writeContent(newContacts(contacts, contactId));

  return await isAnExistingContact(contacts, contactId);
}

module.exports = { removeContact };
