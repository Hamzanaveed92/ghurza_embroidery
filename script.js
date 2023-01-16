const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value.length <=3 ){
    messages.push('name must be longer than 3 words')
  }

  if (phone.value.length <= 6) {
    messages.push('phone must be longer than 6 characters')
  }

  if (phone.value.length >= 20) {
    messages.push('phone must be less than 20 characters')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join('------ ')
  }
}).a