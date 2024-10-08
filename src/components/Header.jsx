
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setLanguage } from "../store/actions/actions";

function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);
  const currentLanguage = useSelector(state => state.language.currentLanguage);
  const userName = useSelector(state => state.user.name);

  const handleToggleTheme = () => dispatch(toggleTheme());
  const handleChangeLanguage = () => dispatch(setLanguage(currentLanguage === 'en' ? 'tr' : 'en'));

  return (
    <header className="flex flex-col">
      
      <div className="container mx-auto px-24 py-4"> 
        <div className="flex justify-end items-center p-2">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleToggleTheme}
              className={`w-12 h-6 flex items-center rounded-full p-1 ${darkMode ? 'bg-purple-800' : 'bg-gray-300'}`}
            >
              <div className={`bg-yellow-300 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">DARK MODE</span>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <button
              onClick={handleChangeLanguage}
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {currentLanguage === "en" ? (
                <>
                  <span className="text-purple-600 dark:text-purple-800 font-bold">TÜRKÇE</span>&rsquo;YE GEÇ
                </>
              ) : (
                <>
                  SWITCH TO <span className="text-purple-600 dark:text-purple-400 font-bold">ENGLISH</span>
                </>
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center p-4">
          <div className="logo w-16  h-16 rounded-full bg-purple-100 flex items-center text-2xl justify-center text-purple-600 font-bold transform rotate-[20deg]">
            {userName && userName[0].toUpperCase()}
          </div>
          <nav className="flex items-center space-x-16">
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Skills</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Projects</a>
            <button className="border border-purple-800 px-8 py-2 rounded-md text-purple-800 hover:bg-purple-800 hover:text-white transition-colors duration-300">
              Hire me
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
