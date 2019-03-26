array1 = [{'namekey':'1', 'value':'mango'},{'namekey':'2', 'value':'car'}];
array2 = [{'namekey':'1', 'tag':'fruits'}, {'namekey':'2', 'tag':'audi'}];
var array3 = [];

for(i=0; i<array1.length; i++)
{
  for(j=0; j<array2.length; j++)
  {
    if(array1[i].namekey == array2[j].namekey)
    {
      var obj = {};
      obj.namekey = array1[i].namekey;
      obj.value = array1[i].value;
      obj.tag = array2[j].tag;
    array3.push(obj);
    }
  }
}
console.log(array3);