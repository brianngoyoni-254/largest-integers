let num1= 10;
let num2 =25;
let num3=15;
let largest;
if (num1>=num2 && num1>=num3){
    largest=num1;
} else if(num2>=num1&&num2>=num3)
{
    largest=num2;
}else{
    largest=num3
}
console.log("largest number is:"+ largest);