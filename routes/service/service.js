/**
 * @format
 * @author Suraj Kumar
 * @email surajknkumar@gmail.com
 * @Owner Interview
 */

var Q = require('q');
var fs = require('fs');

const getJsonFile = async (file) => {
  return await JSON.parse(fs.readFileSync(file, 'utf8'));
};

const getMetaData = (body) => {
  var deferred = Q.defer();
  getJsonFile(body)
    .then((doc) => {
      deferred.resolve(doc);
    })
    .catch((err) => {
      deferred.reject(err.name + ': ' + err.message);
    });
  return deferred.promise;
};
var Service = {
  getMetaData: getMetaData,
};

module.exports = Service;
