// Function to validate email addresses
function validateEmail(email) {
    // Regular expression pattern for validating email addresses
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i;
    return emailPattern.test(email);
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const password = document.getElementById('password').value;
    
    
    // Get the current value of the input fields
    const fname = document.getElementById('fname').value.trim();
    const lnameInput = document.getElementById('lname');
    const email = lnameInput.value.trim();
    const termsChecked = document.getElementById('terms').checked;
    
    // Check if required fields are filled out
    if (!fname || !email || !password) {
    alert('Please fill out all required fields.');
      return;
    }

    // Validate email
    const isEmailValid = validateEmail(email);
  
    if (!isEmailValid) {
      lnameInput.style.borderColor = 'red'; 
      console.log('Invalid email address or not Gmail/Yahoo:', email);
      alert('Please enter a valid Gmail or Yahoo email address.');
      return;
    } else {
      lnameInput.style.borderColor = 'green'; 
      console.log('Valid Gmail or Yahoo email address:', email);
    }

    // Define your password requirements
    const minLength = 8; // Minimum password length
    const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/; // Regular expression for special characters
  
    // Check password length and special characters
    if (password.length < minLength || !specialChars.test(password)) {
      alert('Password must be at least ' + minLength + ' characters long and contain at least one special character.');
      return;
    }

    // Check if the terms checkbox is checked
    if (!termsChecked) {
        alert('Please agree to the Terms of Use and Privacy Policy.');
        return;
    }
  
   // If all validation criteria are satisfied, change the submit button to a link-button
if (isEmailValid && fname && termsChecked) {
    // Create a new anchor element
    const anchorElement = document.createElement('a');
    anchorElement.href = 'homePage.html';
    anchorElement.innerText = 'Continue to Website';
    anchorElement.classList.add('signup-link'); // Add a class to the anchor element

    // Replace the submit button with the anchor element
    const submitButton = document.getElementById('signup-form').querySelector('.signup.button');
    submitButton.parentNode.replaceChild(anchorElement, submitButton);
}

});
  

// Make user name field look more user-friendly
document.getElementById('fname').addEventListener('input', function(event) {
    const fnameInput = event.target;
    const cursorPosition = fnameInput.selectionStart;
    let inputValue = fnameInput.value;

    // Capitalize the first letter if it is not already capitalized
    if (cursorPosition === 1 && inputValue.charAt(0) !== inputValue.charAt(0).toUpperCase()) {
        const capitalizedFirstLetter = inputValue.charAt(0).toUpperCase();
        inputValue = capitalizedFirstLetter + inputValue.slice(1);
        fnameInput.value = inputValue;
    }

    // Capitalize the first letter and the next letter after a space
    if (inputValue.charAt(cursorPosition - 1) === ' ' || inputValue.charAt(cursorPosition - 2) === ' ') {
        // Capitalize the letter if it is not already capitalized
        if (inputValue.charAt(cursorPosition - 1) !== inputValue.charAt(cursorPosition - 1).toUpperCase()) {
            const capitalizedLetter = inputValue.charAt(cursorPosition - 1).toUpperCase();
            inputValue = inputValue.slice(0, cursorPosition - 1) + capitalizedLetter + inputValue.slice(cursorPosition);
            fnameInput.value = inputValue;
        }

        // Move the cursor to the next position after the capitalized letter
        fnameInput.setSelectionRange(cursorPosition, cursorPosition);
    }
});

// Password show and hide (eye button)
const togglePasswordButton = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePasswordButton.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.classList.remove('fa-eye');
        togglePasswordButton.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.classList.remove('fa-eye-slash');
        togglePasswordButton.classList.add('fa-eye');
    }
});

// Auto-focus on the fullname field when the page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fname').focus();
});

// Turn borders green if data entered into the field are valid

document.getElementById('fname').addEventListener('input', function(event) {
    const fnameInput = event.target;

    // Check if the "fname" field is empty
    if (fnameInput.value.trim() === '') {
        fnameInput.style.borderColor = 'red'; // Set border color to red if it's empty
    } else {
        fnameInput.style.borderColor = 'green'; // Set border color to green if a name has been typed
    }
});

document.getElementById('lname').addEventListener('input', function(event) {
    const lnameInput = event.target;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i;
    const email = lnameInput.value.trim();
    const isEmailValid = emailPattern.test(email);

    if (!isEmailValid) {
      lnameInput.style.borderColor = 'red'; 
      console.log('Invalid email address or not Gmail/Yahoo:', email);
    } else {
      lnameInput.style.borderColor = 'green'; 
      console.log('Valid Gmail or Yahoo email address:', email);
    }

  });



document.getElementById('password').addEventListener('input', function(event) {
    const passwordInput = event.target;
    const password = passwordInput.value.trim();
    const minLength = 8; // Minimum password length
    const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/; // Regular expression for special characters

    if (password.length < minLength || !specialChars.test(password)) {
        passwordInput.style.borderColor = 'red';
    } else {
        passwordInput.style.borderColor = 'green';
    }
});
