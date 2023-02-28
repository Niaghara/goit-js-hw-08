// {/* <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form> */}
"use strict";
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormData, 500));

populateForm();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormData() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.dir(formData);
}

function populateForm() {
  const savedInputs = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedInputs) {
    email.value = savedInputs.email;
    message.value = savedInputs.message;
  }
}
