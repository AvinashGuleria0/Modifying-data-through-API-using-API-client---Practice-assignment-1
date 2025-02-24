const mongoose = require("mongoose");

const menuItemsData = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true 
    }
})

const MenuItem = mongoose.model("MenuItem", menuItemsData);
module.exports = MenuItem;