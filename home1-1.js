// l = [26,  2, 1, 7, 1]
// target = 6


// nums = [26, 3, 2, 4, 7, 1], target = 6
// let nums = [3, 3, 4, 5, 9]
// let target = 6

// var nums = [4, 2, 11, 7]
var nums = [4, 2, 7, 11, 15]
var target = 9

function index(nums){
for (let i of nums){
	for (let j of nums){
		if (nums.indexOf(i) != nums.indexOf(j) && i+j == target ){
		console.log(nums.indexOf(i))}
	}
	
}
}

index(nums)