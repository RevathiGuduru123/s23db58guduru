var express = require('express');
const Gadget_controlers= require('../controllers/Gadget');
var router = express.Router();

/* GET home page. */
router.get('/detail', Gadget_controlers.Gadget_view_one_Page);

/* GET create costume page */
router.get('/create', Gadget_controlers.Gadget_create_Page);

/* GET create update page */
router.get('/update', Gadget_controlers.Gadget_update_Page);

/* GET delete costume page */
router.get('/delete', Gadget_controlers.Gadget_delete_Page);


module.exports = router;

/* GET detail costume page */

