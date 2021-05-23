/*
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
*/
// M1=>using for loops
var numIdenticalPairs = function(nums) {
    let i,j,count=0;
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                count++;
            }
        }
    }
    return count;
};
console.log(numIdenticalPairs([1,2,3,1,1,3]));

//M2 =>Not clear
var numIdenticalPairs = function(nums) {
    const map = new Map();
    let pairs = 0;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            pairs += map.get(nums[i]);
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    return pairs;
};
console.log(numIdenticalPairs([1,2,3,1,1,3]));
