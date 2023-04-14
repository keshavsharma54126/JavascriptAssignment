
function calculate(num1,num2,operation){
    if(operation === '+'){
        add(num1,num2);
    }
    else if(operation === '-'){
        subtract(num1,num2);
    }
    else if(operation === '*'){
        multiply(num1,num2);
    }
    else if(operation === '/'){
        divide(num1,num2);
    }
}


function add(num1,num2){
    console.log(`addition of num1 and num2 is ${num1+num2}`);
}
function subtract(num1,num2){
    console.log(`subtraction of num1 and num2 is ${num1-num2}`);
}
function multiply(num1,num2){
    console.log(`multiplication of num1 and num2 is ${num1*num2}`);
}
function divide(num1,num2){
    console.log(`division of num1 and num2 is ${num1/num2}`);
}

calculate(60,10,'/');
calculate(60,10,'-');
calculate(60,10,'+');
calculate(60,10,'*');