const { Router } = require('express');

const router = Router();

router.use(require("./group.route.js"));
router.use(require("./note.route.js"));
router.use(require("./student.route.js"));

module.exports = router;