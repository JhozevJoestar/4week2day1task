const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: String,
    group: {
        ref: 'Group',
        type: mongoose.SchemaTypes.ObjectId
    },
    payment: Boolean,
    fullPayment: Boolean,
    progress: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;