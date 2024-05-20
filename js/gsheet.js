const scriptUrl = 'https://script.google.com/macros/s/AKfycbzB6WhuC8uoVdoE47CxRoBV91E6aFdsVOt6F8C_pkYScFvyOLZYB1q1P91xA_oYgHBllA/exec'

const form = document.forms['my-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptUrl, {method: 'post', body: new FormData(form)})
    .then(Response => alert("Terimakasih..."))
    // .then(() => {window.location.reload(); })
    .catch(error => console.error('Error', error.message))
})