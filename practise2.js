let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [9, 8, 7, 0];
function combine() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            arr.push(arguments[i][j]);
        }
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
console.log(combine(arr1, arr2, arr3));
let arr = arr1.concat(arr2, arr3);
console.log(arr.sort((a, b) => a > b ? 1 : -1));