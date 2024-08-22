import React, { useState, useEffect } from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';
import Work from './components/work/Work';
import CircleLoader from "react-spinners/CircleLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <CircleLoader color={'#7f36d6'} loading={loading} size={150}/>
            <div className="loader-text">Bienvenue sur mon Portfolio...</div>
            <div className="name-text">KD Dervilon</div>
        </div>
      ) : (
        <>
          <Header />
          <main className="main">
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Work />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <ScrollUp />
        </>
      )}
    </>
  );
}

export default App;
