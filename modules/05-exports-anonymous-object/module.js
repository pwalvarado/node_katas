var MyObject = function () {}; //constructor object

MyObject.prototype.myFunction = function () {
  console.log('Hello World!');
};

module.exports = new MyObject();
