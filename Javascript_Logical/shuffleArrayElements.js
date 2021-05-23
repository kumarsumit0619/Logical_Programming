/*
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is[x1, y1, x2, y2, x3, y3]= [2,3,5,4,1,7]
*/
//using for loop
var shuffle = function(nums, n) {
    let i;
    const arr=[];
    for(i=0;i<n;i++){
        arr.push(nums[i], nums[i+n]);
    }
    return arr;
};

console.log(shuffle([2,5,1,3,4,7], 3));

//using array map function
var shuffle = (nums, n) => nums.map((x,i) => i%2===0? nums[i/2] : nums[n+(i-1)/2]);
