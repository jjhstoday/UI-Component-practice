import Title from './components/Title';
import Tabs from './components/Tabs';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Title>Tabs</Title>
      <Tabs />
    </>
  );
};

export default App;
