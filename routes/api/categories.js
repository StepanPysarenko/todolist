var config = require('config.json');
var express = require('express');
var router = express.Router();
var db = require('db');

router.get('/', getCategories);

module.exports = router;

function getCategories(req, res) {
  db.query('SELECT id, name FROM category ORDER BY name ASC;')
    .on('end', function(result) {
      res.status(200).send(result.rows);
    })
    .on('error', function(err) {
      res.status(500).send();
    });
};