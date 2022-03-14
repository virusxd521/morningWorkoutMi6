const bodyNav = document.querySelector('.body__navigation');
const nav = document.querySelector('.toggle_button');

let showing = true;


nav.addEventListener("click", e => {
   showing = !showing;
   showing ? bodyNav.style.display = 'block' : bodyNav.style.display = 'none';
   
   console.log(showing);
});


