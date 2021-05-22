import renderList from './listRenderer.js';
import { debounce } from './util.js';

const app = document.querySelector('#app');
const fetchMoreTrigger = document.querySelector('#fetchMore');
let page = 0;

const fetchMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add('loading');
  await renderList(page++);
  target.classList.remove('loading');
};

const onScroll = e => {
  // do something
  const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
  console.log(scrollHeight, scrollTop, clientHeight);
  if (scrollTop + clientHeight === scrollHeight) {
    fetchMore();
  }
};

document.addEventListener('scroll', debounce(onScroll, 300) /* fix here */);
fetchMore();
