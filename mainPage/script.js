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

/* Custom Amount Code */

const customAmount = document.createElement("input");
customAmount.type = 'text';
customAmount.placeholder = "25.00"
customAmount.style.cssText = 'display: block; color: #C5C6C7; border: solid 0.5vmin; border-radius: 1vmin; border-color: #66FCF1; font-size: 3vmin; background-color: #0B0C10; width: 16vmin; grid-area: 6/2/7/3; padding: 0; height: 4vmin; margin: 0;';
customAmount.classList.add("inputField");
customAmount.setAttribute("name", "custom_amount");
customAmount.required = true;
const options = document.querySelector(".options");
options.appendChild(customAmount);
customAmount.disabled = true;
customAmount.style.display = "none";

const otherOptions = document.querySelectorAll(".non_other");
otherOptions.forEach(element => {
    element.addEventListener('click', () => {
        customAmount.disabled = true;
        customAmount.style.display = "none";
    });
});

const other = document.getElementById('other');
other.addEventListener('click', () => {
    customAmount.disabled = false;
    customAmount.style.display = "block";
});

/* Reset Issue Fix */

const resetB = document.querySelector(".resetB");
resetB.addEventListener('click', () => {
    if(customAmount !== null) {
        customAmount.disabled = true;
        customAmount.style.display = "none";
    }
});