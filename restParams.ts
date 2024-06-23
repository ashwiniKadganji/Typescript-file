var Product = function(...nums: any[]){
    var result = 1;
    for(let i = 0;i < nums.length;i++){
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
}
console.log(Product(2,3,4,5,6));
