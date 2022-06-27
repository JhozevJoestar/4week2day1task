const { Router } = require('express');
const router = Router();
const { notesController } = require('../controllers/notes.controllers.js');

router.post('/notes', notesController.addNote); 
router.patch('/notes/:id', notesController.patchNote); 
router.get('/notes', notesController.getNotes);
router.get('/notes/student', notesController.getNotesByStudent);
router.delete('/notes/:id', notesController.deleteNote);


module.exports = router;