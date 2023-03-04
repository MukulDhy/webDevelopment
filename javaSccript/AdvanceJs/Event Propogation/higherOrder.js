const add = (a,b) => {
    return a+b;
}
const sub = (a,b) => {
    return a-b;
}
const Mult = (a,b) => {
    return (a*b);
}
const divide = (a,b) => {
    return (a/b);
}

const calculator = (num1,num2,operator) => {
    return operator(num1,num2);
}

console.log(calculator(5,2,Mult));

