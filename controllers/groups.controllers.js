const Group = require('../models/Group.model.js');
// const mongoose = require('mongoose');

module.exports.groupsController = {


    getGroups: async (req, res) => {
        try {
          res.json(await Group.find({}));
        } catch (error) {
          res.json("error");
        }
      },





      getGroupsByWeek: async (req, res) => {
        try {
          res.json(await Group.find({week: req.body.week}));
        } catch (error) {
          res.json("error");
        }
      },





      getEndGroups: async (req, res) => {
        try {
          res.json(await Group.find({study: false}));
        } catch (error) {
          res.json("error");
        }
      },



    



    addGroup: async (req, res) => {
      try {
        const add = await Group.create ({
          number,
          week,
          students,
          study
        } = req.body
        )
          res.json('Группа добавлена');
        } catch (error) {
          res.json("error")
        }
      },




      patchGroup: async (req, res) => {
        try {
          const patch = await Group.findByIdAndUpdate(req.params.id, {
            number,
            week,
            students,
            study
        } = req.body
        )
         res.json('Группа изменена')
        } catch (error) {
          res.json("error");
        }
      },





  deleteGroup: async (req, res) => {
    try {
      const dele = await Group.findByIdAndRemove(req.params.id)
      res.json("Группа удалена")
    } catch (error) {
      res.json("error");
    }
  },



}