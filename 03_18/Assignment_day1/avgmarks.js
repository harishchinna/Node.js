var subject1=100;
var subject2= 200;
var subject3=30;
var avg = (subject1+subject2+subject3)/3;

console.log(avg);

if(avg>=75 && avg <=100)
{
  console.log("Excellent");
}
else if((avg>=60 && avg<75)  || (avg > 35 && avg<75))
{
  console.log("pass");
}
else if(avg <= 35)
{
  console.log("fail")
}
else
console.log("Invalid marks");