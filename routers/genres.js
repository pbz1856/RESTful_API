const express = require("express");
const router = express.Router();
const { makeId } = require("../util/util");

const ID_LENGTH = 20;

router.get('/', (req, res, next) => {
  res.send('Welcome to the API endpont');
});

// Default
router.get('/v1/genres', (req, res, next) => {
  res.set({ Workers: makeId(ID_LENGTH) });
  res.send('This is Genres default page');
});

router.get('/v1/genres/:id', (req, res, next) => {
  res.send('This is Genres');
});

router.get('/v1/genres', (req, res, next) => {
  res.send('This is Genres');
});

module.exports = router;