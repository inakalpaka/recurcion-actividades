let arg = "el alfajor mas sobre valorado es el gay mayen";
let arg2 = "es el gay mayen";
console.log(final(arg,arg2));
function final (arg,arg2,i=0){
    if(i+1 === arg.length){
        return false;
    }
    if(arg.slice(i) === arg2){
        return true;
    }
    return final(arg,arg2,i+1);
}