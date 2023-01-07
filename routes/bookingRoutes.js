const express = require('express');
const Booking = require('../model/bookingModel');
const router = express.Router();

router.post('/create', async(req,res) => {
    const {name, number, email, location, date, time, desc} = req.body;

    if(!name || !number || !email || !location || !date || !time || !desc){
        res.status(400);
        throw new Error('Please include all fields');
    }

    const booking = await Booking.create({
        name,
        number,
        email,
        location,
        date,
        time,
        desc
    });

    booking.save();

    res.send("Booking created successfully");
});

router.get('/', async(req,res) => {

    const bookings = await Booking.find();

    res.send(bookings);
    
})

module.exports = router;