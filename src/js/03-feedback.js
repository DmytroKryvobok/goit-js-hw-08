import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    message: document.querySelector('textarea'),
}

const onInputChange = (e) => {
    e.preventDefault();

    if (e.currentTarget.elements) {
        const formEl = e.currentTarget.elements;
    
        const email = formEl.email.value;
        const message = formEl.message.value;

        const feedbackData = {
            email,
            message
        }

        localStorage.setItem("feedback-form-state", JSON.stringify(feedbackData));
        console.log(feedbackData);
    }
}

const feedbackDataParse = JSON.parse(localStorage.getItem("feedback-form-state"));

if (feedbackDataParse) {
    refs.input.value = feedbackDataParse.email;
    refs.message.value = feedbackDataParse.message;
}    

const onClickSubmit = (e) => {
    e.preventDefault();

    const { elements: { email, message } } = e.target;
    const data = { email: email.value, message: message.value };
    console.log(data);
    
    localStorage.removeItem("feedback-form-state");
    
    email.value = '';
    message.value = '';
}

refs.form.addEventListener('input', throttle(onInputChange, 500));
refs.form.addEventListener('submit', onClickSubmit);




