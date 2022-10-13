//arr of nums, target num, return the indicies of two nums that add up to the target
// [1, 2, 3, 4, 5] - 9 => 3, 4

//arr of nums not empty, never NaN, whole nums, positive nums, atleast/only two nums, num + itself wont equal target
//return the indicies of two nums that add up to the target -> []

function findIndicies(arr, target){
    //outside loop is grabbing original num
    for(let i = 0; i < arr.length; i++){
        //inside loop is compaing ouside to inside nums
        for(x = 0; x < arr.length; i++){
            if(arr[i] + arr[k] === target && i !== x){
                return [i, x]
            }
        }
    }

}

console.log(findIndicies([1, 2, 3, 4, 5], 9), '[3, 4]')
console.log(findIndicies([5, 6, 9], 11), '[0, 1]')
