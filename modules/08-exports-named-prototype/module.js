var MyObject = function () {}; //constructor object

MyObject.prototype.myFunction = function () {
  console.log('Hello World!');
};

// before:
// module.exports = MyObject;
exports.MyPrototype = MyObject;
