const container = document.querySelector('#container');

const formatMoney = (value) => {
  value = Math.ceil(value * 100) / 100;
  value = value.toFixed(2);
  return ` $ ${value}`;
};

const formatSplit = (numberOfPeople) => {
  if (numberOfPeople === 1) {
    return ` 1 Person`;
  } else {
    return `${numberOfPeople} People`;
  }
};

const update = () => {
  let bill = Number(document.querySelector('#yourBill').value);
  let tipPercent = Number(document.querySelector('#tipInput').value);
  let split = Number(document.querySelector('#splitInput').value);

  let tipValue = bill * (tipPercent / 100);

  let tipEach = tipValue / split;

  let newBilleach = (bill + tipValue) / split;

  document.querySelector('#tipPercent').innerHTML = tipPercent + '%';
  document.querySelector('#tipValue').innerHTML = formatMoney(tipValue);
  document.querySelector('#totalWithTip').innerHTML = formatMoney(
    bill + tipValue
  );
  document.querySelector('#splitValue').innerHTML = formatSplit(split);
  document.querySelector('#billEach').innerHTML = formatMoney(newBilleach);
  document.querySelector('#tipEach').innerHTML = formatMoney(tipEach);
};

container.addEventListener('input', update);
