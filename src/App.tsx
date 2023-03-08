import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallary from './pages/Gallary';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='App'>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/gallary' element={<Gallary />} />
            <Route path='/about' element={<About />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;