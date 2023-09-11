let str = "recon2ocer";
function palindromo (str,i=0){
    if(i === Math.ceil(str.length/2)){
        return true;
    }
    if(str[i] === str[str.length-1-i]){
        return palindromo(str,i+1);
    }else{
        return false;
    }
}
console.log(palindromo(str));

