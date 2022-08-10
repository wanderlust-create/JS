const creditCardInput = document.querySelector('#cc')
const termsCheckbox = document.querySelector('#terms')
const veggieSelect = document.querySelector('#veggie')



// const form = document.querySelector('#signup-form')
// form.addEventListener('submit', function(e) {
//     e.preventDefault()
//     console.log('cc', creditCardInput.value)// this is the html value, not '' whats is selected
//     console.log('terms', termsCheckbox.checked)
//     console.log('veggie', veggieSelect.value)
// options:
// send form data to db
// append something to page using form data
//})
const formData = {}
for(let input of [creditCardInput, termsCheckbox, veggieSelect]) {
    input.addEventListener('input', ({ target }) => {
        const { name, type, value, checked } = target
        formData[name] = type  === 'checkbox' ? checked : value   
    } )
}

// when using change instead of input (above): on text input the change is captured when the user submits or loses focus 
for(let input of [creditCardInput, termsCheckbox, veggieSelect]) {
    input.addEventListener('change', ({ target }) => {
        const { name, type, value, checked } = target
        formData[name] = type  === 'checkbox' ? checked : value   
    } )
}

// long way to do it:
//  creditCardInput.addEventListener('input', (e) => {
//      console.log('cc changed', e)
//      formData['cc'] = e.target.value 
//      console.log(formData)
//  })
//  veggieSelect.addEventListener('input', (e) => {
//      console.log('cc changed', e)
//      formData['veggie'] = e.target.value 
//      console.log(formData)
//  })
//  termsCheckbox.addEventListener('input', (e) => {
//      console.log('cc changed', e)
//      formData['agree to terms'] = e.target.checked 
//      console.log(formData)
//  })


 // INFO HERE

// const form = document.querySelector('#signup-form');

// const creditCardInput = document.querySelector('#cc');
// const termsCheckbox = document.querySelector('#terms');
// const veggieSelect = document.querySelector('#veggie');

// form.addEventListener('submit', function(e) {
// 	e.preventDefault(); //stops the request from being sent (prevents page reload)
// 	console.log('cc', creditCardInput.value);
// 	console.log('terms', termsCheckbox.checked);
// 	console.log('veggieSelect', veggieSelect.value);
// 	//send form data to db
// 	//append something to page using form data
// });
