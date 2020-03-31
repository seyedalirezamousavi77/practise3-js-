let str = "hi a 20 dsf 202 sdf 3 "
function extract(str) {
    // let a;
    // a = str.map(Number)
    let number = /[+-]?\d+(?:\.\d+)?/g;
    while (match = number.exec(str)) {
        console.log(match[0]);
    }
}
extract(str);


// the my function don't work beccuse my if in for don't Worker(what space character?)
// function myExtract(str) {
//     let arr = [];
//     let temp = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == /[^\s]/) {
//             arr.push(temp);
//             temp = '';
//         }
//         else {
//             temp += str[i];
//         }
//     }
//     arr = arr.filter(item => typeof item == Number);
//     console.log(arr);
// }
// myExtract(str);