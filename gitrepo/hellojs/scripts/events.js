// event.js

// var input = document.querySelector('#clientName');
// var div = document.querySelector('#salutation');
// var button = document.querySelector('button');
// // var reset = document.querySelector('button[type="reset"]')
// var time = (new Date()).getHours();

// function message(msg) {
//   return time < 12 ? (`good morning, ${msg}`) : time < 18 ? (`good afternoon, ${msg}`) : (`good evening, ${msg}`);
// }

// function pushEvent() {
//   div.innerHTML = message(input.value);
// }

// function formEvent(evt) {
//   evt.stopPropagation(); //fast, but not fast enough
//   evt.preventDefault(); //faster than stopPropagation
//   div.innerHTML = message(input.value);
// }

// // button.addEventListener('click', pushEvent);
// reset.addEventListener('click', formEvent);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Event Bubbling:
// Adding click event to each span

var spans = document.querySelectorAll('span');
var sections = document.querySelectorAll('section');

spans.forEach((value) => {
  value.addEventListener('click', () => {
    value.style.color = 'red';
  });
});

sections.forEach((value) => {
  value.addEventListener('click', () => {
    value.style.color = 'blue';
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Event Capturing
var main = document.querySelector('main');

main.addEventListener('click', (evt) => {
  var elem = evt.target; //find the element who triggers the event and apply the formating to that element. Filter only for span

  if (elem.tagName.toLowerCase() == 'span') {
    elem.style.color = 'green';
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Form Event

var form = document.querySelector('form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log('submitted');
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
