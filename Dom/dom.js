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

// * target, currentTarget
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
console.log(h1.children); // 직계자손만
h1.firstElementChild.style.color = 'white';

// Going upwards: parents
console.log(h1.parentNode); // 직계부모(parentElement)

h1.closest('.header').style.backgroundColor = 'orange' // closet : 가장 가깝게 조건에 만족한 부모 요소가 반환, parentNode와 closet의 차이점은 parentNode는 바로 위의 요소를 찾는거고 closet은 내가 건 조건에 의한 위의 부모요소를 찾는 것.

// Going sideways : siblings
console.log(h1.previousElementSibling);



// ** Tab component(container안에있는 3개의 버튼 tab들을 각각 클릭하면 버튼밑의 박스의 content 내용이 같이 바뀐다.)
// tab-container -> operations__tab(버튼인데 안에 span있음) > = operations__content
const tabs = document.querySelectorAll('.operations__tabs');
const tabsContainer = document.querySelector('.operations__container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e) { // 부모에 이벤트를 걸어서 버블링으로 값을 찾아주는게 더 효율적. 버튼에 이벤트리스너를 걸면 만약 200개의 버튼이있으면 다 처리하느라 비효율적이다.
  const clicked = e.target.closet('.operations__tabs');   // target을 쓰는것보다 closet을 붙여주는 이유는 버튼안에 span이 있기때문에 span을 클릭하면 span이 선택되기 때문에 버튼 어디부분을 클릭해도 버튼값을 가져올 필요가 있기 때문에 closet을 사용함. 
  
})

