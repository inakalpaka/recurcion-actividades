let string = "WWWWWWWWWWWWBWWWWWWWWWWWWWWBWWWWWWWWWMMWWWWWWWHWWWWWWWWWW";

function Codificación(str, nStr, i = 0, c = 1) { //arr = arreglo donde se busca el numero n, i indice , indice final
    if (str.length === i + 1) {
        console.log(nStr);
        return true;
    }
    if (str[i] === str[i + 1]) {
        return Codificación(str,nStr, i + 1, c + 1);
    } else {
        nStr = nStr + c.toString() + str[i];
        return Codificación(str,nStr, i + 1, c = 1)
    }
}
let a = "";
console.log(Codificación(string,a));