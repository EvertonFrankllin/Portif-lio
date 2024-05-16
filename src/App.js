import './App.css';

import Header from './components/Header';
import Leave from './components/Leave';
import Aside from './components/Aside';
import Carreira from './components/Carreira';
import School from './components/School';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Leave />
      <Aside />
      <Carreira />
      <School />
      <Footer />
    </div>
  );
}

export default App;
