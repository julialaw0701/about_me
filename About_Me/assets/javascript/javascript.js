function changeColor() {
    var button = document.querySelector('.button');
    button.style.backgroundColor = 'red';
  
    <button class="button" onclick="changeColor()">Click here</button>}

window.addEventListener('DOMContentLoaded', (event) => {
    const body = document.querySelector('body');
    const animationDuration = 1600; // Animation duration in milliseconds

    // Start the animation
    body.style.animation = 'backgroundAnimation1 8s linear infinite';

    // Stop the animation after the fourth animation cycle (100%)
    setTimeout(() => {
      body.style.animation = 'none'; // Stop the animation
    }, animationDuration * 4);
  });


  