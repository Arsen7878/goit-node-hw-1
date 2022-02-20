const { readContent } = require('./read-content.js');

async function listContacts() {
  return await readContent();
}

module.exports = { listContacts };
