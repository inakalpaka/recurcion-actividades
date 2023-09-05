let string = "WWWWWWWWWWWWBWWWWWWWWWWWWWWBWWWWWWWWWMMWWWWWWWHWWWWWWWWWW";

function Codificación(str, i = 0, c = 1, nStr) { //arr = arreglo donde se busca el numero n, i indice , indice final
    if (str.length === i + 1) {
        console.log(i + "i" + c + "c");
        return true;
    }
    if (str[i] === str[i + 1]) {
        return Codificación(str, i + 1, c + 1);
    } else {
        console.log(nStr + c.toString() + str[i]);
        nStr = nStr + c.toString() + str[i];
        return Codificación(str, i + 1, c = 1)
    }
}
console.log(Codificación(string));

