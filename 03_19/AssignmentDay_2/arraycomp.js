function arrayUnique(array) {
    var a = array.concat();
   // console.log(a);
    for(var i=0; i<a.length; i++) {
     // console.log(i);
        for(var j=i+1; j<a.length; j++) {
         // console.log("j value:"+j);
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

var array1 = ["name","harish"];
var array2 = ["harish", "employee"];
    // Merges both arrays and gets unique items
var array3 = arrayUnique(array1.concat(array2));
console.log(array3);