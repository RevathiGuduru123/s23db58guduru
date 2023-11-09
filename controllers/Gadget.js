var Gadget = require('../models/GadgetSchema');
// List of all Costumes
exports.Gadget_list = async function(req, res) {
    try{
        theGadgets = await Gadget.find();
        res.send(theGadgets);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        } 
};
// for a specific Costume.
exports.Gadget_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Gadget_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Gadget();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.type = req.body.type;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } ;
};
// Handle Costume delete form on DELETE.
exports.Gadget_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Gadget_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
 
// VIEWS
// Handle a show all view
exports.fruit_view_all_Page = async function(req, res) {
    try{
    console.log("IN")
    theGadgets = await Gadget.find();
    console.log(thefruits)
    res.render('fruits', { title: 'Search Results - Gadgets', results: theGadgets });
    }
    catch(err){
    //res.status(500);
    res.send(`{"error": ${err}}`);
    }
}