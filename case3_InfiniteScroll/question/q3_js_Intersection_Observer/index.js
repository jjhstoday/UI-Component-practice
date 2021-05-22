// Import stylesheets
import renderList from './listRenderer.js';

// Write Javascript code!
const app = document.querySelector('#app');
const fetchMoreTrigger = document.querySelector('#fetchMore');
let page = 0;

const fetchMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add('loading');
  await renderList(page++);
  target.classList.remove('loading');
};

const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
  // do something
  if (isIntersecting) fetchMore();
});
fetchMoreObserver.observe(fetchMoreTrigger);

fetchMore();
