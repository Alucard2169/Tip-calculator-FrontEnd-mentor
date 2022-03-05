const billValue = document.querySelector('#amount');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTip = document.querySelector('#custom');
const peopleCount = document.querySelector('#people');
const tipAmountDisplay = document.querySelector('#tip-total');
const totalAmountDisplay = document.querySelector('#total');
const resetBtn = document.querySelector('.reset');
const errorMessage = document.querySelector('#error');
const peopleError = document.querySelector('#error-count')
let tipValue = 0;
let valid = true;
reset();


billValue.addEventListener('input', () => {
    let value = billValue.value;
    totalAmountDisplay.innerText = `$ ${(+value).toFixed(2)}`
    if (billValue.value == '') {
        valid = false;
        billValue.value = null;
        errorMessage.innerText = 'Numerical digits only!!!'
        errorMessage.classList.add('enable');
    }
    else if (billValue.value != '') {
        valid = false
        errorMessage.classList.remove('enable')
    }
    else {
        valid = true;
    }
})


tipButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        peopleCount.value = null;
        tipValue = +button.value;
    })
})
customTip.addEventListener('input', () => {
    peopleCount.value = null;
    tipValue = +customTip.value;
})


peopleCount.addEventListener('input', () => {
    if (+peopleCount.value%1 != 0) {
        valid = false;
        peopleError.innerText = "Zombies are not allowed";
        peopleError.classList.add('enable');
    }
    
    else if (peopleCount.value > 100 || peopleCount.value < 1) {
        valid = false;
        peopleError.innerText = 'Seriously!? no more than 100';
        peopleError.classList.add('enable');
    }
   
    else {
           valid = true;
           peopleError.classList.remove('enable')
           calculator(+peopleCount.value)
    }
    
})



function calculator(people) {
    let bill = billValue.value;
    let tip = tipValue;
    let peopleValue = people;

    let tipTotal = ((bill / 100) * tip) / peopleValue;
    let total = bill / peopleValue + tipTotal;

    tipAmountDisplay.innerText = `$ ${tipTotal.toFixed(2)}`;
    totalAmountDisplay.innerText = `$ ${total.toFixed(2)}`;
}



function reset() {
    billValue.value = null;
    tipValue = 0;
    customTip.value = null;
    peopleCount.value = null;
    tipAmountDisplay.innerText = "$0.00";
    totalAmountDisplay.innerText = "$0.00";
    errorMessage.classList.remove('enable');
    peopleError.classList.remove('enable');
}


resetBtn.addEventListener('click', () => {
    reset();
})
