document.getElementById('submit-btn').addEventListener('click', function(){
    function getValue(elementId){
       return document.getElementById(elementId).value;
    }
    const email = getValue('email');
    const password = getValue('password');
    if (email === 'sontan@bap.com' && password === 'bekar') {
        window.location.href = 'bank.html';
    } else {
        alert('Please Input Valid Email and Password!')
    }
})