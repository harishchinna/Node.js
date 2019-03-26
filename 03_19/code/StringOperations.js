var i = "this is a test".indexOf("is");
console.log(i);


var s = "this is a test string.".substr(19, 3);
var s1 = "this is a test string.".slice(19, 22);
console.log(s);
console.log(s1);


var s = "a|b|c|d|e|f|g|h".split("|");
console.log(s);


var s = '       cat   \n\n\n    '. trim();
console.log(s);


var str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "nodejs");
console.log(n);
