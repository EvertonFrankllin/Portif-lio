import '../src/Styles/App.css';

import Header from './components/Header/Header';
import Aboult from './components/Aboult/Aboult';
import Home from './components/Home/Home';
import Carreira from './components/Carreira/Carreira';
import School from './components/School/School';
import Project from './components/Projetos/Project';
import Footer from './components/Footer/Footer';

//import letraE from'../src/img/E.svg';


function App() {
  return (
    <div className="App">
      <Header />
      <Aboult />
      <Home />
      <Carreira />
      <School />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
