function checkLastDigit(a,b,c){
    let last1=a%10;
    let last2= b %10;
    let last3= c%10;
if (last1===last2 &&last2===last3){
    return true;
}else{
    return false;
}
}
//example
console.log(checkLastDigit(27,57,87));
console.log(checkLastDigit(23,34,45));
