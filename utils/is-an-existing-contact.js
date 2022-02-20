function isAnExistingContact(contacts, contactId) {
  return !!contacts.find(({ id }) => id == contactId);
}

module.exports = { isAnExistingContact };
