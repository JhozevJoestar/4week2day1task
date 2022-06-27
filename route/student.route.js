const { Router } = require('express');
const router = Router();
const { studentsController } = require('../controllers/students.controllers.js');

router.post('/students', studentsController.addStudent);
router.patch('/students/:id', studentsController.patchStudent);
router.delete('/students/:id', studentsController.deleteStudent);
router.get('/students/study', studentsController.getStudentsStudy); 
router.get('/students/searchwork', studentsController.getStudentsSearchWork); 
router.get('/students/vacancy', studentsController.getStudentsVacancy); 
router.get('/students/work', studentsController.getStudentsWork); 
router.get('/students', studentsController.getStudents); 
router.get('/students/group/:id', studentsController.getStudentsByGroup); 
router.get('/students/fullpay', studentsController.getFullPayStudents);
router.get('/students/halfpay', studentsController.getHalfPayStudents);
router.get('/students/nopay', studentsController.getNoPayStudents);



module.exports = router;