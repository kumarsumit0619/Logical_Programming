/*
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
*/
//using for loop
var numJewelsInStones = function(jewels, stones) {
    let i,j,count=0;
    for(i=0;i<jewels.length;i++){
        for(j=0;j<stones.length;j++){
           if(jewels[i]===stones[j]){
               count++;
           }
        }
    }
    return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
