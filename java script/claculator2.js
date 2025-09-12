console.log("the operations:");
console.log("1.addition");
console.log("2.subration");
console.log("3.multiplication")
console.log("4.division")
const redline=require("readline");
const r1=redline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("enter the option:",function(option){
let a=10;
let b=20;
if (option===1)
{
    return a+b;
}
else if(option===2)
{
    return a-b;
}
else if(option===3)
{
    return a*b;
}
else{
    return a/b;
}
r1.close();
});