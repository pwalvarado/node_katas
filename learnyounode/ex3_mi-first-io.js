var fs = require('fs')

file_path = process.argv[2]


try {
    var buff = fs.readFileSync(file_path);
} catch (err) {
    console.error(err);
}

var ary = buff.toString().split('\n');

console.log(ary.length - 1);


//    var fs = require('fs')
    
//    var contents = fs.readFileSync(process.argv[2])
//    var lines = contents.toString().split('\n').length - 1
//    console.log(lines)

