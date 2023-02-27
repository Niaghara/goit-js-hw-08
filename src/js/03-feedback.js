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

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// populateTextarea();

// function onFormSubmit(e) {
//   e.preventDefoult();

//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(e) {
//   const message = e.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }

// refs.form.addEventListener('input', e => {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// });

// console.log(formData);


import throttle from 'lodash.throttle';

// --------------------------EXPORT-----------------------------------------
const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input[name="email"]');
const messageRef = document.querySelector('textarea[name="message"]');
const dataBase = {
    email: '',
    message: '',
}

// --------------------------FUNCTIONS-------------------------------------
function validateForm(e){
    const { name, value } = e.target;
    dataBase[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataBase));
}
function submitForm (e){
    e.preventDefault();
    e.currentTarget.reset();
    console.log(dataBase);
}
function getDataBase(){
const getData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(getData);
if (parsedData) {
    emailRef.value = parsedData.email;
    messageRef.value = parsedData.message;
}}

// --------------------------EVENTS-----------------------------------------
formRef.addEventListener('submit', submitForm);

formRef.addEventListener('input', throttle(validateForm, 500));

getDataBase();