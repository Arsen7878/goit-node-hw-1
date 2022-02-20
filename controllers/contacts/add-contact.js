const { randomUUID } = require('crypto');
const { readContent } = require('./read-content.js');
const { writeContent } = require('./write-content.js');

function getNewContact(name, email, phone) {
  return { id: randomUUID(), name, email, phone };
}

async function addContact(name, email, phone) {
  const contacts = await readContent();

  contacts.push(getNewContact(name, email, phone));

  await writeContent(contacts);

  return getNewContact(name, email, phone);
}

module.exports = { addContact };
