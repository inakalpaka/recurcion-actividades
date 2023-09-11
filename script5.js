let n = 38;
let n2 = "";
function binaryToDecimal (n,n2){
    if(n === 1||n === 0){
        return (n2+n).toString().split("").reverse().join("");;
    }
    if(n%2 === 0){
        return binaryToDecimal(Math.trunc(n/2),n2 + "0");
    }
    if(n%2 === 1){
    return binaryToDecimal(Math.trunc(n/2),n2 + "1");
    }
}
console.log(binaryToDecimal(n,n2));