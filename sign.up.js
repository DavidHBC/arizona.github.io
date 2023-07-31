// Check passoword validity
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the user's password from the input field
    const password = document.getElementById('password').value;
    console.log(password)
  
    // Define your password requirements
    const minLength = 8; // Minimum password length
    const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/; // Regular expression for special characters
   
    
    // Check password length
    if (password.length < minLength) {
      alert('Password must be at least ' + minLength + ' characters long.');
      return;
    }
  
    // Check if the password contains special characters
    if (!specialChars.test(password)) {
      alert('Password must contain at least one special character.');
      return;
    }
    

    // Check if required fields are filled out
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    if (!fname || !lname || !password) {
        alert('Please fill out all required fields.');
        return;
    }
    
    
    
    // Check if the terms checkbox is checked
    const termsChecked = document.getElementById('terms').checked;
    if (!termsChecked) {
        alert('Please agree to the Terms of Use and Privacy Policy.');
        return;
    }
    
    
    
        
        // If the password meets the criteria, you can proceed with submitting the form
        // alert('Password is valid! Form submitted.');
        
        // Optionally, you can submit the form programmatically if needed
        // document.getElementById('signup-form').submit();
});





// Make user name field look more user friendly
document.getElementById('fname').addEventListener('input', function(event) {
    const fnameInput = event.target;
    const cursorPosition = fnameInput.selectionStart;
    
    // Get the current value of the input field
    let inputValue = fnameInput.value;
    
    // Capitalize the first letter if it is not already capitalized
    if (cursorPosition === 1 && inputValue.charAt(0) !== inputValue.charAt(0).toUpperCase()) {
        const capitalizedFirstLetter = inputValue.charAt(0).toUpperCase();
        inputValue = capitalizedFirstLetter + inputValue.slice(1);
    fnameInput.value = inputValue;
  }

  // Check if the character typed is a space or a letter following a space
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


//   Password show and hide (eye button)
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
    } 
    else {
        fnameInput.style.borderColor = 'green'; // Set border color to green if a name has been typed
    }
})

document.getElementById('password').addEventListener('input', function(event) {
    const passwordInput = event.target;
    const password = passwordInput.value.trim();
    
    // Check if password contains at least 8 characters and a special character
    const minLength = 8; // Minimum password length
    const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/; // Regular expression for special characters
    
    if (password.length < minLength || !specialChars.test(password) ) {
        passwordInput.style.borderColor = 'red'; 
    } else {
        passwordInput.style.borderColor = 'green'; 
    }
});

function validateEmail(email) {
    // Regular expression pattern for validating Gmail and Yahoo email addresses
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i;
    
    // Test the email against the pattern
    return emailPattern.test(email);
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the current value of the input fields
    const fnameInput = document.getElementById('fname');
    const fname = fnameInput.value.trim();
    const lnameInput = document.getElementById('lname');
    const email = lnameInput.value.trim();
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value.trim();
    const termsChecked = document.getElementById('terms').checked;

    if (!validateEmail(email)) {
        lnameInput.style.borderColor = 'red'; // Optionally, add visual indication of invalidity
        console.log('Invalid email address or not Gmail/Yahoo:', email);
        alert('Please enter a valid Gmail or Yahoo email address.');
        return;
    } else {
        lnameInput.style.borderColor = 'green'; // Optionally, add visual indication of validity
        console.log('Valid Gmail or Yahoo email address:', email);
    }
});


// Check if email is valid
document.getElementById('lname').addEventListener('input', function(event) {
    const lnameInput = event.target;
    
    // Get the current value of the input field
    const email = lnameInput.value.trim(); // Remove leading/trailing spaces
    
    // Regular expression pattern for validating Gmail and Yahoo email addresses
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i;
    
    // Test the email against the pattern
    const isEmailValid = emailPattern.test(email);
    
    // Check if the email is valid and display an appropriate message
    if (isEmailValid) {
        lnameInput.style.borderColor = 'green'; 
        
    } else {
        lnameInput.style.borderColor = 'red';
    }
});