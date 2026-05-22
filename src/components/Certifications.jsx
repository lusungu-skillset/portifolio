import { motion } from "framer-motion";

const certifications = [
  {
    title: "DevOps MasterClass: Terraform Kubernetes Ansible Docker",
    issuer: "Udemy",
    instructors: "TechLynk Selenium | DevOps | GenAI | Cloud",
    date: "Jan. 6, 2026",
    length: "76.5 total hours",
    credentialId: "UC-2e11d813-96f2-43f9-a0b4-f5d9b67b36d0",
    credentialUrl: "https://ude.my/UC-2e11d813-96f2-43f9-a0b4-f5d9b67b36d0",
    refNumber: "0004",
    skills: ["DevOps", "Terraform", "Kubernetes", "Ansible", "Docker"],
  }
];

export default function Certifications({ isLightMode }) {
  return (
    <section id="Certifications" className="py-20 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 text-center ${
            isLightMode ? "text-gray-900" : "text-emerald-100"
          }`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Credentials
        </motion.h2>

        <div className="flex justify-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative w-full max-w-2xl p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                isLightMode
                  ? "bg-white border-gray-200 shadow-xl"
                  : "bg-emerald-950/20 border-emerald-500/20 hover:border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.05)] hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
              }`}
            >
              {/* TOP HEADER */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-emerald-500/10">
                <div className="flex items-center gap-3">
                  {/* Custom Udemy Styled Icon */}
                  <div className="px-3 py-1.5 bg-[#A435F0] text-white font-bold text-lg rounded-md select-none tracking-tight">
                    ûdemy
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold tracking-tight ${
                      isLightMode ? "text-gray-900" : "text-white"
                    }`}>
                      {cert.issuer}
                    </h3>
                    <p className={`text-xs ${isLightMode ? "text-gray-500" : "text-emerald-400/80"}`}>
                      Verified Certificate of Completion
                    </p>
                  </div>
                </div>
                <div className="text-right sm:text-right w-full sm:w-auto">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    isLightMode 
                      ? "bg-gray-100 text-gray-700" 
                      : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                  }`}>
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* COURSE INFO */}
              <div className="mb-6">
                <h4 className={`text-xl sm:text-2xl font-bold mb-3 leading-snug tracking-tight ${
                  isLightMode ? "text-gray-800" : "text-emerald-100"
                }`}>
                  {cert.title}
                </h4>
                <p className={`text-sm mb-2 ${isLightMode ? "text-gray-600" : "text-white/70"}`}>
                  <span className="font-semibold text-xs uppercase tracking-wider block mb-0.5 text-gray-400">Instructors</span>
                  {cert.instructors}
                </p>
                <div className="flex flex-wrap gap-4 mt-3 text-xs sm:text-sm text-gray-400">
                  <div>
                    <span className="font-semibold text-gray-500">Duration: </span>
                    <span className={isLightMode ? "text-gray-700" : "text-emerald-300"}>{cert.length}</span>
                  </div>
                  <div className="hidden sm:block">|</div>
                  <div>
                    <span className="font-semibold text-gray-500">Ref: </span>
                    <span className={isLightMode ? "text-gray-700" : "text-emerald-300"}>{cert.refNumber}</span>
                  </div>
                </div>
              </div>

              {/* SKILLS */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2.5 py-1 rounded ${
                        isLightMode
                          ? "bg-[#A435F0]/10 text-[#A435F0] font-semibold"
                          : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/10"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CREDENTIAL DETAILS & VERIFICATION BUTTON */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-gray-200 dark:border-emerald-500/10">
                <div className="text-xs font-mono text-gray-500 w-full sm:w-auto">
                  <p className="truncate max-w-[280px] sm:max-w-[340px]">
                    ID: <span className={isLightMode ? "text-gray-700" : "text-white"}>{cert.credentialId}</span>
                  </p>
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-center text-sm font-semibold transition-all duration-300 bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-emerald-500/10"
                >
                  Verify Credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
