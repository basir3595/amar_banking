document.getElementById('btn-submit').addEventListener('click', function(){
const gmailInput = document.getElementById('gmail-input');
const gmail = gmailInput.value;

//set password
const passwordInput = document.getElementById('password-input');
const password = passwordInput.value;


//verify email & password
if(gmail=== 'riaz@gmail.com' && password === 'riaz1234'){
    window.location.href = 'bank.html'
}
else{
    alert('user name && password invalid');
}

})

