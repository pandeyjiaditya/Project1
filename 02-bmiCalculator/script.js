const form = document.querySelector('form')

//this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const message = document.querySelector('#message')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please enter valid height  ${height}`
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please enter valid weight  ${weight}`
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6) {
          message.innerHTML = "Under Weight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
          message.innerHTML = "Normal Range";
        } else {
          message.innerHTML = "Over Weight";
        }
    }

})