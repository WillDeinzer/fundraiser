/* Anonymous Code */

const yesAnonymous = document.querySelector(".yes_anon");
const noAnonymous = document.querySelector(".no_anon");
const inputFields = document.querySelectorAll(".inputField");
const labelParent = document.querySelector(".contactCon");
const inputFieldLabels = labelParent.querySelectorAll("label");
yesAnonymous.addEventListener('click', () => {
    inputFields.forEach(element => {
        element.disabled = true;
        element.style.opacity = 0.1;
    })
    inputFieldLabels.forEach(element => {
        element.style.opacity = 0.1;
    })
})
noAnonymous.addEventListener('click', () => {
    inputFields.forEach(element => {
        element.disabled = false;
        element.style.opacity = 1.0;
    })
    inputFieldLabels.forEach(element => {
        element.style.opacity = 1.0;
    })
})

/* Donate Button Code */
const submit_button = document.querySelector(".submitB");
const donate_button = document.querySelector(".thank");
donate_button.disabled = true;
submit_button.addEventListener('click', () => {
    donate_button.disabled = false;
    donate_button.style.opacity = 1.0;
})
