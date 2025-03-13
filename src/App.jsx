import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import FirstHeading from './components/FirstHeading/FirstHeading.jsx'
import Services from './components/Services/Services.jsx'
import Tagline from './components/Tagline/Tagline.jsx'
import Contact from './components/Contact/Contact.jsx'

import './App.css'


function App() {

  return (
    <>
      <Navbar/>
      <Tagline/>
      <FirstHeading/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
