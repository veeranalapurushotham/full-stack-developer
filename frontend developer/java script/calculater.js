function additionOfNumbers(num1,num2)
{
    return num1+num2;
}
function subtractionOfNumbers(num1,num2)
{
    return num1-num2;
}
function multiplicationOfNumbers(num1,num2)
{
    return num1*num2;
}
function divisionOfNumbers(num1,num2)
{
    if(num2===0)
    {
        return "error:cannot divide by zero!";
    }    
    return num1/num2;
}
console.log("the operations:");
console.log("1.addition");
console.log("2.subtraction");
console.log("3.multiplication");
console.log("4.division");

const option=prompt("enter the option:");
const num1=parseFloat(prompt("enter the number1:"));
const num2=parseFloat(prompt("enter the number2:"));

 
if (option===1)
{
    console.log("the addition is:",additionOfNumbers(num1,num2));
}
else if(option===2)
{
    console.log("the subtraction of numbers:",subtractionOfNumbers(num1,num2));
}
else if(option===3)
{
    console.log("the subtraction of numbers:",multiplicationOfNumbers(num1,num2));
}
else
{
    console.log("the division of numbers:",divisionOfNumbers(num1,num2));
}