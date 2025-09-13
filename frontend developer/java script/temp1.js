function areaOfTriangle(base, height) {
    return 0.5*base*height;
}

console.log("the area of triangle:",areaOfTriangle(5,10));
function factorialOfNumber(n){
    if(n==0 || n==1)
    {
        return 1;
    }
    else{
        return n*factorialOfNumber(n-1);
    }
}
console.log("the factoroal of a number is:",factorialOfNumber(5));
