var str = "2019-03-19T13:17:08.280Z";
var utcDate1 = new Date(str);
console.log(utcDate1.toLocaleDateString());

console.log(utcDate1.toUTCString());

console.log(utcDate1.toISOString());