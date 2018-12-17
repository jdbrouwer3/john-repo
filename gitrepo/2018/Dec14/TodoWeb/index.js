// (() => {
  // 'use strict';

  // function ajax(id) {
  //   var url = id ? `https://localhost:5001/api/todo/${id}` : 'https://localhost:5001/api/todo/'

  //   fetch(url).then((response) => {
  //     response.json().then(display);
  //   }, (error) => {
  //     console.error(error);
  //   })
  // }


// })();
//////////////////////////////////////////////////////////////////////////////////////////
import { appGet, appPost } from "./scripts/ajax.js";

'use strict'

// appGet('https://localhost:5001/api/todo/', (data) => {
//   document.querySelector('#todolist').innerHTML = data[4].text;
// });

appPost('https://localhost:5001/api/todo', { text: 'the saturday todo'}, (data) => {
  document.querySelector('#todolist').innerHTML = data[data.length - 1].text;
})




///////////////////////////////////////////////////////////////////////////////////////
  // function display(data) {
  //   var div = document.querySelector('#todolist');

    // for(i = 0; i < 5; i += 1) {
      // div.innerHTML = data[0].text;
    // }

    // div.innerHTML = data[0].text;

    // for(i=0; i<5; i++){
    //   console.log(data[i].text)
    // }

    // while (i<5) {
    //   console.log(data[1].text);
    //   i += 1;
    // }

//   }

//    ajax();
// })()
