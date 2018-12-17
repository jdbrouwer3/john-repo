  (
    'use strict';

  function ajax(id) {
    var url = id ? `https://localhost:5001/api/user/${id}` : 'https://localhost:5001/api/user'
    fetch(url).then((response) => {
      response.json().then(display);
    }, (error) => {
      console.error(error);
    })
  }

  function display(data) {
    var div = document.querySelector('#userlist');
    div.innerHTML = data[2].username;

    // var i;
    // for(i = 0; i < 5; i += 1) { //have to define i as a var while using strict
    //   div.innerHTML = data[i].username;
    // }
  }

    // div.innerHTML = data[0].text;
    // console.log(data[0].text)
  // }

  // ajax();

