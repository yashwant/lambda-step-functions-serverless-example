'use strict';

var start = (event, context, callback) => {
  callback(null, { message: 'Your function start executed successfully!', event });
};

var hello1 = (event, context, callback) => {
  callback(null, { message: 'Your function hello1 executed successfully!', event });
};

var hello2 = (event, context, callback) => {
  callback(null, { message: 'Your function hello2 executed successfully!', event });
};

var hello3 = (event, context, callback) => {
  callback(null, { message: 'Your function hello3 executed successfully!', event });
};

var hello4 = (event, context, callback) => {
  callback(null, { message: 'Your function hello4 executed successfully!', event });
};

var hello5 = (event, context, callback) => {
  callback(null, { message: 'Your function hello5 executed successfully!', event });
};

module.exports = {
  start,
  hello1,
  hello2,
  hello3,
  hello4,
  hello5
}
