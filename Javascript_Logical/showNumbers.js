function showNumbers(limit){

  for(let i = 0 ; i <= limit ; i++){
   const message = (i % 2 === 0) ? 'EVEN':'ODD';
   console.log(i, message);
  }
}
(showNumbers(10));
/*
output:
0 "EVEN"
1 "ODD"
2 "EVEN"
3 "ODD"
4 "EVEN"
5 "ODD"
6 "EVEN"
7 "ODD"
8 "EVEN"
9 "ODD"
10 "EVEN"
*/
