function validate(e){
  e.preventDefault();


var fname = document.forms['form']['fname'];

var lname = document.forms['form']['lname'];

var email = document.forms['form']['email'];

var password = document.forms['form']['password'];
  
let re = /^(([^<>()[/]\.,;:\s@\"]+(\.[^<()[\]\.,;:\s@\"]+)*)|(\"+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

if(fname.value === '') {
  fname.classList.add('error');
document.getElementById('fname').style.border= '1px solid red';
  document.getElementById('error-fname').innerHTML='First Name cannot be empty';
}

if(lname.value === '') {
  lname.classList.toggle('error');
document.getElementById('lname').style.border= '1px solid red';
  document.getElementById('error-lname').innerHTML= 'Last Name cannot be empty';
}
if(email.value === '') {
  email.classList.toggle('error');
document.getElementById('email').style.border= '1px solid red';
document.getElementById('email').textContent = 'email@example.com';
  document.getElementById('error-email').innerHTML = 'Looks like this is not an email';
}

if(password.value === '') {
  password.classList.toggle('error');
document.getElementById('password').style.border= '1px solid red';
  document.getElementById('error-password').innerHTML = 'Passwords cannot be empty';
}
}
