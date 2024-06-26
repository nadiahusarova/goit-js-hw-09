const KEY_MESSAGE = "feedback-form-state";
const formRef = document.querySelector('form');

formRef.addEventListener('input', addLocalStorage);
function addLocalStorage() {
    const email = formRef.elements.email.value;
    const message = formRef.elements.message.value;

    const objMessage = JSON.parse(localStorage.getItem(KEY_MESSAGE)) || {};

    if (email) {
        objMessage.email = email;
    }

    if (message) {
        objMessage.message = message;
    }

    localStorage.setItem(KEY_MESSAGE, JSON.stringify(objMessage));    
}

document.addEventListener('DOMContentLoaded', () => {
    const objMessage = JSON.parse(localStorage.getItem(KEY_MESSAGE)) || {};
    formRef.elements.email.value = objMessage.email || '';
    formRef.elements.message.value = objMessage.message || '';
});

formRef.addEventListener('submit', removeLocalStorage);
function removeLocalStorage(event) {
    event.preventDefault(); 

    const email = formRef.elements.email.value;
    const message = formRef.elements.message.value;
    
    const objMessage = JSON.parse(localStorage.getItem(KEY_MESSAGE)) || {};

    if (objMessage.email && objMessage.message) {
        console.log(objMessage);
        localStorage.removeItem(KEY_MESSAGE);
        formRef.elements.email.value = '';
        formRef.elements.message.value = '';
    } else {
        console.log("Поля email та message мають бути заповнені перед видаленням!");
    }
}
