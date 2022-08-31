let logAtleast5 = (n) => {
    for (let i = 1; i <= Math.max(5,n); i++) {
        console.log(i);
    }
} // This function has a big O of 0(n): as the input increases,
  // the runtime also increases almost proportionally to the input

logAtleast5(3); //1,2,3,4,5
console.log('\n');
logAtleast5(8); //1,2,3,4,5,6,7,8
console.log('\n');

let logAtMost5 = (n) => {
    for (let i = 1; i <= Math.min(5,n-1); i++) {
        console.log(i);
    }
}  // This function has a big O of 0(1): as the input increases,
// the runtime remains the same because the function always prints at most 5 outputs

logAtMost5(3); //1,2
console.log('\n'); 
logAtMost5(9); //1,2,3,4,5
console.log('\n');

let sum_of_array = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}  // This function has a big O of 0(1): as regards space complexity. As the input increases,
   // there is no need for additional space to be created in memory

console.log(sum_of_array([2,3,4]));
console.log('\n');
console.log(sum_of_array([2,4,5,6,7]));

