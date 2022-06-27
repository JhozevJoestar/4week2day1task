const Student = require('../models/Student.model.js');
// const mongoose = require('mongoose');

module.exports.studentsController = {


    getStudents: async (req, res) => {
        try {
          res.json(await Student.find({}));
        } catch (error) {
          res.json("error");
        }
      },



      getStudentsStudy: async (req, res) => {
        try {
          res.json(await Student.find({progress: 'В процессе обучения'}));
        } catch (error) {
          res.json("error");
        }
      },



      getStudentsSearchWork: async (req, res) => {
        try {
          res.json(await Student.find({progress: 'Ищет работу'}));
        } catch (error) {
          res.json("error");
        }
      },




      getStudentsVacancy: async (req, res) => {
        try {
          res.json(await Student.find({progress: 'Получил оффер'}));
        } catch (error) {
          res.json("error");
        }
      },




      getStudentsWork: async (req, res) => {
        try {
          res.json(await Student.find({progress: 'Вышел на работу'}));
        } catch (error) {
          res.json("error");
        }
      },



    getStudentsByGroup: async (req, res) => {
        try {
          res.json(await Student.find({group: req.params.id}));
        } catch (error) {
          res.json("error");
        }
      },




    getFullPayStudents: async (req, res) => {
        try {
          res.json(await Student.find({payment: true, fullPayment: true}));
        } catch (error) {
          res.json("error");
        }
      },



    getHalfPayStudents: async (req, res) => {
        try {
          res.json(await Student.find({ payment: true,fullPayment: false}));
        } catch (error) {
          res.json("error");
        }
      },

    


      getNoPayStudents: async (req, res) => {
        try {
          res.json(await Student.find({ payment: false}));
        } catch (error) {
          res.json("error");
        }
      },



    



    addStudent: async (req, res) => {
      try {
        const add = await Student.create ({
          name,
          group,
          payment,
          fullPayment,
          progress,
        } = req.body
        )
          res.json('Студент добавлен');
        } catch (error) {
          res.json("error")
        }
      },




      patchStudent: async (req, res) => {
        try {
          const patch = await Student.findByIdAndUpdate(req.params.id, {
          name,
          group,
          payment,
          fullPayment,
          progress,
        } = req.body
        )
         res.json('Студент изменен')
        } catch (error) {
          res.json("error");
        }
      },





  deleteStudent: async (req, res) => {
    try {
      const dele = await Student.findByIdAndRemove(req.params.id)
      res.json("Студент удален")
    } catch (error) {
      res.json("error");
    }
  },
    


}