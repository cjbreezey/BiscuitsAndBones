const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Event = require('../../models/Event');
const validateEventInput = require('../../validation/events');
mongoose.set('useFindAndModify', false);

router.get('/', (req, res) => {
    Event.find()
        .sort({ date: -1 })
        .then(events => res.json(events))
        .catch(err => res.status(404).json({ noeventsfound: 'No events found' }));
});

router.get('/user/:user_id', (req, res) => {
    Event.find({user: req.params.user_id})
        .then(events => res.json(events))
        .catch(err =>
            res.status(404).json({ noeventsfound: 'No events found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(err =>
            res.status(404).json({ noeventfound: 'No event found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateEventInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newEvent = new Event({
        host_id: req.user.id,
        title: req.body.title,
        location: req.body.location,
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        lat: req.body.lat,
        lng: req.body.lng,
        attendees: [req.user.id]
      });
  
      newEvent.save().then(event => res.json(event));
});

  router.delete("/:eventid", passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Event.deleteOne({ _id: req.params.eventId })
      .then (e => {res.json(e)}) 
      .catch(e => res.status(404).json({ noeventfound: 'No Event Found' }))
});

  router.patch("/:id", (req, res) => {
    debugger
    const filter = {_id: req.params.id};
    const update = req.body;

    Event.findOneAndUpdate(filter, update, {new:true}).then(event => {
      const updatedEvent = {
        host_id: event.user.id,
        title: event.title,
        location: event.location,
        date: event.date,
        time: event.time,
        description: event.description,
        lat: event.lat,
        lng: event.lng, 
        attendees: event.attendees
      }
      res.json(updatedEvent);
    })
    // .catch(err => res.status(404).json(err));
  }) 

router.delete("/:eventid", passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Event.deleteOne({ _id: req.params.eventid })
        .then(e => { res.json(e) })
        .catch(e => res.status(404).json({ noeventfound: 'No Event Found' }))
    }
);

router.delete("/:eventid", passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Event.deleteOne({ _id: req.params.eventid })
      .then (e => {res.json(e)}) 
      .catch(e => res.status(404).json({ noeventfound: 'No Event Found' }))
  }
);

  module.exports = router;