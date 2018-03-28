/* After when window load start the function */
window.addEventListener('load', (event) => moveOn());


  
function moveOn () {
/* DOM elements */
  const bar = document.getElementById("progress-bar");
  const target = document.getElementById("progress-target");
  const resulTarget = document.getElementById("result--target");
  const panel = document.getElementById("panel");
  const container = document.querySelector(".container");

/* start position and countdown number */
  let width = 0;
  let rest = 15;
  
/* Timer */  
  let id = setInterval(progressBar, 2000);

/* Function for checking the condition*/
  function progressBar() {
    if (width >= 75) {
      clearInterval(id);
      target.style.background = '#00A910';
      setTimeout(() => {
          target.innerHTML = "Done";
          target.classList.add('done');
          resulTarget.innerHTML = "You reach your target in 15$";
          panel.classList.add('panel');
        }, 1000);

    } else {
      width++;
      rest -= 0.2;
      bar.style.width = width + '%'; 
      bar.innerHTML = width * (0.2 * 5 + 0.2 * 5) / 10 + '$';
      document.getElementById('count');
      count.innerHTML = rest.toFixed(1);
    }
  }

/* Animationend event callback */
  panel.addEventListener('animationend', (event) => {
      const h1 = document.querySelector('.title');
      h1.textContent = "I know it's ugly :) but I tried";

  });
}

/* Thats all */

