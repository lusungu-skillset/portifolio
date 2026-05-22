import PF from "/src/assets/images/prof.png";
import ED from "/src/assets/images/education.png";
import SE from "/src/assets/images/service.png";
import EX from "/src/assets/images/experience.png";
import SK from "/src/assets/images/skill.png";
import CT from "/src/assets/images/phone.png";
import PJ from "/src/assets/images/project.png";

const Nav = ({ isLightMode }) => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const textClass = isLightMode 
    ? "text-gray-800 hover:text-[#009966]" 
    : "text-neutral-50 hover:text-[#009966]";

  return (
    <div id="About" className="flex justify-center mb-[40vh] scroll-smooth ">
      <div className={`w-fit relative top-11 inset-x-0 mx-auto border rounded-full backdrop-blur-sm z-[5000] transform-none px-4 py-3 shadow-2xl ${
        isLightMode 
          ? "border-black/[0.1] bg-white/80" 
          : "border-white/[0.3] bg-gray-900/20"
      }`}>
    
        <div className="relative hidden md:flex flex-row justify-center items-center gap-10 font-[sans-serif] transition duration-300 ease-in-out">
          <button className={`relative flex items-center space-x-1 mx-1 group ${textClass}`} onClick={() => handleScroll("About")}>About</button>
          <button className={`relative flex items-center space-x-1 group ${textClass}`} onClick={() => handleScroll("Education")}>Education</button>
          <button className={`relative flex items-center space-x-1 group ${textClass}`} onClick={() => handleScroll("Services")}>Services</button>
          <button className={`relative flex items-center space-x-1 group ${textClass}`} onClick={() => handleScroll("Experiences")}>Expriences</button>
          <button className={`relative flex items-center space-x-1 group ${textClass}`} onClick={() => handleScroll("Skills")}>Skills</button>
          <button className={`relative flex items-center space-x-1 group ${textClass}`} onClick={() => handleScroll("Certifications")}>Certifications</button>
          <button className={`relative flex items-center space-x-1 group ${textClass}`} onClick={() => handleScroll("Projects")}>Projects</button>
          <button className={`relative flex items-center space-x-1 group ${textClass}`} onClick={() => handleScroll("Contact")}>Contact</button>
        </div>

    
        <div className="flex md:hidden flex-row justify-center items-center gap-5 transform-none">
          <button onClick={() => handleScroll("About")}>
            <img src={PF} alt="profile" className={`w-5 h-5 hover:text-[#009966] ${isLightMode ? 'invert' : ''}`}/>
          </button>
          <button onClick={() => handleScroll("Education")}>
            <img src={ED} alt="education" className={`w-5 h-5 hover:text-[#009966] ${isLightMode ? 'invert' : ''}`}/>
          </button>
          <button onClick={() => handleScroll("Services")}>
            <img src={SE} alt="profile" className={`w-5 h-5 hover:text-[#009966] ${isLightMode ? 'invert' : ''}`}/>
          </button>
          <button onClick={() => handleScroll("Experiences")}>
            <img src={EX} alt="profile" className={`w-5 h-5 hover:text-[#009966] ${isLightMode ? 'invert' : ''}`}/>
          </button>
          <button onClick={() => handleScroll("Skills")}>
            <img src={SK} alt="profile" className={`w-5 h-5 hover:text-[#009966] ${isLightMode ? 'invert' : ''}`}/>
          </button>
          <button onClick={() => handleScroll("Certifications")} aria-label="Certifications" className={`hover:text-[#009966] ${isLightMode ? 'text-gray-800' : 'text-white'}`}>
            <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </button>
          <button onClick={() => handleScroll("Projects")}>
            <img src={PJ} alt="profile" className={`w-5 h-5 hover:text-[#009966] ${isLightMode ? 'invert' : ''}`}/>
          </button>
          <button onClick={() => handleScroll("Contact")}>
            <img src={CT} alt="profile" className={`w-5 h-5 hover:text-[#009966] ${isLightMode ? 'invert' : ''}`}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
