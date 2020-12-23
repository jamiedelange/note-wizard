const router = require('express').Router();
const { createNewNote, validateNote, deleteById } = require('../../lib/notes');
const { notes } = require('../../db/db');
const createId = require('create-id');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = createId();
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const newNoteArray = deleteById(req.params.id, notes);
    res.json(newNoteArray);
});

module.exports = router;