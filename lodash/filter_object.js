'use_strict';

var _ = require('lodash');
var path = require('path');

var contents = [{
    Key: 'state-machine/',
    ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
    Size: 0,
    StorageClass: 'STANDARD',
    Owner: [Object],
  }, {
    Key: 'state-machine/1.js',
    ETag: '"34680c5d87161d1707eff8a2a1f30853"',
    Size: 2601,
    StorageClass: 'STANDARD',
    Owner: [Object],
  }, {
    Key: 'state-machine/7fbcf779-74cb-4150-acf2-c5eaa1b6c527.js',
    ETag: '"440944e274f68eb5f4e228342a5cebea"',
    Size: 3114,
    StorageClass: 'STANDARD',
    Owner: [Object],
  }, {
    Key: 'state-machine/deployments/',
    ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
    Size: 0,
    StorageClass: 'STANDARD',
    Owner: [Object],
  }, {
    Key: 'state-machine/deployments/csc-workorder-paisatest-states.zip',
    ETag: '"48d805013cf2b5eb2f722d9348bd091a"',
    Size: 4256,
    StorageClass: 'STANDARD',
    Owner: [Object],
  }, {
    Key: 'state-machine/state-machine-node.js',
    ETag: '"89fb9f7dff2af0a5fef170325a5119ee"',
    Size: 218,
    StorageClass: 'STANDARD',
    Owner: [Object],
  }, {
    Key: 'state-machine/templates/',
    ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
    Size: 0,
    StorageClass: 'STANDARD',
    Owner: [Object],
  }, {
    Key: 'state-machine/templates/state-machine-template.js',
    ETag: '"de8cebc13eb1d94877a58cccdce0f26d"',
    Size: 1777,
    StorageClass: 'STANDARD',
    Owner: [Object],
  },];

function isValidFile(file) {
  var isJsFile = path.extname(file) === '.js';
  var isInRoot = (file.match(/\//g) || []).length < 2;
  var isModuleFile = file.indexOf('-node.js') > -1;

  return isInRoot && !isModuleFile && isJsFile;
}

var filtered = _.filter(contents, function (o) {
    return isValidFile(o.Key);
  });

console.log(filtered);
