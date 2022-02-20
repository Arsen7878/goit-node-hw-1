const fs = require('fs/promises');
const path = require('path');
const pathDB = '../../db/contacts.json';
const contactsPath = path.join(__dirname, pathDB);
const { jsonStr } = require('../../utils/json-stringify');

const writeContent = async (contacts) => {
  const result = await fs.writeFile(contactsPath, jsonStr(contacts));

  return result;
};

module.exports = { writeContent };
