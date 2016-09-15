var MyObject = function () {}; //constructor object

MyObject.prototype.myFunction = function () {
  console.log('Hello World!');
};

// before:
// exports.Named = new MyObject();
module.exports = MyObject;
