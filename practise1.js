let arr = ['a', 'b', 'c'];
function deleteByIndex(arr, index) {
    delete arr[index];
    for (index; index < arr.length; index++) {
        arr[index] = arr[index + 1];
    }
    arr.length -= 1;
    return arr;
}
console.log(deleteByIndex(arr, 1));
let arr1 = ['a', 'b', 'c'];
arr1.splice(1, 1);
console.log(arr1);