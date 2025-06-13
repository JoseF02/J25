const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'contacts.json');

app.use(express.json());
app.use(express.static(__dirname));

function loadContacts() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch (err) {
    return [];
  }
}

function saveContacts(contacts) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2));
}

app.post('/contact', (req, res) => {
  const contact = req.body;
  if (!contact) {
    return res.status(400).json({ error: 'Invalid data' });
  }
  const contacts = loadContacts();
  contacts.push(contact);
  saveContacts(contacts);
  res.status(200).json({ message: 'Contact saved' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
