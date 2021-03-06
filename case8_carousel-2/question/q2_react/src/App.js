import { useState } from 'react';
import GlobalStyles from './styles/global';
import Title from './components/Title';
import Carousel from './components/Carousel';

function App() {
  const [images, setImages] = useState([
    '/img/movies/movie-1.jpg',
    '/img/movies/movie-2.jpg',
    '/img/movies/movie-3.jpg',
    '/img/movies/movie-4.jpg'
  ]);

  return (
    <>
      <GlobalStyles />
      <Title>Carousel Slider</Title>
      <Carousel images={images} />
    </>
  );
}

export default App;
