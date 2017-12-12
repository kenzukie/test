// pure JS
var elem = document.getElementById('mySwipe');
window.mySwipe = Swipe(elem, {
  // startSlide: 4,
  // auto: 3000,
  // continuous: true,
  // disableScroll: true,
  // stopPropagation: true,
  // callback: function(index, element) {},
  // transitionEnd: function(index, element) {}
});

// with jQuery
// window.mySwipe = $('#mySwipe').Swipe().data('Swipe');
const keys = document.querySelectorAll('.key');
//const key = document.querySelector('.key');
keys.forEach(key => key.addEventListener('click', playSound));

function playSound() {
  const audio = document.querySelector('audio[data-sound="'+ this.dataset.sound +'"]');
  //var sounds = document.getElementsByTagName('audio');
  audio.currentTime = 0;
  audio.play();
};

