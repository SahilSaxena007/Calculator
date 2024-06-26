// Basic Mathematical Functions
function addition(a, b){
    a = checkType(a);
    b = checkType(b);
    return a + b;
}

function subtract(a, b){
    a = checkType(a);
    b = checkType(b);
    return a - b;
}

function multiply(a, b){
    a = checkType(a);
    b = checkType(b);
    return a * b;
}


function divide(a, b){
    a = checkType(a);
    b = checkType(b);

    if (b == 0){
        return NaN;
    }else{
        return a / b;
    }
}

function checkType(num){
    if (typeof num != 'number'){
        num = parseFloat(num.trim());
    }else{
        num = num;
    }
    return num;

}

// Function to operate
function operate(a, b, op){
    let sol;
    if (op === '+'){
        sol = addition(a,b);
    }else if (op == '-'){
        sol = subtract(a,b);
    }else if(op == '*'){
        sol = multiply(a,b);
    }else{
        sol = divide(a,b);
    }
    if (isNaN(sol)){
        display_content = "";
        text_box.textContent = "ERROR";
    }else{
        display_content = Math.round(sol * 1000)/1000;
        text_box.textContent = display_content;
    }
    operator = "";
    point_count = 0;
}


function populate(event){
    let text = event.target.textContent;
    if (text === 'AC'){
        display_content = "";
        text_box.textContent = display_content;
    }else if (text === '+'||text === '-'||text === '*'||text === '/'){
        if (operator === ""){
            operator = text;
            display_content = display_content + text;
            text_box.textContent = display_content;
        }
        point_count = 0;  
    }else if (text === '='){
        if (operator !== ""){
            const arr = display_content.split(operator);
            if (!(arr[0] === ""||arr[1] === "")){
                num1 = arr[0];
                num2 = arr[1];
            }
            operate(num1, num2, operator);
        }        
    }else if(text === '+/-'){
        if (operator === ""){
            display_content = display_content * -1;
            text_box.textContent = display_content;
        }     
    }else if (text === '%'){
        if (operator === ""){
            operate(parseFloat(display_content), 100, '/');
        }
        
    }else if(text === '.'){
        if (point_count < 1){
            point_count++;
            display_content = display_content + text;
            text_box.textContent = display_content;
        }
                        
    }else{
        if (text_box.textContent === "ERROR"){
            text_box.textContent = "";
        }
        display_content = display_content + text;
        text_box.textContent = display_content;
    }
    
}


let num1, num2, operator;
operator = "";
let text_box = document.querySelector('.text-box span');
let number_buttons = document.querySelectorAll('button');
let point_count = 0;
let display_content = "";

number_buttons.forEach(function(number){
    number.addEventListener('click', populate);
});

