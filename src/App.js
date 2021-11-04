import './App.scss';
import './_main.scss';
import Navigation from './components/navigation';
import Header from './components/header';
import Main from './components/main';
import Cards from './components/cards';

function App() {
  return (
    <body>
      <Navigation />
      <Header />
      <Main />
      <Cards />
    </body>
    
  );
}

export default App;
