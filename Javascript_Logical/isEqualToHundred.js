//Write a JS program to check two numbers and return true if one of them is 100 or the sum of both is 100

//using Simple function
function isEqualToHundred(a,b){
    return (a===100 || b===100 || a+b===100)? true : false ;
}
console.log(isEqualToHundred(10,10)); //false

//using Arrow function
const isEqualToHundred = (a,b) => ((a===100 || b===100 || a+b===100)? true : false);
console.log(isEqualToHundred(10,100)); //true
