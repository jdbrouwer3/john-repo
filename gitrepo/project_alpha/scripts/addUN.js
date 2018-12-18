//attempt to sign up

'use strict';

var signUpButton = document.querySelector('#signUpBtn');

var appPost = () => {




  let request = new Request('https://localhost:5001/api/user/', {
    method: 'post',
    body: JSON.stringify(content),
    headers: {
      'content-type': 'application/json'
    }
  });

  fetch(request).then((response) => {
    if (!response.ok) {
      throw new Error(response.status)
    }

  }).catch((error) => {
    console.error(error);
  });
}

signUpButton.addEventListener('click', appPost);
