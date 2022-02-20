function newContacts(contacts, contactId) {
  return contacts.filter(({ id }) => id != contactId);
}

module.exports = { newContacts };
