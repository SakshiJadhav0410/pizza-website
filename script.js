
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();


  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

 
  if (username === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }


  console.log('Sending data to server...');
  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);

 
  alert('Account created successfully!');
  window.location.href = 'index.html';
});