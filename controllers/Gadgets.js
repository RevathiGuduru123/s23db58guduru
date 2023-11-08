var Gadgets = require('../models/Gadgets');
// List of all Gadgets
exports.Gadgets_list = function(req, res) {
res.send('NOT IMPLEMENTED: Gadgets list');
};
// for a specific Gadgets.
exports.Gadgets_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Gadgets detail: ' + req.params.id);
};
// Handle Gadgets create on POST.
exports.Gadgets_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Gadgets create POST');
};
// Handle Gadgets delete form on DELETE.
exports.Gadgets_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Gadgets delete DELETE ' + req.params.id);
};
// Handle Gadgets update form on PUT.
exports.Gadgets_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Gadgets update PUT' + req.params.id);
};
