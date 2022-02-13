const { randomUUID } = require('crypto');
const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');

const readContent = async () => {
  const content = await fs.readFile(contactsPath, 'utf8');

  const result = JSON.parse(content);

  return result;
};

const writeContact = async (contacts) => {
  const result = await fs.writeFile(
    contactsPath,
    JSON.stringify(contacts, null, 2)
  );

  return result;
};

function listContacts() {
  return readContent();
}

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

async function removeContact(contactId) {
  const contacts = await readContent();

  const isAnExistingContact = !!contacts.find(({ id }) => id == contactId);

  if (!isAnExistingContact) {
    return isAnExistingContact;
  }

  const newContacts = contacts.filter(({ id }) => id != contactId);

  await writeContact(newContacts);

  return isAnExistingContact;
}

async function addContact(name, email, phone) {
  const contacts = await readContent();
  const newContact = { id: randomUUID(), name, email, phone };
  contacts.push(newContact);
  await writeContact(contacts);
  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
