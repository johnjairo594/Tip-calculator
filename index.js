let bill        = document.getElementById('bill');
let people    = document.getElementById('people');
let custom    = document.getElementById('custom');
const tip5      = document.getElementById('tip5');
const tip10     = document.getElementById('tip10');
const tip15     = document.getElementById('tip15');
const tip25     = document.getElementById('tip25');
const tip50     = document.getElementById('tip50');
const tipAmount = document.getElementById('valueTip');
const tipTotal  = document.getElementById('valueTotal');
const btnReset  = document.getElementById('btnReset');

let billValue   = Number(parseFloat(bill.value).toFixed(2));
let peopleValue = 1;
let percent = 0;

tip5.addEventListener('click', () => {
    tip5.classList.add('selected');
    tip10.classList.remove('selected');
    tip15.classList.remove('selected');
    tip25.classList.remove('selected');
    tip50.classList.remove('selected');
    percent = 5;
    calcTipAmountAndTotal()
})

tip10.addEventListener('click', () => {
    tip5.classList.remove('selected');
    tip10.classList.add('selected');
    tip15.classList.remove('selected');
    tip25.classList.remove('selected');
    tip50.classList.remove('selected');
    percent = 10
    calcTipAmountAndTotal()
})

tip15.addEventListener('click', () => {
    tip15.classList.add('selected');
    tip10.classList.remove('selected');
    tip5.classList.remove('selected');
    tip25.classList.remove('selected');
    tip50.classList.remove('selected');
    percent = 15;
    calcTipAmountAndTotal()
})

tip25.addEventListener('click', () => {
    tip25.classList.add('selected');
    tip10.classList.remove('selected');
    tip15.classList.remove('selected');
    tip5.classList.remove('selected');
    tip50.classList.remove('selected');
    percent = 25;
    calcTipAmountAndTotal()
})

tip50.addEventListener('click', () => {
    tip50.classList.add('selected');
    tip10.classList.remove('selected');
    tip15.classList.remove('selected');
    tip25.classList.remove('selected');
    tip5.classList.remove('selected');
    percent = 50;
    calcTipAmountAndTotal()
})

btnReset.addEventListener('click', () => {
    bill.value = '';
    custom.value = '';
    people.value = 1;
    tip50.classList.remove('selected');
    tip10.classList.remove('selected');
    tip15.classList.remove('selected');
    tip25.classList.remove('selected');
    tip5.classList.remove('selected');
    calcTipAmountAndTotal()
})

function changeCustomValue(){
    tip50.classList.remove('selected');
    tip10.classList.remove('selected');
    tip15.classList.remove('selected');
    tip25.classList.remove('selected');
    tip5.classList.remove('selected');
    percent = Number(parseFloat(custom.value).toFixed(2));
    calcTipAmountAndTotal();
}

function calcTipAmountAndTotal(){
    billValue   = Number(parseFloat(bill.value).toFixed(2));
    peopleValue = parseInt(people.value);
    if(peopleValue == 0) {
        tipAmount.innerHTML = '$0'
        tipTotal.innerHTML = '$0'
    } else {
        let tipAmountPerson = (billValue*(percent/100))/peopleValue;
        tipAmount.innerHTML = `$${parseFloat(tipAmountPerson).toFixed(2)}`
    
    
        let TotalPerson = (billValue + (billValue*(percent/100)))/peopleValue
        tipTotal.innerHTML = `$${TotalPerson.toFixed(2)}`
        if (isNaN(tipAmountPerson)) {
            tipAmount.innerHTML = '$0'
        }
        if (isNaN(TotalPerson)) {
            tipTotal.innerHTML = '$0'
        }
    }
}