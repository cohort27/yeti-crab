const express = require('express');

const currencyController = require('../controllers/currencyController');

const router = express.Router();

const databaseController = require('../controllers/databaseController');

// router.get to API
router.post(
  '/',
  currencyController.getRate,

  (req, res) => {
    res.status(200).send(res.locals.rate);
  }
);

/*  currencyController.getHistory,
router.get('/login', databaseController.userLogin, (req, res) => {
    res.status(200).redirect('/')
})
*/

/*
router.get('/signup', databaseController.createUser, (req, res) => {
    res.status(200).redirect('/')
})
*/

//Hello all//

module.exports = router;
