const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
// const ObjectId = mongoose.Types.ObjectId;

const Review = require('../../models/Review');
const User = require('../../models/User');
const validateReviewInput = require('../../validation/reviews');

router.get('/', (req, res) => {
    Review.find()
      .sort({ date: -1 })
      .then(reviews => res.json(reviews))
      .catch(err =>
        res.status(404).json({ noreviewsfound: "No reviews found" })
      );
});

router.get('/:id', (req, res) => {
    Review.findById(req.params.id)
      .then(review => res.json(review))
      .catch(err =>
        res.status(404).json({ noreviewfound: "No review found with that ID" })
      );
});

router.delete('/:reviewId', (req, res) => {
    Review.findByIdAndDelete(req.params.id)
        .then(review => res.json(review))
        .catch(err =>
            res.status(404).json({ noreviewfound: 'No review found with that ID' })
        );
});

// router.patch('/:id', (req, res) => {
//     Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
//       .populate("user", "username")
//       .then(node => res.json(node))
//       .catch(err => res.status(404).json(err))
// });

router.post(
    '/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateReviewInput(req.body);
        debugger
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newReview = new Review({
            reviewer_id: req.user.id, 
            reviewee_id: req.user.id,
            rating: req.body.rating,
            description: req.body.description
        });

      newReview.save().then(review => res.json(review));

    }
);

module.exports = router;