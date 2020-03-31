let arr = [[2, 3], 5, [[[2, 9], 4], 4], 1, 0];
let myArray = [];
function myFlat(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            myFlat(arr[i]);
        }
        else {
            myArray.push(arr[i]);
        }
    }
    myArray.sort((a, b) => a > b ? 1 : -1);
    return myArray;
}
console.log(myFlat(arr));
console.log(arr.flat(Infinity));