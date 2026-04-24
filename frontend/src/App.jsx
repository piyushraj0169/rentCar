import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'
import MyBookings from './pages/MyBookings'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
