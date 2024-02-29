import { useState } from 'react'

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Services from './components/Portfolio/Portfolio'
import Qualification from './components/Qualification/Qualification'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Scrollup from './components/Scrollup/Scrollup'
// import Loader from './components/Loader/Loader';
import gsap from 'gsap'
import './index.css'



const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  // const [loading, setLoading] = useState(false)

  AOS.init();

  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className={darkMode ? "main dark" : "main"}>
        <Home />
        <About />
        <Skills />
        {/*<Services />*/}
        <Qualification />
        <Contact />
        <Footer />
        <Scrollup />
      </main>
    </div>
  );
}
export default App