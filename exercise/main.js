// window.onload =

function pageLoaded() {
  document.getElementById("logo").addEventListener("click", sayHello);
  
  function sayHello () {
    console.log("Hello!"); 
  }






};
window.addEventListener("load", pageLoaded);