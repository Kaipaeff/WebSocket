const express = require('express');

const router = express.Router();

const { renderHome, renderSecret } = require('../controllers/indexControllers');
const {checkUser} = require('../middlewares/common');


router.get('/', renderHome);
router.get('/secret', checkUser, renderSecret);

module.exports = router;
