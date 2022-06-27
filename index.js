const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./route/index.js"));





mongoose.connect("mongodb+srv://GigaChad:Jason952@cluster0.ygimb.mongodb.net/tempest?retryWrites=true&w=majority", () => {
    app.listen(3000, () => {
        console.log('Сервер запущен успешно')
      })
    
    })


