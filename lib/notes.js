const fs = require('fs');
const path = require('path');

function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: noteArray }, null, 2));
    return note;
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
    return true;
}

const deleteById = (id, noteArray) => {
    const deleted = noteArray.splice(noteArray.findIndex(obj => obj.id === id), 1);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify({ notes: noteArray }, null, 2));
    return noteArray;
}

module.exports = { createNewNote, validateNote, deleteById }