const express = require('express');
const router = express.Router();

const Question = require('../models/index').Question;
// ð NEW! Destructuring
// const {Question} = require('../models/index');

//Questions#index URL: /questions VERB: GET
router.get('/', function (request, response, next) {
  Question
    .findAll() // this returns promise...
    .then(function (questions) { // allowing us to use .then
      // the path of the template that response.render takes
      // is relative to the view/ folder by default
      response.render('questions/index', {questions: questions});
      // the second argument passed to response.render is an
      // object where all its properties will be available to
      // the rendered template as variables
    });
  // All Sequelize query methods return a promise
})

// Questions#show URL: /questions/:id VERB GET
// for a url '/questions/99', the req.params object will be equal to {id: '99'}
router.get('/:id', function(req, res){
  // res.send(req.params);
  const id = req.params.id;
  Question 
  .findById(id)
  .then(function (question){
    res.render('questions/show', {question: question})
  })
})

module.exports = router;
