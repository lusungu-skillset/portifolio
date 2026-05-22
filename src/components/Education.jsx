import { FiCircle } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const educationData = [
  {
    date: 'Jun 2021-May 2026',
    degree: 'Bachelor of Science in Computer Sciences',
    school: 'University of Malawi (UNIMA)',
    location: 'Zomba, Malawi',
    address:'P.O Box 280'
  },
  {
    date: 'Jan 2019 - Jan 2021',
    degree: 'Malawi School Certificate of Education (MSCE)',
    school: 'Domasi Mission Secondary School (DMX)',
    location: 'Zomba, Malawi',
  },
];

export default function Education({ isLightMode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

  return (
    <div 
      className="flex flex-col justify-center mt-20 md:mt-40 py-10 px-4 sm:px-6 relative"
      ref={ref}
    >
      <h2 id="Education" className={`text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-center mb-10 sm:mb-16 ${
        isLightMode ? 'text-gray-900' : 'text-white'
      }`}>
        Education
      </h2>

    
    

      <div className="max-w-4xl mx-auto w-full">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col relative md:flex-row py-18 sm:py-10 md:py-12 relative z-10"
          >
          
            <div className="flex items-start lg:ml-[14vh]">
              <FiCircle
                size={24}
                color="gray"
                className={`hidden md:block absolute left-2 md:left-4 lg:left-14 xl:left-[-20vh] mt-[1.8vh] border rounded-full ${
                  isLightMode ? 'bg-gray-200 border-gray-400' : 'bg-white/[0.25] border-white/40'
                }`}
              />
              
              <div className="flex items-center sm:items-start">
                <FiCircle
                  size={20}
                  color="gray"
                  className={`md:hidden absolute left-0 mt-[0.1rem] border rounded-full ${
                    isLightMode ? 'bg-gray-200 border-gray-400' : 'bg-white/[0.25] border-white/40'
                  }`}
                />
                <p className={`ml-6 sm:ml-none md:ml-12 ml-12 lg:ml-[-7vh] xl:ml-[-30vh] sm:mt-[1.5vh] text-base sm:text-lg md:text-xl font-sans font-medium w-[180px] md:w-[18vh] xl:w-fit sm:w-auto ${
                  isLightMode ? 'text-gray-500' : 'text-white/50'
                }`}>
                  {edu.date}
                </p>
              </div>
            </div>
          

          
            <div className="w-full md:w-3/5 pl-0 xl:ml-[12vh] mt-3 md:mt-0">
              <p className={`text-base ml-12 sm:ml-12 md:ml-12 lg:ml-20 xl:ml-12 sm:text-lg md:text-xl font-semibold ${
                isLightMode ? 'text-gray-900' : 'text-white'
              }`}>
                {edu.degree}
              </p>
              <p className={`text-sm sm:text-base ml-12 sm:ml-12 md:ml-12 lg:ml-20 xl:ml-12 mt-1 ${
                isLightMode ? 'text-gray-600' : 'text-white/60'
              }`}>
                @{edu.school}, {edu.location}
              </p>
              <p className={`text-base ml-12 sm:ml-12 md:ml-12 lg:ml-20 xl:ml-12 sm:text-lg md:text-sm font-medium ${
                isLightMode ? 'text-gray-500' : 'text-white/60'
              }`}>
                {edu.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}