const dataNumber = document.querySelectorAll('[data-num]');
const dataOpearation = document.querySelectorAll('[data-operation]');
const screen = document.querySelector('.screen');
const allClr = document.querySelector('[data-clr]');
const del = document.querySelector('[data-del]');
const equals = document.querySelector('[data-equal]');
const dot = document.querySelector('[data-dot]');


dataNumber.forEach(button => {
    button.addEventListener('click', (e) => {
       let value = e.target.dataset.num;
       screen.innerText += value;
    })
})

dataOpearation.forEach(button => {
    button.addEventListener('click', e => {
        let value = e.target.dataset.operation;
        if(screen.innerText == ''){
            return '';
        }else{
            screen.innerText += value;
        }
    })
})

equals.addEventListener('click', () => {
    let res = eval(screen.innerText);
    screen.innerText = res;
})

del.addEventListener('click', () => {
    screen.innerText = screen.innerText.slice(0, -1);
})

allClr.addEventListener('click', () => {
    screen.innerText = "";
})




