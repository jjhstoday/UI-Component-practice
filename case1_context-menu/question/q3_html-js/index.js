// Write Javascript code here!
const items = document.querySelectorAll('details');

document.body.addEventListener('click', e => {
  if (e.target.nodeName !== 'SUMMARY' && e.target.nodeName !== 'P') {
    items.forEach(item => {
      item.removeAttribute('open');
    });
  }
  items.forEach(item => {
    if (item !== e.target.parentElement) {
      item.removeAttribute('open');
    }
  });
});
