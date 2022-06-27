const { Router } = require('express');
const router = Router();
const { groupsController } = require('../controllers/groups.controllers.js');

router.post('/groups', groupsController.addGroup); 
router.patch('/groups/:id', groupsController.patchGroup); 
router.get('/groups', groupsController.getGroups);
router.get('/groups/study', groupsController.getEndGroups);
router.get('/groups/week', groupsController.getGroupsByWeek);
router.delete('/groups/:id', groupsController.deleteGroup);


module.exports = router;