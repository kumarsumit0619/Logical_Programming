//Falsy(WAP to count no of falsy value in an array)
//undefined
//null
//''
//false
//0
//NaN
const array = [10, null, 1, undefined, '','',8, 2, 3];

function countTruthy(array){
  let count = 0;
  let res;
  for(let value of array){
    (value)? ++count : '';
  }
  return count;
}
console.log(countTruthy(array));//4
