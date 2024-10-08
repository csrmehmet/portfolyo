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
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Profile />
        <Footer />
      </div>
    </div>
  );
}

export default App;