var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Gadget_controller = require('../controllers/Gadget');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Gadgets.
router.post('/Gadget', Gadget_controller.Gadget_create_post);
// DELETE request to delete Gadgets.
router.delete('/Gadget/:id', Gadget_controller.Gadget_delete);
// PUT request to update Gadgets.
router.put('/Gadget/:id', Gadget_controller.Gadget_update_put);
// GET request for one Gadgets.
router.get('/Gadget/:id', Gadget_controller.Gadget_detail);
// GET request for list of all Gadgets items.
router.get('/Gadget', Gadget_controller.Gadget_list);
module.exports = router;

