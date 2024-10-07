import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, toggleTheme } from "../store/actions/actions";

function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);
  const currentLanguage = useSelector(state => state.language.currentLanguage);

  const handleToggleLanguage = () => {
    dispatch(setLanguage(currentLanguage === "en" ? "tr" : "en"));
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className="w-full flex justify-end items-center p-4 bg-gray-100">
      <div className="flex items-center space-x-4">
        {/* Tema geçişi */}
        <div className="flex items-center">
          <button 
            className={`w-12 h-6 flex items-center rounded-full p-1 ${darkMode ? 'bg-purple-600' : 'bg-gray-300'}`}
            onClick={handleToggleTheme}
          >
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className="ml-2 text-sm font-medium">{darkMode ? 'DARK MODE' : 'LIGHT MODE'}</span>
        </div>
        
        {/* Dil geçişi */}
        <button 
          onClick={handleToggleLanguage}
          className="text-purple-600 text-sm font-medium"
        >
          {currentLanguage === "en" ? 'TÜRKÇE\'YE GEÇ' : 'SWITCH TO ENGLISH'}
        </button>

        {/* Menü */}
        <nav className="flex items-center space-x-4">
          <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
          <button className="border border-purple-600 px-4 py-2 rounded-md text-purple-600 hover:bg-purple-600 hover:text-white transition duration-300">
            Hire me
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
