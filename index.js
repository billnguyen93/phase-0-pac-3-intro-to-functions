// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
  sayHello();

  function sayHelloToGuadalupe() {
      console.log("Hello, Guadalupe!");
  }
  sayHelloToGuadalupe();

  function sayHelloToLiz() {
      console.log("Hello, Liz!");
  }
  sayHelloToLiz();

  function sayHelloToSamip() {
      console.log("Hello, Samip!");

  }
  sayHelloToSamip();

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");

  say("Julio", "hello");

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }

  function add(x, y) {
      return x + y;
  }
  console.log(add(1, 2));