import axios from 'axios';

import './style.css'

let form = document.getElementById("form");

const handleSubmit = async (e) => {
  e.preventDefault();


  let {name, email, password} = e.target.children;

  let nameValue = name.value;
  let emailValue = email.value;
  let passwordValue = password.value;
  let popup = document.createElement("div");

  if (validate(nameValue, emailValue, passwordValue) === false) {
    popup.className = "popup failure";
    popup.innerText="failure";
    document.body.appendChild(popup);

    setTimeout(() => {
      document.body.removeChild(popup);
    }, 3000);
    return;
  }
  
  try {
    await axios.post('http://localhost:5000/user',  {
      name: nameValue,
      email: emailValue,
      password: passwordValue
    })


    popup.className = "popup success";
    popup.innerText="success";

    document.body.appendChild(popup);
    
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 3000);


  } catch (error) {
    popup.className = "popup failure";
    popup.innerText="failure";
    document.body.appendChild(popup);
  }

}

function validate(name, email, password) {
  if (name === '' || email === '' || password === '') {
    return false
  }

  return true;
}


form.onsubmit = handleSubmit;

