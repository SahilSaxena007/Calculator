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
    if (display_content.includes('.')){
        point_count = 1;
    }else{
        point_count = 0;
    }

}

function handleKeyEvent(event){
    let key = event.key;
    let keyMappings = {
        'Escape': 'AC',
        '+': '+',
        '-': '-',
        '*': '*',
        '/': '/',
        'Enter': '=',
        '=': '=',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '0': '0',
        '.': '.',
        '%': '%'
    };
    if (key in keyMappings){
        let text = keyMappings[key];
        console.log(text);
        populate(text);
    }

}

function populate(input){
    let text = input.toString();
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
                num1 = parseFloat(arr[0]);
                num2 = parseFloat(arr[1]);
            }
            operate(num1, num2, operator);
        }        
    }else if(text === '+/-'){
        if (operator === ""){
            display_content = parseFloat(display_content) * -1;
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


function populateButton(event){
    let text = event.target.textContent;
    populate(text);
    
}

function toggleStyles() {
    let body = document.querySelector('body');
    let doc = document.querySelector('html');
    let container = document.querySelector('.container');
    let toggleSwitch = document.getElementById('toggleSwitch'); 
    let box = document.querySelector('.text-box'); 
    let special_button = document.querySelector('#special');
    let spans = document.querySelectorAll('span');
    if (toggleSwitch.checked) {
        // Apply dark mode styles
        body.style.backgroundColor = '#1e1e1e'; 
        doc.style.backgroundColor = '#1e1e1e';
        container.style.backgroundColor = '#FFFFFF';
        text_box.style.backgroundColor = '#D9D9D9';
        box.style.backgroundColor = '#D9D9D9';
        special_button.style.backgroundColor = '#000000';
        special_button.style.color = '#FFFFFF';
        number_buttons.forEach(function(number){
            if (!number.classList.contains('orange') && number.id !== 'special'){
                number.style.backgroundColor = '#D9D9D9';
                
            }
        });

        spans.forEach(function(span) {
            if (!span.parentNode.classList.contains('orange') && span.parentNode.id !== 'special') {
                span.style.color = '#000000';
            }
        });     
            
        
    } else {
        body.style.backgroundColor = '#FFFFFF'; 
        doc.style.backgroundColor = '#FFFFFF';
        container.style.backgroundColor = '#000000';
        text_box.style.backgroundColor = '#1E1E1E';  
        box.style.backgroundColor = '#1E1E1E';
        special_button.style.backgroundColor = '#FFFFFF';
        special_button.style.color = '#000000';
        number_buttons.forEach(function(number){
            if (!number.classList.contains('orange') && number.id !== 'special'){
                number.style.backgroundColor = '#1E1E1E';
            }
        });

        spans.forEach(function(span) {
            if (!span.parentNode.classList.contains('orange') && span.parentNode.id !== 'special') {
                span.style.color = '#FFFFFF';
            }
        });
        
    }
}

let num1, num2, operator;
operator = "";
let text_box = document.querySelector('.text-box span');
let number_buttons = document.querySelectorAll('button');
let point_count = 0;
let display_content = "";
let toggle_switch = document.querySelector('.input');

// Event Management
toggle_switch.addEventListener('change', toggleStyles); 

number_buttons.forEach(function(number){
    number.addEventListener('click', populateButton);
});

document.addEventListener('keydown',handleKeyEvent);

toggle_switch.addEventListener('click',toggleStyles);

