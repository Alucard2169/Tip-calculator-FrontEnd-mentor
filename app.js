// ***variable declaration***
const billInput = document.querySelector('#amount');
const peopleInput = document.querySelector("#people");
const tipInputButton = document.querySelectorAll('.tip-btn');
const customTip = document.querySelector('#custom');
const resetBtn = document.querySelector('.reset');
const tipAmountDisplay = document.querySelector('#tip-total');
const totalAmountDisplay = document.querySelector('#total');
const error = document.querySelector('#error')

reset();


function calculator(tipInput) {

    // if everything is right

    let bill = +billInput.value;
    let people = +peopleInput.value;

    if (billInput.value == '' || peopleInput.value == '') {
        alert('write people please');
    }

     // if it goes wrong
    if (peopleInput.value > 100) {
        error.innerText = "that's some family you got there"
        error.classList.remove('disable');
        error.classList.add('enable');
        return;
    }
    if (peopleInput.value % 1 !== 0) {
        error.innerText = "zombie's not allowed";
        error.classList.remove('disable');
        error.classList.add('enable');
        return;
    }
    if (billInput.value == null || billInput.value == '',
        peopleInput.value == null || peopleInput.value == '',
        tipInput == null || tipInput ==  ''){
        return;
    }




    let tipAmount = ((bill / 100) * tipInput) / people;
    let total = bill / people + tipInput;
    

    tipAmountDisplay.innerText = `$ ${tipAmount.toFixed(2)}`;
    totalAmountDisplay.innerText = `$ ${total.toFixed(2)}`

}



// run the calculator for buttons

tipInputButton.forEach((button) => {
    button.addEventListener('click', () => {
        calculator(+button.value);
    })
})

// run the calculator for custom
customTip.addEventListener('input', () => {
    calculator(+customTip.value)
})


// reset
resetBtn.addEventListener('click', () => {
    reset();
})
//reset function
function reset() {
    billInput.value = null;
    peopleInput.value = null;
    tipInputButton.value = null;
    customTip.value = null;
    tipAmountDisplay.innerText = '$0.00'
    totalAmountDisplay.innerText = '$0.00'
    error.classList.remove('enable');
    error.classList.add('disable')
}
