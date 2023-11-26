const express = require("express");
const router = express.Router();

const findById = require("../services/userServices");

const middleware = (req, res, next) {
  console.log("Hello");
};

router.use(middleware);

router.get('/users', middleware , (req, res) => {
    res.send('Users are Here');
  });
  
router.post('/users', (req, res) {
    console.log(req.body);
    res.send('Created Users');
  });

router.get('/users/:userid', (req, res) => {
  res.send(users[req.params.userid]);
});

module.exports = router;

