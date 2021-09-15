'use strict';

const billAmount = document.querySelector('.bill-value');
const peopleCount = document.querySelector('.people-count');
const tipPercent = document.querySelectorAll('.tip');
const tipCustom = document.querySelector('.tip-custom-value');
const tipPerPerson = document.querySelector('.tip-per-person');
const totalPerPerson = document.querySelector('.total-per-person');
const btnReset = document.querySelector('.reset');

let bill, tip, totalPeople;

tipPercent.forEach(button => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('tip-custom')) {
      tip = +button.innerHTML.slice(0, -1);
      tip /= 100;
    }
    bill = +billAmount.value;
    button.classList.add('btn-highlight');
  });
});

peopleCount.addEventListener('keyup', () => {
  totalPeople = +peopleCount.value;

  if (typeof tip !== 'Number') {
    tip = +tipCustom.value.slice(0, -1);
    tip /= 100;
  }
  console.log(bill, tip, totalPeople);

  if (totalPeople) {
    const totalTip = tip * bill;
    console.log(totalTip);

    const tipAmountPerPerson = (totalTip / totalPeople).toFixed(2);
    tipPerPerson.innerHTML = `$${tipAmountPerPerson}`;

    const totalBillPerPerson = (
      bill / totalPeople +
      Number(tipAmountPerPerson)
    ).toFixed(2);
    totalPerPerson.innerHTML = `$${totalBillPerPerson}`;
  } else {
    tipPerPerson.innerHTML = `$0.00`;
    totalPerPerson.innerHTML = `$0.00`;
  }
});

btnReset.addEventListener('click', () => {
  billAmount.value = '';
  peopleCount.value = '';
  tipPerPerson.innerHTML = `$0.00`;
  totalPerPerson.innerHTML = `$0.00`;
  tipCustom.value = '';

  tipPercent.forEach(btn => {
    if (btn.classList.contains('btn-highlight'))
      btn.classList.remove('btn-highlight');
  });
});
