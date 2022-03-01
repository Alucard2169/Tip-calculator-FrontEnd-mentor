const resetButton = document.querySelector('.reset');
const billValue = document.querySelector('#amount');
const headCount = document.querySelector('#people');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTip = document.querySelector('#custom');
const errorMsg = document.querySelector("#error");
const headError = document.querySelector('#error-count')
const tipAmountDisplay = document.querySelector('#tip-total');
const totalAmountDisplay = document.querySelector('#total');


reset();
let valid = true;

function calculator(tipAmount) {
    const bill = +billValue.value;
    const people = +headCount.value;
    
    //looking for error
    error();
    

    //if no error
    let tipTotal = ((bill / 100) * tipAmount) / people;
    let total = bill / people + tipTotal;
    

    tipAmountDisplay.innerText = `$ ${tipTotal.toFixed(2)}`
    totalAmountDisplay.innerText = `$ ${total.toFixed(2)}`

}




tipButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator((+button.value))
    })
})

customTip.addEventListener('input', () => {
    calculator((+customTip.value))
})



resetButton.addEventListener('click', () => {
    reset()
})








function error() {
    
}

billValue.addEventListener('input', () => {
    let value = billValue.value;
    totalAmountDisplay.innerText = `$ ${(+value).toFixed(2)}`
    if (billValue.value == '') {
        valid = false;
        billValue.value = null;
        errorMsg.innerText = 'Numerical digits only!!!'
        errorMsg.classList.add('enable');
    }
    if (billValue.value != '') {
        errorMsg.classList.remove('enable')
    }

    
})

headCount.addEventListener('input', () => {
    if (headCount.value > 100 || headCount.value < 1) {
        headError.innerText = 'Seriously!?';
        headError.setAttribute('aria-invalid', 'true');
        headError.classList.add('enable');
    }
    if (headCount.value % 1 != 0) {
        headError.setAttribute("aria-invalid", "true")
        headError.innerText = "Zombies are not allowed";
        headError.classList.add('enable');
    }
    if (headCount.value < 100) {
        headError.classList.remove('enable')
    }
})

function reset() {
    billValue.value = null;
    headCount.value = null;
    tipButtons.value = null;
    customTip.value = null;
    errorMsg.classList.remove('enable');
    headError.classList.remove('enable')
    tipAmountDisplay.innerText = '$0.00';
    totalAmountDisplay.innerText = '$0.00';
    headError.setAttribute('aria-invalid',false)
}






