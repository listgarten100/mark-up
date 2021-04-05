const donateInput = document.querySelector('.donat__input');
const donateBtn = document.querySelector('.donat__btn');


donateInput.addEventListener('input', () => donateInput.value = donateInput.value.slice(0,4));

donateBtn.addEventListener('click', (e) => e.preventDefault())
