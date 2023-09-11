let str = "el alfajor mas sobre valorado es el gay mayen";
let rts = "";
let i = str.length-1;
invertir(str,rts,i);
function invertir (str,rts,i) {
    if(i === -1){
        console.log(rts);
        return true;
    }
    return invertir(str,rts + str[i],i-1)
}
