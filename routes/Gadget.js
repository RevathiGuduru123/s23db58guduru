var express = require('express');
const Gadget_controlers= require('../controllers/Gadget');
var router = express.Router();

/* GET home page. */
router.get('/detail', Gadget_controlers.Gadget_view_one_Page);

module.exports = router;

/* GET detail costume page */
