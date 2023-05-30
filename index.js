const emailInput = document.querySelector('input');
const subscribeButton = document.querySelector('.subscribe');
const errorMessage = document.querySelector('.email-error');
const emailSpan = document.querySelector('.email-confirmed');

const emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function submitEventHandler () {
    const emailAddress = emailInput.value;
    if (emailAddress === '' || !emailAddress.match(emailFormat)) {
        errorMessage.classList.remove('hidden');
        emailInput.style.backgroundColor = 'rgba(255, 97, 85, 0.15)';
        emailInput.style.border = '1px solid #FF6155';
        emailInput.style.opacity = '1';
        emailInput.style.color = '#FF6155';
    } else {
        document.querySelector('.initial-state').classList.add('hidden');
        document.querySelector('.confirmed-state').classList.remove('hidden');
        emailSpan.innerHTML = `${emailAddress}`;
    }
}

emailInput.addEventListener('keypress', (e) => {
    errorMessage.classList.add('hidden');
    emailInput.style.backgroundColor = '#fff';
    emailInput.style.border = '1px solid #242742'
    emailInput.style.opacity = '1';
    emailInput.style.color = '#242742';
    if (e.key == 'Enter') {
        submitEventHandler();
    }
});

subscribeButton.addEventListener('click', submitEventHandler);



