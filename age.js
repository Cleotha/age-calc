//selecting output
const output_year = document.querySelector('.output-year');
const output_month = document.querySelector('.output-month');
const output_day = document.querySelector('.output-day');
const submit_btn = document.querySelector('.submit-btn');

//selecting input
let isValid = false;
const input_year = document.querySelector('#year');
const input_month = document.querySelector('#month');
const input_day = document.querySelector('#day');

//selecting error
const error_year = document.querySelector('.error-year');
const error_month = document.querySelector('.error-month');
const error_day = document.querySelector('.error-day');
submit_btn.addEventListener("click", CalculateDate)
input_day.addEventListener("input", (e) => {
    if (+input_day.value > 31) {
        error_day.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_day.textContent = "";
    }
    if (+input_day.value === 0) {
        isValid = false;
        error_day.textContent = "This field is required";
        isValid = false;
        return;
    }

});

input_month.addEventListener("input", (e) => {
    if (+input_month.value > 12) {
        error_month.textContent = "Must be a valid month";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_month.textContent = "";
    }
    if (+input_month.value === 0) {
        isValid = false;
        error_month.textContent = "This field is required";
        isValid = false;
        return;
    }
    
});

input_year.addEventListener("input", (e) => {
    if (+input_year.value > 2024) {
        error_year.textContent = "Must be a valid year";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_year.textContent = "";
    }
    if (+input_year.value === 0) {
        isValid = false;
        error_year.textContent = "This field is required";
        isValid = false;
        return;
    }
    
});

function CalculateDate() {
    if (isValid) {
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill); 
        let ageYears = ageDate.getUTCFullYear() -1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate() - 2;
        //result
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;
     } else {
        alert("error");
    }
}