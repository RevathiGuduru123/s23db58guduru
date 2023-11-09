const mongoose = require("mongoose")
const GadgetSchema = mongoose.Schema({
name: String,
type: String,
price: Number
})
module.exports = mongoose.model("Gadget",
GadgetSchema)