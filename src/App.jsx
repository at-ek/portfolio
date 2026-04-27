import { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Works from './pages/Works';
import Hobby from './pages/Hobby';


function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      }))
    })

    sections.forEach((section) => observer.observe(section));
  }, []);

  return(
    <>
      <Header />

      <main>
        <Home />
        <Skills />
        <Works />
        <Hobby />
      </main>

      <footer>
        <p><small>&copy;2026 keita shida、</small></p>
      </footer>
    </>
  );
}

export default App
