
//localStorage demo

localStorage.setItem('test', 1);
alert( localStorage.getItem('test') ); // 1

//Object-like access

// set key
localStorage.test = 2;

// get key
alert( localStorage.test ); // 2

// remove key
delete localStorage.test;

