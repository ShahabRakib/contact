document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');
    const formError = document.getElementById('formError');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Clear previous error messages
        clearErrors();

        // Validate form
        let hasError = false;
        if (!validateName(nameInput.value)) {
            showError('nameError', 'Please enter a valid name.');
            hasError = true;
        }

        if (!validateEmail(emailInput.value)) {
            showError('emailError', 'Please enter a valid email address.');
            hasError = true;
        }

        if (messageInput.value.trim() === '') {
            showError('messageError', 'Please write your message.');
            hasError = true;
        }

        if (!hasError) {
            submitForm();
        }
    });

    function validateName(name) {
        return name.trim().length >= 2;
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email.trim());
    }

    function showError(fieldId, message) {
        const errorField = document.getElementById(fieldId);
        errorField.textContent = message;
        errorField.style.display = 'block';
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-msg');
        errorMessages.forEach(function (msg) {
            msg.textContent = '';
            msg.style.display = 'none';
        });
    }

    function submitForm() {
        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                successMessage.textContent = data.message;
                successMessage.style.display = 'block';
                form.reset(); // Reset form after successful submission
            } else {
                formError.textContent = data.message || 'An error occurred. Please try again.';
                formError.style.display = 'block';
            }
        })
        .catch(error => {
            formError.textContent = 'An error occurred. Please try again.';
            formError.style.display = 'block';
        });
    }
});
