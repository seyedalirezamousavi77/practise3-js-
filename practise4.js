function findByItem(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item)
            console.log(`index : ${i} , item : ${item}`);
    }
}
findByItem([2, 3, 4], 3);
let user = [2, 3, 4];
user.filter((item, index) => { if (item == 3) console.log(`index : ${index} , item : ${item}`) })