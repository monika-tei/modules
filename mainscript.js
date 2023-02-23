"use strict";

import { capitalize } from "./stringscript.js";

// modules is when we work with multiple files

start();

function start() {
  console.log("Start!");

  sayHello("Peter");
}

function sayHello(name) {
  const greeting = `Hello ${capitalize(name)}`;
  document.querySelector("#output").textContent = greeting;
  console.log("greeting", greeting);
}

// I can refer to the functions that are in another script
// type=module - the javascript files are ENCAPSULATED
// so we export
// but only works on servers (?)

// if the script is at the end, we always put DOMcontent loaded in the beginning;
// however when we work with modules, we put script in the HEAD of HTML so we make sure that the content will be loaded;
// this we will also do in REACT
