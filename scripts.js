
const button = document.querySelector('#myButton');
button.addEventListener('click', function () {
  const input = document.querySelector('#inputField');
  const inputValue = input.value.trim().toLowerCase();
  const body = document.querySelector('body');

  if (inputValue === '') {
    alert('Input field cannot be empty!');
  } else if (inputValue === 'hello') {
    body.style.backgroundColor = 'lightgreen';
  } else if (inputValue === 'world') {
    body.style.backgroundColor = 'lightblue';
  } else {
    body.style.backgroundColor = 'rgb(130, 0, 0)';
  }
});
