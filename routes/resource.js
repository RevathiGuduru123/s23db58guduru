var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Gadgets_controller = require('../controllers/Gadgets');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Gadgets.
router.post('/Gadgets', Gadgets_controller.Gadgets_create_post);
// DELETE request to delete Gadgets.
router.delete('/Gadgets/:id', Gadgets_controller.Gadgets_delete);
// PUT request to update Gadgets.
router.put('/Gadgets/:id', Gadgets_controller.Gadgets_update_put);
// GET request for one Gadgets.
router.get('/Gadgets/:id', Gadgets_controller.Gadgets_detail);
// GET request for list of all Gadgets items.
router.get('/Gadgets', Gadgets_controller.Gadgets_list);
module.exports = router;

