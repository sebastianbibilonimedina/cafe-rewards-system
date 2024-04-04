import { fetchData } from './utils/fetch/fetchUtils.js';
import { ENDPOINTS } from './utils/apiConfig.js';

// Assumes fetchData and ENDPOINTS are defined as in the original script

function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordLength = 8;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;
    return password.length >= passwordLength && digitRegex.test(password) && specialCharRegex.test(password);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const agreementCheckbox = document.getElementById('agreement');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const agreesToTerms = agreementCheckbox.checked;

        errorMessage.textContent = '';
        successMessage.textContent = '';

        try {
            if (!validateEmail(email)) throw new Error('Invalid email address.');
            if (!validatePassword(password)) throw new Error('Password does not meet requirements.');
            if (password !== confirmPassword) throw new Error('Passwords do not match.');
            if (!agreesToTerms) throw new Error('You must agree to the terms and conditions.');

            const userData = { name, email, password, pointbalance: 0 };
            const response = await fetchData(ENDPOINTS.users, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            if (!response.success) throw new Error(response.message || 'Signup failed. Please try again.');

            successMessage.textContent = 'Signup successful! Redirecting...';
            setTimeout(() => { window.location.href = 'account.html'; }, 2000);
        } catch (error) {
            errorMessage.textContent = error.message;
        }
    });
});

