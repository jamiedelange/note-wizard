const fs = require('fs');
const path = require('path');

function createNewnote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ animals: noteArray }, null, 2));
    return animal;
}

function validateNote(note) {
    if (!note.id || typeof note.id !== 'string') {
      return false;
    }
    if (!note.title || typeof note.title !== 'string') {
      return false;
    }
    if (!note.text || typeof note.text !== 'string') {
      return false;
    }
    if (!animal.personalityTraits || !Array.isArray(animal.personalityTraits)) {
      return false;
    }
    return true;
  }

  //delete note?????????

  module.exports = { createNewnote, validateNote }