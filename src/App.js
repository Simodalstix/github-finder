import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Notfound from './Pages/Notfound'

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/notfound' element={<Notfound />}/>
          <Route path='/*' element={<Notfound />}/>
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
