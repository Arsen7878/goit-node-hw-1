function jsonStr(contacts) {
  return JSON.stringify(contacts, null, 2);
}

module.exports = { jsonStr };
