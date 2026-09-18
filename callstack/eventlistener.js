// EventListener is a class that represents an event listener in the call stack. it is used to track the execution of event listeners and their associated callbacks.

console.log("start");

document.getElementById("btn").addEventListener("click", function cb() {
  console.log("callback");
});
