import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';



function App() {

  return (
    <BrowserRouter>
        <div className= "app">
           <h1>My Online Portal</h1>
           <Navbar/>
           
           <main className= "container py-4">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/catalog' element={<Catalog />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
           </main>
          
           <Footer/>
        </div>
    </BrowserRouter>
  )
}
    
export default App;
