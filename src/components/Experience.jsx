import { FiCircle } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experienceData = [
  {
    date: 'Contract basis',
    role: 'ICT Assistant Specialist',
    company: 'EDUNITE2SERVE',
    companyUrl: 'https://edunite2serve.org',
    details: [
      'Manage and optimize ICT systems, infrastructure, and network operations to support digital outreach.',
      'Maintain and update the organization\'s official website (https://edunite2serve.org) to ensure security and uptime.',
      'Provide technical assistance, troubleshooting hardware/software issues, and streamlining remote collaboration tools.'
    ]
  },
  {
    date: 'May 2025 - December 2025',
    role: 'Junior DevOps Engineer',
    company: 'Plubirl',
    details: [
      'I manage CI/CD pipelines used by our development teams at Plubirl.',
      'I assist with automating cloud infrastructure within our Plubirl environments.',
      'I monitor systems and logs to ensure reliable performance across Plubirl services.',
      'I collaborate with teams and document DevOps processes specific to Plubirl\'s workflows.'
    ]
  },
  {
    date: 'June 2024 - December 2024',
    role: 'Junior Software Engineer',
    company: 'HB Space TL',
    details: [
      'I contribute to building and maintaining web and mobile applications at HB Space TL.',
      'I write clean, efficient code and fix bugs as part of the development team.',
      'I collaborate with designers and senior engineers to implement new features.',
      'I participate in code reviews and continuously learn to improve my skills at HB Space TL.'
    ]
  }
];

export default function Experiences({ isLightMode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const height = useTransform(scrollYProgress, [0, 1], ['0%', '95%']);

  return (
    <div
      className="flex flex-col justify-center mt-40 sm:mt-40 px-4 md:px-8 lg:px-16 py-12 md:py-24 relative"
      ref={ref}
    >
      <section id="Experiences" className={`text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-center mb-12 md:mb-16 ${
        isLightMode ? 'text-gray-900' : 'text-neutral-50'
      }`}>
        Experiences
      </section>

      <div className="relative space-y-16 md:space-y-20 max-w-6xl mx-auto w-full">
        {/* Vertical Timeline Line */}
        <motion.div
          className="absolute left-6 md:left-[332px] top-2 bottom-0 w-0.5 sm:w-[2px] z-0 bg-gradient-to-b from-[#009966] shadow-lg"
          style={{ height }}
        />

        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 md:gap-16 relative z-10 w-full"
          >
            {/* DATE COLUMN */}
            <div className="relative pl-12 md:pl-0 md:text-right flex items-center md:items-start md:justify-end">
              <FiCircle
                color="gray"
                className={`absolute left-[14px] md:left-[320px] mt-1 md:mt-2 border rounded-full z-20 w-5 h-5 md:w-6 md:h-6 ${
                  isLightMode ? 'bg-gray-200 border-gray-400' : 'bg-white/[0.25] border-white/40'
                }`}
              />
              <p className={`text-base sm:text-lg md:text-xl font-sans font-medium ${
                isLightMode ? 'text-gray-500' : 'text-white/50'
              }`}>
                {exp.date}
              </p>
            </div>

            {/* DETAILS COLUMN */}
            <div className="pl-12 md:pl-0">
              <p className={`text-lg sm:text-xl md:text-2xl ${
                isLightMode ? 'text-gray-900 font-bold' : 'text-neutral-50 font-semibold'
              }`}>
                {exp.role}
              </p>
              <p className={`text-base sm:text-lg md:text-xl mt-1 ${
                isLightMode ? 'text-gray-600 font-medium' : 'text-white/70'
              }`}>
                @
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#009966] underline decoration-dotted transition-colors"
                  >
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </p>
              <div className={`mt-4 space-y-2 font-sans text-base sm:text-lg leading-relaxed ${
                isLightMode ? 'text-gray-700' : 'text-neutral-50'
              }`}>
                {exp.details.map((detail, i) => (
                  <p key={i} className="flex items-start">
                    <span className="mr-2">•</span> 
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}