import { motion } from "framer-motion";
import react from "/src/assets/images/react.png";
import css from "/src/assets/images/css.png";
import node from "/src/assets/images/nodejs.png";
import html from "/src/assets/images/html.png";
import TS from "/src/assets/images/typescript.png";
import TF from "/src/assets/images/terraform.svg";
import OS from "/src/assets/images/oracle.png";
import PS from "/src/assets/images/postgre.png";
import PT from "/src/assets/images/python.png";
import DK from "/src/assets/images/docker.png";
import SQ from "/src/assets/images/mysql.png";
import LX from "/src/assets/images/linux.png";
import AZ from "/src/assets/images/azure.png";

export default function Services({ isLightMode }) {
  const services = [
    {
      title: "Web Development",
      description:
        "I craft visually appealing, intuitive websites designed to elevate your online presence. Whether it's a straightforward site or a full-scale e-commerce platform, I offer customized solutions built with the latest technologies to ensure a smooth, mobile-friendly, and search-optimized experience.",
      icons: [css, react, html],
      color: "#00B578",
    },
    {
      title: "Backend Development",
      description:
        "I build powerful, scalable backend systems that serve as the engine behind your application. From crafting secure APIs to managing databases and server logic, I ensure your app runs smoothly, efficiently, and reliably.",
      icons: [TS, node, SQ],
      color: "#00B578",
    },
    {
      title: "DevOps",
      description:
        "I streamline development and deployment workflows through effective DevOps practices. From automating CI/CD pipelines to configuring cloud infrastructure and monitoring systems, I help ensure faster releases, improved reliability, and smoother collaboration between teams.",
      icons: [DK, TF, AZ, PT, LX],
      color: "#00B578",
    },
    {
      title: "Database Design",
      description:
        "I design and develop efficient, secure, and scalable databases that power your applications. Whether it's SQL or NoSQL, I ensure fast querying, strong data integrity, and smooth integration with your backend.",
      icons: [PS, OS, SQ],
      color: "#00B578",
    },
  ];

  return (
    <section className="bg-radial h-fit transform-none px-4 sm:px-6 lg:px-12 py-12 md:py-24">
      <h2
        id="Services"
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-center mb-8 md:mb-12 ${
          isLightMode ? 'text-gray-900' : 'text-neutral-50'
        }`}
      >
        Services
      </h2>

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto font-sans">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              isLightMode={isLightMode}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ServiceCard({ service, isLightMode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`border-t border-b shadow-lg rounded-xl p-4 sm:p-5 transition-all duration-300 w-full ${
        isLightMode
          ? 'bg-white text-gray-700'
          : 'bg-[#00ff99]/[0.05] hover:bg-white/[0.05] border-white/80 text-neutral-50'
      }`}
    >
      <div className="flex justify-center py-2 gap-2 flex-wrap">
        {service.icons.map((icon, iconIndex) => (
          <img
            key={iconIndex}
            src={icon}
            alt="icon"
            className={`h-10 shadow-lg md:h-12 border-r border-l p-1 rounded-full ${
              isLightMode
                ? 'border-gray-300 bg-gray-100'
                : 'border-white/80 bg-white/[0.09]'
            }`}
          />
        ))}
      </div>

      <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: service.color }}>
        {service.title}
      </h3>

      <p className={`leading-relaxed text-sm md:text-base ${
        isLightMode ? 'text-gray-600' : 'text-neutral-50'
      }`}>
        {service.description}
      </p>
    </motion.div>
  );
}