/* ---------------------------- EMAIL Logica FORM --------------------------- */

const btn = document.getElementById('button');
const messageBox = document.getElementById('messageBox');
document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_vt6rvmg';
        const templateID = 'template_djsoldn';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                showMessage('Email sent!', false);
                this.reset();
            }, (err) => {
                btn.value = 'Send Email';
                showMessage(JSON.stringify(err), true);
            });
    });

function showMessage(message, isError) {
    messageBox.textContent = message;
    messageBox.classList.remove(isError ? 'success' : 'error');
    messageBox.classList.add(isError ? 'error' : 'success');
    messageBox.style.display = 'block';

    setTimeout(function () {
        messageBox.style.display = 'none';
    }, 4000);
};
//FIN   EMAIL form