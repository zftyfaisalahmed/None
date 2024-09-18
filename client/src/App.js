import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Components/Home';
import Menu from './Components/Menu';
import About from './Components/About';
import Service from './Components/Service';
import Port from './Components/Port';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <ToastContainer autoClose={6000} position={'top-right'}/>
      <Home />
      <About />
      <Service />
      <Port />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
