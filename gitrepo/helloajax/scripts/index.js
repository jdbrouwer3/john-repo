let ajax = (poke) => {
  // at 0
  var xhr = new XMLHttpRequest();

  // at 1
  xhr.open('get', 'https://pokeapi.co/api/v2/pokemon/' + poke);

  // at 3 and/or 4
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(JSON.parse(xhr.response).forms[0].name);
    }
  }

  // at 2
  xhr.send();
}

for (let i = 1; i <= 10; i++) {
  //ajax(i);
}

console.log('end of file');

let pass = (res) => {
  res.json().then((r) => {
    console.log(r.types.forEach((v) => {
      if (v.type.name == 'water') {
        console.log(r.name);
        //break;
      };
    }));
  });
}

let fail = (err) => {
  console.error(err);
}

let ajax2 = () => {
  window.fetch('https://pokeapi.co/api/v2/pokemon/1').then(pass, fail);
}

// ajax2();
ajax('https:');



//////////////////////////////////////////////////////////////////////////////////////////////////////
// my first attempt


// let ajax = (poke) => {
//   //at 0
//   var xhr = new XMLHttpRequest();

//   // at 1
//   xhr.open('get', 'https://pokeapi.co/api/v2/pokemon/' + poke);

//   // at 3 and/or 4
//   xhr.onreadystatechange = () => {
//     if(xhr.readyState == 4 && xhr.status == 200){
//       console.log(JSON.parse(xhr.response).forms[0].name);
//     }
//   }

//   // at 2
//   xhr.send();
// }

// for (let i = 1; i <= 10; i++){
//   // ajax(i);
// }

// console.log('end of file');

// let pass = (res) => {
//   res.json().then((r) => {
//     console.log(r.types.forEach((v) => {
//       if (v.type.name == 'water') {
//         console.log(r.name);
//         break;
//       };
//     });
//   }); //after getting the data (line 34), write it down
// }

// let fail = (err) => {
//   console.error(err);
// }

// let ajax2 = (poke2) => {
//   window.fetch('https://pokeapi.co/api/v2/pokemon/' + poke2 + '/').then(pass, fail); //fetch data from url. then let me know if you got it or if not.
// }

// for (let j = 1; j <= 10; j++){
//   ajax2(j);
// }

// // ajax2();


