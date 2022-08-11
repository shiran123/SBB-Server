const express = require('express');
const router = express.Router();
const Userx = require('../Models/User');

const User = (app)=>{

    router.post('/Create', async (req, res) => {
        const us = new Userx({
            UserName: req.body.name,
            Password: req.body.password
        })
        try {
          const newus = await us.save()
          res.status(201).json(newus)
        } catch (err) {
          res.status(400).json({ message: err.message })
        }
    });

    app.use("/API/User",router);
}

module.exports={User};