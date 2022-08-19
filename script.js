
const circle1 = document.getElementById('circle_js1');
const circle2 = document.getElementById('circle_js2');
const circle3 = document.getElementById('circle_js3');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const bar4 = document.getElementById('bar4');
const bar5 = document.getElementById('bar5');
const bar6 = document.getElementById('bar6');
const onScroll = () => {
  const scroll = document.documentElement.scrollTop
  if (scroll > 0) {
    circle1.classList.add("animation_circle");
    circle2.classList.add("animation_circle");
    circle3.classList.add("animation_circle");
    bar1.classList.add("animation_bar");
    bar2.classList.add("animation_bar");
    bar3.classList.add("animation_bar");
    bar4.classList.add("animation_bar");
    bar5.classList.add("animation_bar");
    bar6.classList.add("animation_bar");
  } else{
    circle1.classList.remove("animation_circle");
    circle2.classList.remove("animation_circle");
    circle3.classList.remove("animation_circle");
    bar1.classList.remove("animation_bar");
    bar2.classList.remove("animation_bar");
    bar3.classList.remove("animation_bar");
    bar4.classList.remove("animation_bar");
    bar5.classList.remove("animation_bar");
    bar6.classList.remove("animation_bar");
  }
}


// Use the function
window.addEventListener('scroll', onScroll)