import React from "react";
import ReactDom from 'react-dom';

import App from "./components/app"

ReactDom.render(<App />,
  document.getElementById('root'));


// ---------------- ECMAScript 2019 -----------------------

/*
// Rest parameter -------------------------

function getUsers(...names) {
  console.log(names);
}
getUsers('Serg', 'Vlad', 'Anton');
*/



/*
//Spread operator ------------------------

const arr1 = [1, 2, 3];
const arr2 = [44, 55, 85];

const newArr = [...arr1, ...arr2, 'custom field']
console.log(newArr)
*/

/*//Object Spread operator ------------------------

const defaults = {
  host: 'localhost',
  name: 'blog',
  user: 'admin'
}

const opt = {
  name: 'Serg',
  user: 'user',
  password: '111a'
}

const res = { ...defaults, ...opt };
const resAssign = Object.assign({}, defaults, opt);

console.log(res, resAssign);*/

/*
// Дуструктуризация объектов ---------------------

const person  = {
  firstName: "Peter",
  lastName: "Smith",
  age: 23,
  more: {
    hair: 'dark',
    skin: 'white'
  }
}

const { firstName, lastName } = person;
const { more: {hair, skin} } = person;

console.log( firstName, lastName, hair, skin );*/


/*
// Дуструктуризация массивов ---------------------

const arr = [1, 2, 3, 4];

const [a, b, c] = arr;

console.log(a, b, c);
*/
