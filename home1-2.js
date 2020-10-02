// let nums = [1, 3, 4, 2, 2]
// let nums = [3, 1, 3, 4, 2, true]
let nums = [9, 4, 77, 5, 1, 12,'querty', 66, 4]

function noUnic(nums){
for (i = 0; i < nums.length; i++){
	for (j = i+1; j < nums.length; j++){
		if (nums[i] == nums[j])
			console.log(nums[i])
	}
}
}

noUnic(nums)