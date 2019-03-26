var date = new Date();
console.log(date);
console.log(date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear());




console.log( date.toLocaleDateString());
console.log( date.toLocaleTimeString());



var d =date.toString();
console.log(d);
console.log(d.substring(4,15));
console.log(d.substring(16,24));