const form = document.querySelector('#form');
const bugResponse = document.querySelector('#bug-response');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    bugResponse.innerHTML = `${data.name} ${data.email}`;
});