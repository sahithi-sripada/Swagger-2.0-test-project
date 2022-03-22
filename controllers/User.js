'use strict';

var utils = require('../utils/writer.js');
var Application = require('../service/UserService');

// module.exports.createApplication = async function createApplication (req, res, next) {
//   // const body = req.body
//   var body = req.swagger.params['body'].value;
//   console.log("Cont 5",body)
//   Application.createApplication(body)
//     .then(function (response) {
//       console.log("Cont then")

//       utils.writeJson(res, response);
//     })
//     .catch(function (response) {
//       utils.writeJson(res, response);
//     });
//     console.log("cont 6")

// };
module.exports.createApplication = function createApplication (req, res, next) {
  var body = req.swagger.params['body'].value;
  Application.createApplication(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.getUserList = function getUserList (req, res, next) {
  Application.getUserList()
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
}

module.exports.storeApplication = async function storeApplication (req, res, next) {
  Application.storeApplication()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getApplicationById = async function getApplicationById (req, res, next, id) {
  Application.getApplicationById(id)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
}
