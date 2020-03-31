let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
function replaceByItem(arr, oldItem, newItem) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] == oldItem)
            arr[i] = newItem;
    return arr;
}
console.log(replaceByItem(arr, 'e', 't'));
arr.splice(3, 1, "z");
console.log(arr);