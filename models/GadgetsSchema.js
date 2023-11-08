const mongoose = require("mongoose")
const GadgetsSchema = mongoose.Schema({
name: String,
type: String,
price: Number
})
module.exports = mongoose.model("Gadgets",
GadgetsSchema)