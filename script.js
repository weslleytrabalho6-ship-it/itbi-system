// script.js

// Function to calculate ITBI
function calculateITBI(value, rate) {
    return value * rate;
}

// Function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

// Function to validate form inputs
function validateForm(inputs) {
    for (let input of inputs) {
        if (!input.value) {
            return false; // Invalid input
        }
    }
    return true; // All inputs are valid
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const inputs = event.target.elements;
    if (validateForm(inputs)) {
        const itbiValue = calculateITBI(parseFloat(inputs.value.value), parseFloat(inputs.rate.value));
        alert('Calculated ITBI: ' + formatCurrency(itbiValue));
    } else {
        alert('Please fill all required fields.');
    }
}