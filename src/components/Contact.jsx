import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Lusper from "/src/assets/images/lusper.jpg";

export default function Contact({ isLightMode }) {
  return (
    <section className="bg-radial transform-none relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-20 w-40 h-40 rounded-full opacity-10 blur-xl"
      />
      
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center w-full max-w-6xl px-4"
      >
        <div className="flex flex-col justify-center mx-auto w-full">
          <section 
            id="Contact" 
            className={`text-[3vh] md:text-[4vh] font-bold mt-20 ${
              isLightMode ? 'text-gray-900' : 'text-neutral-50'
            }`}
          >
            Lets Connect
          </section>
          <div className="flex justify-center mt-8">
            <img src={Lusper} className="w-50 h-50 rounded-full border solid border-[#009966]" alt="lusper"/>
          </div>
          
          <div className={`font-sans ${isLightMode ? 'text-gray-600' : 'text-neutral-50'}`}>
            <section className="flex flex-col justify-center h-fit mt-12 space-y-6 md:space-y-8">
           
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
                <ContactLink 
                  href="https://www.linkedin.com/in/lusungumhango"
                  icon={<FaLinkedin className="text-lg md:text-xl"/>}
                  text="Lusungu Mhango"
                  isLightMode={isLightMode}
                />
                
                <ContactLink 
                  href="mailto:mhangolusungu2003@gmail.com"
                  icon={<MdEmail className="text-lg md:text-xl"/>}
                  text="mhangolusungu2003@gmail.com"
                  isLightMode={isLightMode}
                />
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
                <ContactLink 
                  href="https://github.com/Lusper04/personal.git"
                  icon={<FaGithub className="text-lg md:text-xl"/>}
                  text="Lusungu Mhango"
                  isLightMode={isLightMode}
                />
                
                <ContactLink 
                  href="https://wa.me/+265894446848?text=Hy Lusungu!"
                  icon={<FaWhatsapp className="text-lg md:text-xl"/>}
                  text="Lusper Mhango"
                  isLightMode={isLightMode}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
              
              <div className="flex justify-center">
                <ContactLink 
                  href="tel:0999916443"
                  icon={<FaPhone className="text-lg md:text-xl"/>}
                  text="0999916443"
                  isLightMode={isLightMode}
                  fullWidth={false}
                />
              </div>
            
              <div className={`flex justify-center space-x-1 mt-8 mb-12 lg:text-2xl md:text-2xl text-2xl xl:text-2xl lg:mt-20 text-lg sm:text-sm ${
                isLightMode ? 'text-gray-900' : 'text-neutral-50'
              }`}>
                <strong>Iam</strong>
                <strong>Open to</strong>
                <strong className="text-[#009966]">Work</strong>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </section>  
  );
}

function ContactLink({ href, icon, text, isLightMode, fullWidth = true, ...props }) {
  return (
    <a 
      href={href}
      className={`flex justify-center items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl p-3 rounded-lg transition-colors ${
        isLightMode
          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          : 'bg-white/15 backdrop-blur-[0.02vh] text-neutral-50 hover:bg-[#009966]'
      } ${fullWidth ? 'w-full' : 'w-full md:w-auto md:min-w-[50%]'}`}
      {...props}
    >
      {icon}
      {text}
    </a>
  );
}