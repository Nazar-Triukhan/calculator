const display = document.querySelector('.input');
const numberButtons = document.querySelectorAll('.btn--number');
const operatorButtons = document.querySelectorAll('.btn--operator');
const clearButton = document.querySelector('.btn--clear');
const deleteButton = document.querySelector('.btn--delete');
const equalsButton = document.querySelector('.btn--equals');

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        display.value += btn.textContent;
    });
});

operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        display.value += btn.textContent;
    });
});

clearButton.addEventListener('click', () => {
    display.value = '';
});

deleteButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});

equalsButton.addEventListener('click', () => {
  result(display.value)
});

document.addEventListener('keydown',(event) => {
    const tab = event.key
    console.log(display.value);
    
    if(tab === 'Enter'){
        result(display.value)
    }
})

function result(numbers){
    try {
        display.value = eval(numbers); 
    } catch {
        display.value = 'Error';
    }
}
