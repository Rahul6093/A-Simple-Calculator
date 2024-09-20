const display = document.querySelector('.display');
const displayOutput = document.querySelector('.display-output');

function clearAll(){
    display.value = "";
    displayOutput.value = "";
}

function del(){
    display.value = display.value.slice(0,-1);
    updateResult();
}

function appendDisplay(num){
    display.value += num;
    updateResult();
}

function inversewhole(){
    display.value = `-(${display.value})`;
    updateResult();
}

function updateResult(){
    try {
        const result = eval(display.value);
        displayOutput.value = result;
    } catch (e) {
        result = display.value.slice(0,-1);
        updateResult();
    }
}

display.addEventListener('input', updateResult);

function evaluation(){
    try{
        display.value = eval(display.value);
        displayOutput.value = '';
    }
    catch(error){
        displayOutput.value = 'invalid input';
    }
}

