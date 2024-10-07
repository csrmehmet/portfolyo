// App.jsx

import { useSelector } from 'react-redux';


import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Profile />
      </main>
      <Footer />
    </div>
  );
}

export default App;