import './App.css';

import Header from './components/Header';
import Leave from './components/Leave';
import Aside from './components/Aside';
import Carreira from './components/Carreira';
import School from './components/School';
import Project from './components/Project';
import Footer from './components/Footer';

//import letraE from'../src/img/E.svg';


function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Leave />
      <Carreira />
      <School />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
