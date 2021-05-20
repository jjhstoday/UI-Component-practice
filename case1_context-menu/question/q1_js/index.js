// Write Javascript code here!
const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll('.item');

document.body.addEventListener('click', e => {
  const targetClassList = e.target.classList;
  if (targetClassList.contains('context')) return;
  if (targetClassList.contains('item')) {
    targetClassList.toggle('open');
    items.forEach(elem => {
      if (elem !== e.target) elem.classList.remove('open');
    });
    return;
  }
  items.forEach(elem => {
    elem.classList.remove('open');
  });
});

// 이벤트 전파로 이벤트 연결 최소화 하기!
// wrapper.addEventListener('click', e => {
//   const targetElem = e.target;

//   // body에서 일어나는 이벤트 버블링 막아줘야 함!
//   e.stopPropagation();

//   if (!targetElem.classList.contains('item')) return;
//   targetElem.classList.toggle('open');
//   items.forEach(elem => {
//     if (elem !== targetElem) elem.classList.remove('open');
//   });
// });

// 하나 하나 요소에 이벤트를 다는 것은 성능적인 관점에서 좋지 않다.
// items.forEach(item => {
//   item.addEventListener('click', e => {
//     item.classList.toggle('open');
//     items.forEach(elem => {
//       if (elem !== item) elem.classList.remove('open');
//     });
//   });
// });
