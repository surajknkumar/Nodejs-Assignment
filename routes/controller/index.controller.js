/**
 * @format
 * @author Suraj Kumar
 * @email surajknkumar@gmail.com
 * @Owner Interview
 */

var express = require('express');
var routes = express.Router();
var service = require('../service/service');
const DIR = require('dotenv').config();
//Post get-meta-data with payload module_name and screen_name
routes.post('/get-meta-data', (req, res) => {
  const url = `${DIR.parsed.FOLDER_PATH}/${req.body.module_name}/${req.body.screen_name}.json`;
  service
    .getMetaData(url)
    .then(function (data) {
      if (data) {
        res.send(data);
      } else res.status(401);
    })
    .catch((err) => {
      res.send({
        message: `no such file or directory, ${req.body.module_name} ${req.body.screen_name}`,
      });
    });
});

//get-meta-data
routes.get('/get-meta-data/*', (req, res) => {
  const url = `${DIR.parsed.FOLDER_PATH}/${req.originalUrl.replace(
    '/get-meta-data/',
    ''
  )}.json`;
  service
    .getMetaData(url)
    .then((data) => {
      if (data) {
        res.send(data);
        res.status(200);
      } else {
        res.status(401);
      }
    })
    .catch((err) => {
      res.send({message: 'no file or directory found'});
    });
});
module.exports = routes;
