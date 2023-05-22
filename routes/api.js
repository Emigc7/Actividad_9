const express = require('express');
const router = express.Router();

router.use('/posts',require('./api/posts'))
router.use('/users',require('./api/users'))

module.exports = router;
