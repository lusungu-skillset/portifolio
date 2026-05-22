import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Experiences from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Education from "./components/Education";
import DownloadCVButton from "./components/DownloadCVButton";
import { useState } from "react";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className={`grid ${isLightMode ? 'bg-white' : 'bg-gray-900'}`}> 
      <div className="fixed top-4 right-4 z-50">
        <motion.button
          onClick={toggleMode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`p-2 rounded-full transition-colors ${
            isLightMode 
              ? 'bg-gray-200 text-gray-800' 
              : 'bg-gray-800 text-yellow-300'
          }`}
          aria-label="Toggle light/dark mode"
        >
          {isLightMode ? (
            <FiMoon className="w-5 h-5" />
          ) : (
            <FiSun className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      <DownloadCVButton />

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={isLightMode ? 'bg-white' : 'bg-gray-900'}
        >
          <div className={`${isLightMode ? 'bg-gray-50 text-gray-900' : 'bg-grid text-white'} min-h-screen relative z-10`}>
            <Nav isLightMode={isLightMode} />
            <Hero isLightMode={isLightMode} />
            <Education isLightMode={isLightMode} />
            <Services isLightMode={isLightMode} /> 
            <Experiences isLightMode={isLightMode} />
            <Skills isLightMode={isLightMode} />
            <Certifications isLightMode={isLightMode} />
            <Projects isLightMode={isLightMode} />
            <Contact isLightMode={isLightMode} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;