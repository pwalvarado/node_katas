'use strict';
let path = require('path');

class Check {
  constructor(file) {
    this.file = file;
  }

  isJsFile() {
    return path.extname(this.file) === '.js';
  }

  isInRoot() {
    return (this.file.match(/\//g) || []).length < 2;
  }

  isModuleFile() {
    return this.file.indexOf('-node.js') > -1;
  }

  isRequired() {
    return this.isInRoot() && !this.isModuleFile() && this.isJsFile();
  }

  isModuleObject() {
    return (this.isInRoot() && this.isJsFile()) || this.isModuleFile();
  }
}

//console.log(new Check('oelo.js').isRequired());
console.log(new Check('oelo.js').isRequired());
