// let nums = [7, 13, 5, 1, 99]
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let nums = [11, 45, 2, 5, 4, 4]


function num_sum(nums){
	let sum = 0
	for (let i = 0; i< nums.length; i++){
		sum += nums[i];
}
console.log(sum);
}
num_sum(nums);