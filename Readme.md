# Hand-in 1, JavaScript.

# Explain and Reflect
>## Explain differences between Java vs JavaScript
#### Key differences
- Java is an OOP programming language while Java Script is a scripting language.

Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which may contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.

A scripting or script language is a programming language that supports scripts; programs written for a special run-time environment that automate the execution of tasks that could alternatively be executed one-by-one by a human operator.

- Java creates applications that run in a virtual machine or browser while JavaScript code is run on a browser only.

Because of this, it would be mostly handy to use an IDE for OOP programming, while a simple editor like VSCode is best for the scripting programming.

- Java is a statically typed language; JavaScript is dynamic.
- Java is class-based; JavaScript is prototype-based.
- Java constructors are special functions that can only be called at object creation; JavaScript "constructors" are just standard functions

Both of the languages have their constructors with a capital letter.

- Java requires all non-block statements to end with a semicolon; JavaScript inserts semicolons at the ends of certain lines.
- Java uses block-based scoping; JavaScript uses function-based scoping like callbacks.
- Java has an implicit this scope for non-static methods, and implicit class scope; JavaScript has implicit global scope.

>## Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript.
### JavaScript: ES6(es2015) + ES7:
- The natural evolution of JavaScript, bringing features like arrow functions, Classes and Inheritance, promises, Generators and much more.

- Can be used in "all" browsers using a polyfil or a transpiler

- Can be used with NodeJS (almost) out of the box with LTS v6.x(Long Term Support stream), otherwise via a transpiler (Babel)

Babel is a essentially an ECMAScript 6 to ECMAScript 5 compiler. It allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.

- Available out of the box with newer versions of ReactJS

### Typescript:
- A free open source language, developed and maintained by Microsoft. It is a strict superset of JavaScript, and adds optional static typing and many of the features from es2015 and es2016

- Can (obviously) be used in all browsers when compiled into ES5

- Can be used with NodeJS with a typescript compiler, which would be node.js or git.

- Angular 2 is designed to be written with TypeScript (but can also be used with ES 5 and es 2015)

>## Explain generally about node.js and NPM.
### Node.js:
Node.js is an event based, asynchronous I/O server side platform that runs on Google's V8 JavaScript Engine for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

#### What it's NOT
- Node.js is not a JavaScript framework.
- Node.js' V8 wrappers are not made in JavaScript but C.
- Node.js is not multi-threaded. It runs in a single thread with callback concept.

#### What it IS:
- Node.js is a server side platform which can execute JavaScript.
- Node.js is an open source platform to make real time network applications
- Node.js provides asynchronous, event driven I/O APIs.
- Node.js runs a single threaded event based loop, so all executions become non-blocking.

### Pros & Cons
#### Pros:
- Asynchronous event driven I/O helps concurrent request handling.
- Provides the possibility to use the same language on both the server and client side.
- Allows you to use NPM - the Node Package Manager.
- Has an activate and vibrant community, with lots of free-to-use open source modules.

#### Cons:
- Dealing with relational databases are a pain.
- Nested callbacks can create confusion.
- Requires understanding of somewhat advanced JavaScript.
- Not suited for CPU-intensive tasks.

### NPM
NPM is a package manager for Node.js with hundreds of thousands of packages, which you can include in your Node.js based projects. Using NPM can really speed up the process when building applications in Node.js. NPM allows Node.js to be lightweight, because you only include the features that you need, thus avoiding a bloated server side platform.

>## Explain about the Event Loop in Node.js
- When you read from a file, the calling thread blocks
- When you read from a network stream, the calling thread blocks
- Basically, when you do any IO, the calling thread block until the IO operation is done
- Threads were necessary to solve these blocking problems, with all the problems that comes with threads
- Node is using non-threaded, event driven model to create a non-blocking API as visualized in this figure
![alt tag](http://js-plaul.rhcloud.com/node1/images/eventloop.png)
In computer science, the event loop, message dispatcher, message loop, message pump, or run loop is a programming construct that waits for and dispatches events or messages in a program. It works by making a request to some internal or external "event provider" (that generally blocks the request until an event has arrived), and then it calls the relevant event handler ("dispatches the event")

>## Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises
- Babel is essentially an ECMAScript 6 to ECMAScript 5 compiler. It allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.

- Webpack is a bundler for modules. The main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
good Webpack notes<br />
- Bundles ES Modules, CommonJS and AMD modules (even combined).
- Can create a single bundle or multiple chunks that are asynchronously loaded at runtime (to reduce initial loading time).
- Dependencies are resolved during compilation, reducing the runtime size.
- Loaders can preprocess files while compiling, e.g. TypeScript to JavaScript, Handlebars strings to compiled functions, images to Base64, etc.
- Highly modular plugin system to do whatever else your application requires.

### Examples
index.html<br />
show our html code with javascript support.
```
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>Getting Started with Webpack</title>
</head>
<body>
    <h1>WebPack is fun</h1>
    <div id="my-table"></div>
    <script src="bundle.js"></script>
</body>
</html>
```
main.js<br />
our javascript code.
```
require('./main.css');

const name = 'Scotch.io';

setTimeout(() => console.log(`Hello there from ${name}`), 300);
```
Webpack.config.js<br />
This file exports our project's webpack configuration object.
```
module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: "file-loader"
            }
        ],
    }
};
```
main.css<br />
this makes the title red.
```
h1 {
    color: red;
}
```
bundle.js<br />
After running this command(Webpack -p), all our bundles will be minified, as you can see.
```
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,"h1{color:red}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(a(r.parts[i],t))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(a(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:s}}}}function r(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],s=o[1],u=o[2],a=o[3],f={css:s,media:u,sourceMap:a};n[i]?n[i].parts.push(f):t.push(n[i]={id:i,parts:[f]})}return t}function o(e,t){var n=v(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function a(e,t){var n,r,o;if(t.singleton){var a=m++;n=b||(b=s(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=l.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=c.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function c(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function l(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=d(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,g=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=r(e);return n(o,t),function(e){for(var i=[],s=0;s<o.length;s++){var u=o[s],a=p[u.id];a.refs--,i.push(a)}if(e){var f=r(e);n(f,t)}for(var s=0;s<i.length;s++){var a=i[s];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete p[a.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){n(0)}]);
```

>## Explain the purpose of: "use strict":
Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.
Strict mode helps out in a couple ways:

- It catches some common coding bloopers, throwing exceptions.
- It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
- It disables features that are confusing or poorly thought out.

#### Example 1
You can apply strict-mode to the entire file:
```javascript
"use strict";
x = 3.14;       // This will cause an error (x is not defined)
```

#### Example 2
You can use it in a specific function scope:
```javascript
// Non-strict code...

(function(){
  "use strict";
  x = 3.14;       // This will cause an error (x is not defined)
  // Strict code...
})();

// Non-strict code... 
```

# Explain using sufficient code examples the following features in JavaScript.
>## Variable/function-Hoisting
At runtime the compiler will move variable declarations and function declarations to the top of the document.

#### Example 1:
The javascript engine will automatically hoist the function declaration to the top:
```javascript
foo(); // The function is called before it is declared
function foo() {} // This function is moved to the top of the document on runtime
```
This is what it is going to look like at runtime:
```javascript
function foo() {}
foo();
```

#### Example 2:
Only the declaration is hoisted, and not the assignment:
```javascript
foo();
var foo = function () {};
```
This is what it is going to look like at runtime:
```javascript
var foo;
foo();  // TypeError: undefined is not a function
foo = function () {};
```

>## `this` in JavaScript and how it differs from what we know from Java/.net.
A function's `this` keyword behaves a little differently in JavaScript compared to other languages.
In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.

#### Example 1 (Global Context):
In the global execution context (outside of any function), this refers to the global object, whether in strict mode or not.
```javascript
console.log(this.document === document); // true

// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```

>## Function Closures and the JavaScript Module Pattern
When using function closures, the idea is often to make a function available inside a particular scope only.

#### Example (Closure):
Here we assign the value of `scope` to `"I am global"` in the global scope, and `"I am just a local"` in the scope of `getScope()`
```javascript
    var scope = "I am global";
    function getScope() {
        var scope = "I am just a local";
        return scope;
    }
    console.log(getScope());
    console.log(scope);
```

#### Example (JavaScript Module Pattern):
Here we create a module that can return a greet to a certain person with the `greet()` function, by passing in the name:
```javascript
    function greeter(name) {
        var name = name;

        return {
            greet: function() {
                return "Hi " + name;
            }
        }
    }

    console.log(greeter("Emil").greet());
```

>## Immediately-Invoked Function Expressions (IIFE)
An immediately invoked function is a function that is called immediately after it is declared.

#### Example 1:
WordPress disables the use of `$` for sequrity reasons when working with jQuery.:
```javascript
(function($) {

  $(document).ready(function() { });
  
})(jQuery);
```
You can also use it as a shorter way of writing consolidated code, and immediately executing it.

>## JavaScript Prototyping
Every JavaScript object has a prototype. The prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.

#### Example (Creating a prototype):
```javascript
  function Person(firstName, lastName, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
  
  var person1 = new Person("Luke", "Skywalker", 26);
  var person2 = new Person("Darth", "Vader", 48);
  var person3 = new Person("Master", "Yoda", 900);
```

>## User defined callback functions
In JavaScript, functions are first-class objects; that is, functions are of the type Object and they can be used in a first-class manner like any other object (String, Array, Number, etc.) since they are in fact objects themselves. They can be stored in variables, passed as arguments to functions, created within functions, and returned from functions.

#### Example 1 (Filter):
Creates a new array including elements where the callback function returns a number and omits the ones where it returns false.
```javascript
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  
  // This will produce an array with [5,6,7,8,9]
  var filtered = numbers.filter(function (number) {
      if (number > 4)
        return number;
  });
```

#### Example 2 (Map):
Creates a new array with the values modified by the callback function
```javascript
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  
  // This will produce an array with [1,2,3,4,5,6,7,8,9,10]
  var filtered = numbers.map(function (number) {
      return number++;
  });
```

#### Example 3 (Custom function):
```javascript
  var names = ["Luke Skywalker", "Darth Vader", "Obi-Wan"];
  
  function sayHi(name) {
    console.log('Hi ' + name);
  }
  
  (function(arr) {
    arr.forEach(function(name) {
      sayHi(name);
    });
  })(names);
```

>## E.
The E property returns the Euler's number and the base of natural logarithms, approximately 2.718.
```
<html>
<body>

<p>Click the button to display Euler's number.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = Math.E;
}
</script>

</body>
</html>
```
#### output
```
Click the button to display Euler's number.

Try it <-- button
2.718281828459045
```

>## Provide examples of user defined reusable modules implemented in Node.js
person.js

This creates a reusable module for a person.
```javascript
    function Person(name, age) {
        var name = name;
        var age = age;

        return {
            setName: function(value) {
                name = value;
            },
            setAge: function(value) {
                age = value;
            },
            getInfo: function() {
                return {
                    name: name,
                    age: age
                }
            }
        };
    }

    module.exports = Person;
```
Here you use the reusable module in main.js
```javascript
    var Person = require('person.js');
    var person1 = Person("Luke Skywalker", 26);
    console.log(person1.getInfo);
```

# es2005 -->
>## Provide examples and explain the es2005 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.
### Let
- let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
- Variables declared by let have as their scope the block in which they are defined, as well as in any contained sub-blocks . In this way, let works very much like var. The main difference is that the scope of a var variable is the entire enclosing function.<br /><br />
Example on let compared to var:
```
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```
### Arrow functions
- An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target. Arrow functions are always anonymous. These function expressions are best suited for non-method functions, and they cannot be used as constructors.<br /><br />
Example on an arrow function being able to shorten the function, which is very handy:
```
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var materialsLength1 = materials.map(function(material) { 
  return material.length;
});

var materialsLength2 = materials.map((material) => {
  return material.length;
});

var materialsLength3 = materials.map(material => material.length);
```
### This
- In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind method to set the value of a function's this regardless of how it's called, and ES6 introduced arrow functions whose this is lexically scoped (it is set to the this value of the enclosing execution context).<br />

- In the global execution context (outside of any function), this refers to the global object, whether in strict mode or not.<br />

Global execution example:
```
console.log(this.document === document); // true

// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```

- in a function context, the value of this depends on how the function is called.<br />

Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object:
```
function f1() {
  return this;
}
// In a browser:
f1() === window; // the window is the global object in browsers

// In Node:
f1() === global;
```
In strict mode, however, the value of this remains at whatever it was set to when entering the execution context, so, in the following case, this will default to undefined:
```
function f2() {
  'use strict'; // see strict mode
  return this;
}

f2() === undefined;
```
So, in strict mode, if this was not defined by the execution context, it remains undefined.

### Rest parameters
- The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
- If the last named argument of a function is prefixed with ..., it becomes an array whose elements from 0 (inclusive) to theArgs.length (exclusive) are supplied by the actual arguments passed to the function.<br />

Example:
```
// Before rest parameters, the following could be found:
function f(a, b) {
  var args = Array.prototype.slice.call(arguments, f.length);

  // …
}

// to be equivalent of

function f(a, b, ...args) {
  
}
```
Simply sets the argument array at the end.

### Destructuring assignment
- The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.<br />

Example, destructuring of data from a list:
```
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```
Example, destructuring of data from an array:
```
var foo = ['one', 'two', 'three'];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

### Map
- The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value.
- A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.
- It should be noted that a Map that is a map of an object, especially a dictionary of dictionaries, will only map to the object's insertion order -- which is random and not ordered.<br />

Example, using the map object:
```
var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}
```

>## Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.
- Javascript did not use to have built-in modules but the javascript community came up with work-arounds which made it possible to get modules.
- two of these work-around standards are commonJS modules with node.js modules as implementation and Asynchronous Module Definition (AMD) with requireJS as implementation. 
- commonJS(Node.js) makes it possible to compact syntax, it is designed for synchronous loading and where it's main use is on the server.
- Asynchronous Module Definition(requireJS) makes a slightly more complicated syntax, enabling AMD to work without eval() (or a compilation step), it's designed for asynchronous loading and it's main use are in the browsers.
- ES6 uses both commonjs and AMD<br />

Es2015 module import and export example:<br />
Export.
```
//------ lib.js ------
    export const sqrt = Math.sqrt;
    export function square(x) {
        return x * x;
    }
    export function diag(x, y) {
        return sqrt(square(x) + square(y));
    }
```
Import.
```
//------ main.js ------
    import { square, diag } from 'lib';
    console.log(square(11)); // 121
    console.log(diag(4, 3)); // 5
```

>## Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
- OO keywords is probably the most awaited features in ES6. Classes are something like another syntactic sugar over the prototype-based OO pattern. We now have one, concise way to make class patterns easier to use.<br/>

ES6 inheritance example:<br />
Class definition.
```
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}
```
Class inheritance.
```
class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}
```
Here is a clear example on how to inherit from another class.<br />
In my opinion it looks really similar to how you inherit in java, aka. the extends parents class.<br />

>## Provide examples with es6, running in a browser, using Babel and Webpack
- Svaret på denne opgave kan ses i src mappen hvilket er angular-webpack opgaven.


