const express = require('express');
const MenuItem = require('./menuItem');
const app = express();
app.use(express.json());


app.post('/', async(req, res) => {
    try{
        const {name, description, price} = req.body;
        
        if (!name || !price){
            return res.status(400).json({message: `Name and price required`})
        }
        const newItem = new MenuItem({name, description, price});
        await newItem.save();
        
        res.status(201).json({message: `MenuItem added!`, item: newItem})
    }catch(err) {
        console.log(err);
    }
});

app.get("/", async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

module.exports = app;