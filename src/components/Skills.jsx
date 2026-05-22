import { motion } from "framer-motion";
import react from "/src/assets/images/react.png";
import css from "/src/assets/images/tailwind.svg";
import html from "/src/assets/images/html.png";
import JV from "/src/assets/images/java.png";
import TF from "/src/assets/images/terraform.svg";
import OS from "/src/assets/images/oracle.png";
import PS from "/src/assets/images/postgre.png";
import PT from "/src/assets/images/python.png";
import DK from "/src/assets/images/docker.png";
import SQ from "/src/assets/images/mysql.png";
import LX from "/src/assets/images/linux.png";
import JS from "/src/assets/images/js.png";
import CP from "/src/assets/images/c-.png";
import RD from "/src/assets/images/redux.png";
import NS from "/src/assets/images/nest.svg";
import TS from "/src/assets/images/typescript.png";
import AWS from "/src/assets/images/aws.png";
import UB from "/src/assets/images/ubuntu.png";
import PRM from "/src/assets/images/prometheus.svg";
import BS from "/src/assets/images/bash.svg";
import GT from "/src/assets/images/github.png";
import COLL from "/src/assets/images/collab.png";
import PB from "/src/assets/images/problem.png";
import PN from "/src/assets/images/planning.png";

const DHIS2Icon = (
  <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-10 md:h-10 fill-none stroke-blue-400 hover:stroke-blue-300 stroke-[1.5]" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

const PowerBIIcon = (
  <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-10 md:h-10 fill-amber-500 hover:fill-amber-400" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="14" width="4" height="8" rx="0.5" />
    <rect x="9" y="8" width="4" height="14" rx="0.5" />
    <rect x="16" y="2" width="4" height="20" rx="0.5" />
  </svg>
);

export default function Skills({ isLightMode }) {
  return (
    <section className="lg:mt-14 md:mt-14 sm:mt-14 mt-14 min-h-screen h-full w-full transform-none px-4 md:px-8 lg:px-16 py-12 md:py-24 bg-radial">
     
      <motion.section 
        id="Skills" 
        className={`text-3xl sm:text-4xl md:text-xl lg:text-[2rem] font-semibold mb-8 md:mb-16 text-center ${
          isLightMode ? 'text-gray-900' : 'text-neutral-50'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.section>

  
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-20 w-40 h-40 rounded-full"
      />

      {/* Skills Grid */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-6">
          
          <SkillCard title="Programming Languages" isLightMode={isLightMode}>
            <SkillItem icon={JS} label="JavaScript" isLightMode={isLightMode} />
            <SkillItem icon={PT} label="Python" isLightMode={isLightMode} />
            <SkillItem icon={JV} label="Java" isLightMode={isLightMode} />
            <SkillItem icon={CP} label="C++" isLightMode={isLightMode} />
          </SkillCard>

          <SkillCard title="Frontend Development" isLightMode={isLightMode}>
            <SkillItem icon={react} label="React" isLightMode={isLightMode} />
            <SkillItem icon={html} label="HTML" isLightMode={isLightMode} />
            <SkillItem icon={css} label="TailwindCSS" isLightMode={isLightMode} />
            <SkillItem icon={RD} label="Redux" isLightMode={isLightMode} />
          </SkillCard>

          <SkillCard title="Backend Development" isLightMode={isLightMode}>
            <SkillItem icon={TS} label="TypeScript" isLightMode={isLightMode} />
            <SkillItem icon={NS} label="NestJS" isLightMode={isLightMode} />
       
            <SkillItem icon={SQ} label="MySQL" isLightMode={isLightMode} />
            
          </SkillCard>

          <SkillCard title="Database Design" isLightMode={isLightMode}>
            <SkillItem icon={PS} label="PostgreSQL" isLightMode={isLightMode} />
            <SkillItem icon={SQ} label="MySQL" isLightMode={isLightMode} />
            <SkillItem icon={OS} label="Oracle" isLightMode={isLightMode} />
          </SkillCard>

          <SkillCard title="DevOps & Tools" isLightMode={isLightMode}>
            <div className="md:flex md:flex-col md:items-center">
              <div className="grid grid-cols-2 md:flex md:flex-row gap-4">
                <SkillItem icon={AWS} label="AWS" isLightMode={isLightMode} />
                <SkillItem icon={DK} label="Docker" isLightMode={isLightMode} />
                <SkillItem icon={PRM} label="Prometheus" isLightMode={isLightMode} />
                <SkillItem icon={UB} label="Ubuntu" isLightMode={isLightMode} />
                <SkillItem icon={BS} label="Bash" isLightMode={isLightMode} />
                <SkillItem icon={TF} label="Terraform" isLightMode={isLightMode} />
                <SkillItem icon={LX} label="Linux" isLightMode={isLightMode} />
                <SkillItem icon={GT} label="GitHub" isLightMode={isLightMode} />
              </div>
              <div className="flex xl:flex-row xl:mt-14 hidden">
                <SkillItem icon={BS} label="Bash" isLightMode={isLightMode} />
                <SkillItem icon={TF} label="Terraform" isLightMode={isLightMode} />
                <SkillItem icon={LX} label="Linux" isLightMode={isLightMode} />
                <SkillItem icon={GT} label="GitHub" isLightMode={isLightMode} />
              </div>
            </div>
          </SkillCard>

          <SkillCard title="Nontechnical Skills" isLightMode={isLightMode}>
            <SkillItem icon={PN} label="Planning" isLightMode={isLightMode} />
            <SkillItem icon={COLL} label="Collaboration" isLightMode={isLightMode} />
            <SkillItem icon={PB} label="Problem Solving" isLightMode={isLightMode} />
          </SkillCard>

          <SkillCard title="Extra Skills" isLightMode={isLightMode}>
            <SkillItem icon={DHIS2Icon} label="DHIS2" isLightMode={isLightMode} />
            <SkillItem icon={PowerBIIcon} label="PowerBI" isLightMode={isLightMode} />
          </SkillCard>
        </div>
      </motion.div>
    </section>
  );
}

function SkillCard({ title, children, isLightMode }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full h-full md:h-[40vh] border-t border-b shadow-2xl rounded-xl shadow-lg transition-all duration-300 overflow-hidden ${
        isLightMode
          ? 'bg-white text-gray-800 border-[#00ff99] border-t border-b'
          : 'bg-[#00ff99]/[0.05] hover:bg-white/[0.08] text-neutral-50'
      }`}
    >
      <section className="px-4 py-6 sm:px-6 sm:py-8 h-full flex flex-col">
        <h1 className={`font-semibold text-xl sm:text-2xl text-center mb-4 sm:mb-6 ${
          isLightMode ? 'text-gray-800' : 'text-neutral-50'
        }`}>
          {title}
        </h1>
        <div className="flex-1 flex flex-wrap justify-center items-center gap-4 sm:gap-6 w-full">
          {children}
        </div>
      </section>
    </motion.div>
  );
}

function SkillItem({ icon, label, isLightMode }) {
  const isSvgComponent = typeof icon !== 'string';
  return (
    <motion.div 
      className="flex flex-col items-center p-2 sm:p-3 w-[80px] md:w-fit"
      whileHover={{ scale: 1.05 }}
    >
      {isSvgComponent ? (
        <div className="h-12 sm:h-16 md:h-10 w-12 sm:w-16 md:w-10 flex items-center justify-center">
          {icon}
        </div>
      ) : (
        <img 
          src={icon} 
          alt={label} 
          className="h-12 sm:h-16 md:h-10 w-auto object-contain"
        />
      )}
      <p className={`text-xs sm:text-sm md:text-base mt-2 text-center font-medium whitespace-nowrap ${
        isLightMode ? 'text-gray-800' : 'text-neutral-50'
      }`}>
        {label}
      </p>
    </motion.div>
  );
}