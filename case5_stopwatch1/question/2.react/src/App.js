import GlobalStyle from './styles/global';
import Title from './components/Title';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <>
      <GlobalStyle />
      <Title>Stopwatch</Title>
      <Stopwatch />
    </>
  );
}

export default App;
