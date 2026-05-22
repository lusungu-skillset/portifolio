import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import GT from "/src/assets/images/github.png";
import { 
  ShieldCheck, 
  MapPin, 
  Globe, 
  GraduationCap, 
  Gamepad2, 
  HeartPulse, 
  Sprout, 
  BrainCircuit, 
  Trophy, 
  TrendingUp 
} from "lucide-react";

/* =======================
   PROJECT DATA
======================= */
const projects = [
  {
    title: "Automated Student Bonding System Backend",
    subtitle:
      "Backend system for student bonding verification\nBuilt using NestJS and MySQL",
    tech: ["NestJS", "MySQL", "Postman"],
    icon: ShieldCheck,
    repo: "https://github.com/lusungu-skillset/BondingSystem",
  },
  {
    title: "Pothole Reporter Frontend",
    subtitle:
      "GIS-based Next.js application\nVisualizing potholes on Google Maps",
    tech: ["Next.js", "PostGIS", "Google Maps"],
    icon: MapPin,
    repo: "https://github.com/lusungu-skillset/Pothole-Reporter-frontend",
    live: "https://pothole-reporter-frontend-eight.vercel.app/",
  },
  {
    title: "Pothole Reporter Backend",
    subtitle:
      "Geospatial backend with PostGIS\nAccurate pothole location processing",
    tech: ["NestJS", "PostGIS", "Docker"],
    icon: Globe,
    repo: "https://github.com/lusungu-skillset/porthole-backend",
  },
  {
    title: "EduVibe LMS Backend",
    subtitle:
      "Microservices backend for LMS\nCI/CD, Docker & Kubernetes ready",
    tech: ["NestJS", "Docker", "CI/CD"],
    icon: GraduationCap,
    repo: "https://github.com/lusungu-skillset/Eduvibe-backend",
  },
  {
    title: "Godot Racing Game",
    subtitle:
      "3D racing game built with Godot\nVehicle physics & game mechanics",
    tech: ["Godot", "GDScript"],
    icon: Gamepad2,
    repo: "https://github.com/lusungu-skillset/Racing-Game",
  },
  {
    title: "DHIS2 iCHIS Customized Application",
    subtitle:
      "Customized Integrated Community Health Information System (iCHIS) built on the DHIS2 platform.",
    tech: ["DHIS2", "JavaScript", "React", "Web API"],
    icon: HeartPulse,
    repo: "https://github.com/MCHIHANA/DHIS2-iCHIS-CUSTOMIZED-APPLICATION.git",
  },
  {
    title: "Maendeleo Agro Trade",
    subtitle:
      "Agro-ecommerce platform facilitating agricultural trade, supply chain tracking, and market access.",
    tech: ["React", "Node.js", "MySQL", "TailwindCSS"],
    icon: Sprout,
    repo: "https://github.com/lusungu-skillset/Maendeleo-Agro-Trade.git",
    live: "https://maendeleo-agro-trade.vercel.app/",
  },
  {
    title: "MANEB Prep Backend",
    subtitle:
      "Backend API system for national examination preparation platform, providing testing and progress analytics.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
    icon: BrainCircuit,
    repo: "https://github.com/lusungu-skillset/manebprep.git",
  },
  {
    title: "MANEB Prep Frontend",
    subtitle:
      "Interactive exam preparation client-side application with practice exams, timers, and performance dashboards.",
    tech: ["React", "TailwindCSS", "Redux Toolkit", "Chart.js"],
    icon: Trophy,
    repo: "https://github.com/lusungu-skillset/maneprep_frontend.git",
    live: "https://maneprep.vercel.app/",
  },
  {
    title: "Velori Finance (Client Project)",
    subtitle:
      "Professional finance and advisory services web application. Scalable, fast, and optimized for business growth.",
    tech: ["React", "TailwindCSS", "Framer Motion", "SEO"],
    icon: TrendingUp,
    repo: "https://github.com/techpact-team/VELORI_WEBSITE.git",
    live: "https://velorifinances.com",
  },
];

/* =======================
   PROJECT CARD
======================= */
const ProjectCard = ({ project, isLightMode }) => (
  <div
    className={`
      w-full
      max-w-[360px]
      md:w-[480px]
      md:max-w-none
      min-h-[480px]
      md:min-h-[620px]
      rounded-2xl
      p-6 md:p-8
      flex flex-col justify-between
      transition-all duration-300
      hover:-translate-y-1
      ${isLightMode 
        ? 'bg-white border border-gray-200 shadow-xl text-gray-800 hover:shadow-2xl' 
        : 'bg-emerald-500/5 border border-emerald-500/20 text-neutral-100 hover:border-emerald-400/40 hover:bg-emerald-500/10'}
    `}
  >
    {/* TOP CONTENT */}
    <div>
      <div className="flex justify-center mb-6">
        <div className={`
          p-4 md:p-5
          rounded-2xl
          flex items-center justify-center
          transition-all duration-300
          ${isLightMode 
            ? 'bg-emerald-50 text-emerald-600 shadow-sm border border-emerald-100' 
            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]'}
        `}>
          <project.icon className="w-10 h-10 md:w-12 md:h-12" />
        </div>
      </div>

      <h3 className={`text-lg md:text-2xl font-bold text-center mb-4 ${
        isLightMode ? 'text-gray-900' : 'text-emerald-100'
      }`}>
        {project.title}
      </h3>

      <p className={`text-sm md:text-base text-center whitespace-pre-line mb-8 leading-relaxed ${
        isLightMode ? 'text-gray-600' : 'text-emerald-100/70'
      }`}>
        {project.subtitle}
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`
              border
              px-4 py-1.5
              rounded-full
              text-xs md:text-sm
              ${isLightMode ? 'border-gray-200 text-gray-700 bg-gray-50' : 'border-emerald-500/30 text-emerald-300'}
            `}
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* BOTTOM ICONS */}
    <div className="flex justify-center items-center gap-4 mt-10">
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-3
          rounded-full
          border border-emerald-400/40
          hover:bg-emerald-500/10
          transition
        "
        title="View GitHub Repository"
      >
        <img src={GT} className={`h-8 md:h-9 ${isLightMode ? 'invert' : ''}`} />
      </a>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            p-3
            rounded-full
            border border-emerald-400/40
            transition
            flex items-center justify-center
            ${isLightMode 
              ? 'text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50' 
              : 'text-emerald-300 hover:text-emerald-100 hover:bg-emerald-500/10'}
          `}
          title="Visit Live Application"
        >
          <FiExternalLink className="w-8 h-8 md:w-9 md:h-9" />
        </a>
      )}
    </div>
  </div>
);

/* =======================
   MAIN COMPONENT
 ======================= */
export default function Projects({ isLightMode }) {
  const [current, setCurrent] = useState(0);
  const prev = (current - 1 + projects.length) % projects.length;
  const next = (current + 1) % projects.length;

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2
          id="Projects"
          className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-20 text-center ${
            isLightMode ? 'text-gray-900' : 'text-emerald-100'
          }`}
        >
          My Recent Projects
        </h2>

        {/* MOBILE (1 CARD) */}
        <div className="md:hidden mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center mb-16"
            >
              <ProjectCard project={projects[current]} isLightMode={isLightMode} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DESKTOP (UNIFORM SIZE CARDS) */}
        <div className="hidden md:flex justify-center items-center gap-14 mb-24">
          <AnimatePresence mode="wait">
            {[prev, current, next].map((idx, i) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: i === 1 ? 1 : 0.45,
                  scale: i === 1 ? 1 : 0.92,
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={projects[idx]} isLightMode={isLightMode} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="flex justify-center gap-8">
          <button
            onClick={() => setCurrent(prev)}
            className="px-7 py-3 rounded-xl font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            ← Previous
          </button>

          <button
            onClick={() => setCurrent(next)}
            className="px-7 py-3 rounded-xl font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
