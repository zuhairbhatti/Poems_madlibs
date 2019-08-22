// itemRoutes.js

var express = require('express');
var app = express();
var itemRoutes = express.Router();

// Require Item model in our routes module
var Item = require('../models/Item');

// Defined store route
itemRoutes.route('/add').post(function (req, res) {
  var item = new Item(req.body);
      item.save()
    .then(item => {
    res.status(200).json({'item': 'Item added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
itemRoutes.route('/').get(function (req, res) {
  Item.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Defined edit route
itemRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){
      res.json(item);
  });
});

//  Defined update route
itemRoutes.route('/update/:id').post(function (req, res) {
  Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.Noun1 = req.body.Noun1;
      item.Noun2 = req.body.Noun2;
      item.Noun3 = req.body.Noun3;
      item.Adj1 = req.body.Adj1;
      item.Adj2 = req.body.Adj2;
      item.Adj3 = req.body.Adj3;
      item.Adv1 = req.body.Adv1;
      item.Adv2 = req.body.Adv2;
      item.Adv3 = req.body.Adv3;
      item.Prep1 = req.body.Prep1;
      item.Prep2 = req.body.Prep1;
      item.Prep3 = req.body.Prep3;
      item.Verb1 = req.body.Verb1;
      item.Verb2 = req.body.Verb2;
      item.Verb3 = req.body.Verb3;

      item.save().then(item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
itemRoutes.route('/delete/:id').get(function (req, res) {
  Item.findByIdAndRemove({_id: req.params.id}, function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = itemRoutes;