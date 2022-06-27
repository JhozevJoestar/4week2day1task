const Note = require('../models/Note.model.js');
// const mongoose = require('mongoose');

module.exports.notesController = {


    getNotes: async (req, res) => {
        try {
          res.json(await Note.find({}));
        } catch (error) {
          res.json("error");
        }
      },




      getNotesByStudent: async (req, res) => {
        try {
          res.json(await Note.find({student: req.body.student}));
        } catch (error) {
          res.json("error");
        }
      },



    addNote: async (req, res) => {
      try {
        const add = await Note.create ({
          student,
          text
        } = req.body
        )
          res.json('Заметка добавлена');
        } catch (error) {
          res.json("error")
        }
      },




      patchNote: async (req, res) => {
        try {
          const patch = await Note.findByIdAndUpdate(req.params.id, {
            student,
            text
          } = req.body
        )
         res.json('Заметка изменена')
        } catch (error) {
          res.json("error");
        }
      },





  deleteNote: async (req, res) => {
    try {
      const dele = await Note.findByIdAndRemove(req.params.id)
      res.json("Заметка удалена")
    } catch (error) {
      res.json("error");
    }
  },
    

}