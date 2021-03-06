const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateSignUpInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');
const validateUserUpdate = require('../../validation/update_user');
const upload = require("../../services/image_upload");
const singleUpload = upload.single("image");

//REGISTER
router.post("/signup", (req, res) => {
  const { errors, isValid } = validateSignUpInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, name: user.name, bio: null };
              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//LOGIN
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }).then(user => {
    if (!user) {
      errors.name = "This user does not exist";
      return res.status(400).json(errors);
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, name: user.name, bio: user.bio, pet_name: user.pet_name };
        jwt.sign(payload, keys.secretOrKey, { expiresIn: 9000 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

router.patch("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateUserUpdate(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  let filter = { _id: req.user.id };
  let update = req.body;
  User.findOneAndUpdate(filter, {$set: {id: filter, name: req.body.name, bio: req.body.bio, pet_name: req.body.pet_name}}, { new: true })
    .then(user => {
      let updateUser = {
        id: user._id,
        name: user.name, 
        profilePicture: user.profilePicture,
        bio: user.bio,
        pet_name: user.pet_name
      }
      res.json(updateUser)
    })
    .catch(err =>
      res.status(400).json(err))
});

router.get("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      let returnedUser = {
        id: user._id,
        name: user.name,
        profilePicture: user.profilePicture,
        bio: user.bio,
        pet_name: user.pet_name
      }
      res.json(returnedUser)
    })
    .catch(err =>
      res.status(400).json(err))
});

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});

//PROFILE PIC
router.post("/:id/add-profile-pictures", function (req, res) {
  const uid = req.params.id;

  singleUpload(req, res, function (err){

    if (err) {
      return res.json({
        success: false,
        errors: {
          title: "image upload error",
          detail: err.message,
          error: err,
        },
      });
    }

    let update = {$set: { profilePicture: req.file.location }};

    User.findByIdAndUpdate(uid, update, {new: true})
      .then((user) => res.status(200).json({ success: true, user: user }))
      .catch((err) => res.status(400).json({ success: false, error: err}));
  });
});

//PRIVATE AUTH
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
})

module.exports = router;