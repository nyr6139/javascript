// Styles
message.style.backgroundColor = 'black';
message.style.width = '120%';

// Classes
message.classList.add('c');
message.classList.remove('c');
message.classList.toggle('c');
message.classList.contains('c');

// Don't use
message.className = 'jonas';

// ** nav > ul - nav__links > a - nav__link **

// target, eventTarget
document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget)  
  // target(본질적으로 이벤트가 시작된 곳) : nav__link / currentTarget(이벤트 핸들러가 연결된 요소) : nav__link
  console.log(e.currentTarget === this);

  // Stop propagation
  e.stopPropagation(); // 이벤트를 멈출 때 사용
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget)  
  // target(본질적으로 이벤트가 시작된 곳) : nav__link / currentTarget(이벤트 핸들러가 연결된 요소) : nav__links
});

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget)  
  // target(본질적으로 이벤트가 시작된 곳) : nav__link / currentTarget(이벤트 핸들러가 연결된 요소) : nav
});


const h1 = document.querySelector('h1');

//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes)
console.log(h1.children);
h1.firstElementChild.style.color = 'white';

// Going upwards: parents
console.log(h1.parentNode);

h1.closest('.header').style.backgroundColor = 'orange' // closet : 가장 가깝게 조건에 만족한 부모 요소가 반환

// Going sideways : siblings
console.log(h1.previousElementSibling);