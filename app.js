// defining main variables

const resetButton = document.querySelector('.reset');
const billValue = document.querySelector('#amount');
const headCount = document.querySelector('#people');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTip = document.querySelector('#custom');
const errorMsg = document.querySelector("#error");
const headError = document.querySelector('#error-count')
const tipAmountDisplay = document.querySelector('#tip-total');
const totalAmountDisplay = document.querySelector('#total');

// reset by default
reset();

//valid flag
let valid = true;

// main calculator function
function calculator(tipAmount) {
    const bill = +billValue.value;
    const people = +headCount.value;
    
    if (valid == false) {
        tipAmountDisplay.innerText = '$0.00';
        totalAmountDisplay.innerText = '$0.00';
    }

    let tipTotal = ((bill / 100) * tipAmount) / people;
    let total = bill / people + tipTotal;


    tipAmountDisplay.innerText = `$ ${tipTotal.toFixed(2)}`
    totalAmountDisplay.innerText = `$ ${total.toFixed(2)}`

}





resetButton.addEventListener('click', () => {
    reset()
})




// button input to catch error
billValue.addEventListener('input', () => {
    let value = billValue.value;
    totalAmountDisplay.innerText = `$ ${(+value).toFixed(2)}`
    if (billValue.value == '') {
        valid = false;
        billValue.value = null;
        errorMsg.innerText = 'Numerical digits only!!!'
        errorMsg.classList.add('enable');
    }
    else if (billValue.value != '') {
        valid = false
        errorMsg.classList.remove('enable')
    }
    else {
        valid = true;
    }

    
})

headCount.addEventListener('input', () => {
    if (+headCount.value%1 != 0) {
        valid = false;
        headError.innerText = "Zombies are not allowed";
        headError.classList.add('enable');

    }
    else if(headCount.value > 100 || headCount.value < 1) {
        valid = false;
        headError.innerText = 'Seriously!? no more than 100';
        headError.classList.add('enable');
    }
    
    else{
        valid = true;
        headError.classList.remove('enable')
    }
})


// tip input through button
tipButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (valid == false) return;
        calculator((+button.value))
    })
})


// tip input through custom
customTip.addEventListener('input', () => {
    if (valid == false) return;
    calculator((+customTip.value))
})


//reset function
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






