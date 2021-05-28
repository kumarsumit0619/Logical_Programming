/*
input % 3 => Fizz
input % 5 => Buzz
input % 15 => FizzBuzz
input !== number => Not a number
input is anything else => return input
*/

function fizzBuzz(input){
  // if(isNaN(input))
  //   return 'Not a number';
  if(typeof input !== 'number')
    return 'Not a number';
  else{
    let mod3 = input % 3 === 0;
    let mod5 = input % 5 === 0;
    if(mod3 && mod5)
        return 'FizzBuzz';
    else if(mod3)
        return 'Fizz';
    else if(mod5)
        return 'Buzz';
    else
        return input;
  }
}
let res = fizzBuzz(15);
console.log(res);
