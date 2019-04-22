const express = require('express');
const router = express.Router();

// @route GET api/todos/test
// @desc Test todos route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Todos Works"}));

module.exports = router;