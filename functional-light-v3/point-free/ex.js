"use strict";

function output(txt) {
  console.log(txt);
}

var printIf = when(output);

function isShortEnough(str) {
  return str.length <= 5;
}

function not(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

function when(fn) {
  return function (predicate) {
    return function (...args) {
      if (predicate(...args)) {
        return fn(...args);
      }
    };
  };
}

var isLongEnough = not(isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1); // Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2); // Hello World
