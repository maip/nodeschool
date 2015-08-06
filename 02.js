args = process.argv;
var len = args.length;
var sum = 0;
for (var i = 2; i < len; i++) {
  sum += Number(args[i]);
}
console.log(sum)
