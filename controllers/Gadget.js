var Gadget = require('../models/GadgetSchema');
// List of all Gadgets
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

// Handle a show one view with id specified by query
exports.Gadget_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Gadget.findById( req.query.id)
    res.render('Gadgetdetail',
    { title: 'Gadget Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Gadget_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Gadgetcreate', { title: 'Gadget Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for updating a costume.
// query provides the id
exports.Gadget_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Gadget.findById(req.query.id)
    res.render('Gadgetupdate', { title: 'Gadget Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
// Handle a delete one view with id from query
exports.Gadget_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Gadget.findById(req.query.id)
    res.render('Gadgetdelete', { title: 'Gadget Delete', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };  
// for a specific Gadget.
exports.Gadget_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Gadget.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
// Handle Gadget create on POST.
exports.Gadget_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Gadget();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Gadget_name":"goat", "type":12, "price":"large"}
    document.name = req.body.name;
    document.name = req.body.name;
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
// Handle Gadget delete form on DELETE.
exports.Gadget_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Gadget.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
//Handle Gadget update form on PUT.
exports.Gadget_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Gadget update PUT' + req.params.id);
    };
 
// VIEWS
// Handle a show all view
exports.Gadget_view_all_Page = async function(req, res) {
    try{
        theGadget = await Gadget.find();
        res.render('Gadget', { title: 'Gadget Search Results', results: theGadget });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
    };

exports.Gadget_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Gadget.findById( req.params.id)
    // Do updates of properties
    if(req.body.name) toUpdate.name = req.body.name;
    if(req.body.type) toUpdate.type = req.body.type;
    if(req.body.price) toUpdate.price = req.body.price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

