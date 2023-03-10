
let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");
menuIcon.onclick= () =>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};
// Get the form element and input fields
const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const numberInput = document.querySelector('#number');
const messageInput = document.querySelector('#message');

// Add an event listener to the form submit event
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Validate the input fields
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('Please enter your email address.');
    emailInput.focus();
    return;
  }

  if (!isValidEmail(emailInput.value.trim())) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  if (subjectInput.value.trim() === '') {
    alert('Please enter a subject.');
    subjectInput.focus();
    return;
  }

  if (messageInput.value.trim() === '') {
    alert('Please enter a message.');
    messageInput.focus();
    return;
  }

  // If all fields are valid, submit the form
  form.submit();
});

// Helper function to validate email addresses
function isValidEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
