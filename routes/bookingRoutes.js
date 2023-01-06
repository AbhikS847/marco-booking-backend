const express = require('express');

const router = express.Router();

router.post('/create', (req,res) => {
    const {name, number, email, location, date, time, desc} = req.body;

    if(!name || !number || !email || !location || !date || !time || !desc){
        res.status(400);
        throw new Error('Please include all fields');
    }

    res.send("Create a Booking");
})

module.exports = router;