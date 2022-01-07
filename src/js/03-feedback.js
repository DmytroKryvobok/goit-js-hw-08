import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    message: document.querySelector('textarea'),
}

const feedbackInfoJSON = {
    email: '',
    message: ''
};

const onInputChange = (e) => {
    e.preventDefault();

    if (e.target.name === 'message') {
        feedbackInfoJSON.message = e.target.value;
    } else if (e.target.name === 'email') {
        feedbackInfoJSON.email = e.target.value;
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackInfoJSON));
    console.log(feedbackInfoJSON);  
}

const feedbackInfoParse = JSON.parse(localStorage.getItem("feedback-form-state"));
console.log(feedbackInfoParse);

if (feedbackInfoParse) {
    refs.input.value = feedbackInfoParse.email;
    refs.message.value = feedbackInfoParse.message;
}    

const onClickSubmit = (e) => {
    e.preventDefault();

    const { elements: { email, message } } = e.target;
    const data = { email: email.value, message: message.value };
    console.log(data);
    
    localStorage.clear();
    
    email.value = '';
    message.value = '';
}

console.log(localStorage);

refs.form.addEventListener('input', throttle(onInputChange, 500));
refs.form.addEventListener('submit', onClickSubmit);




