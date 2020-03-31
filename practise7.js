let str = [1, 1, 4, 5, 3, 9, 4, 3];
function removeDuplicate(str) {
    for (let i = 0; i < str.length - 1; i++) {

        for (let j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) {
                str.splice(j, j);
                j--;
            }
        }
    }
    return str;
}
console.log(removeDuplicate(str));