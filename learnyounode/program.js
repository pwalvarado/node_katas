total = 0;
argv_length = process.argv.length;

for (var i = 2; i < argv_length; i++ ) {
 total += +process.argv[i];
}
console.log(total);
