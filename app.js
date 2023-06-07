let weight = document.querySelector('.weight');
let height = document.querySelector('.height');
const submit = document.querySelector('.submit');
let result = document.querySelector('.result');
let rate = document.querySelector('.category');

window.addEventListener('DOMContentLoaded', (Event) => {
    
    submit.addEventListener('click', function() {
        weight = weight.value;
        height = height.value;
        
        let doubleHeight = height * height;
        
        let bmi = weight / doubleHeight;
        result.textContent = bmi;
        category(bmi);
        weight.innerHtml = '';
        height.innerHtml = '';
        
    });
    
    function category(bmi) {
        if (bmi < 18.5) {
            rate.textContent = 'You are Underweight';
            rate.classList.add('underweight')
        }    
        else if (bmi >18.5 && bmi < 24.9) {
            rate.textContent = 'You have a Healthy (Normal) Weight';
            rate.classList.add('healthy')
        }
        else  {
            if (bmi >25 && bmi < 29.9) {
                rate.textContent = 'You are Overweight';
                rate.classList.add('overweight');
            }
            else if (bmi >30.0 && bmi < 34.9) {
                rate.textContent = 'You have Class I Obesity';
                rate.classList.add('overweight')
            }
            else if (bmi >35.0 && bmi < 39.9) {
                rate.textContent = 'You have Class II Obesity';
                rate.classList.add('overweight')
            }
            else {
                rate.textContent = 'You have Class III (Morbid) Obesity';
                rate.classList.add('overweight')
            }
        }
    }
})