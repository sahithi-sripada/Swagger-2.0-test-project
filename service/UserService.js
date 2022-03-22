'use strict';

exports.getUserList = function()  {
  return [
    {
      firstName : "thi",
      lastName : "sri",
      password : "password1",
      userStatus : 6,
      phone : "9999999999",
      id : 1,
      email : "email@thi.com",
      username : "thi"
    },
    {
      firstName : "thya",
      lastName : "sri",
      password : "password2",
      userStatus : 3,
      phone : "0000000000",
      id : 2,
      email : "email@thya.com",
      username : "thya"
    }
   ]
}

exports.createApplication = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

exports.storeApplication = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

exports.getApplicationById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "password" : "password",
  "userStatus" : 6,
  "phone" : "phone",
  "id" : 0,
  "email" : "email",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

