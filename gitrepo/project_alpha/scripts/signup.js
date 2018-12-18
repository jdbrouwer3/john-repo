import { appGet, appPost } from "./addUser.js";

'use strict'

appPost('https://localhost:5001/api/todo', { text: 'the saturday todo'}, (data) => {
  document.querySelector('#todolist').innerHTML = data[data.length - 1].text;
})
