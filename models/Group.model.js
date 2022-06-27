const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    number: Number,
    week: Number,
    study: Boolean,
    students: [{
        ref: 'Student',
        type: mongoose.SchemaTypes.ObjectId
    }]
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;