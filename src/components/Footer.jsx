import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer({ setPage }) {
  return (
    <footer className="w-full pt-20 pb-10 px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      {/* Glow violet subtil en fond */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        
       
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 text-white">
              Let's build <span className="text-violet-500">together.</span>
            </h2>
            <p className="text-white/40 text-sm italic">Available for new opportunities and 3D challenges.</p>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8">
          
          
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">
            <button onClick={() => setPage("Acceuil")} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <button onClick={() => setPage("ProfilFunction")} className="hover:text-white transition-colors cursor-pointer">Profil</button>
            <button onClick={() => setPage("ProjectsFunction")} className="hover:text-white transition-colors cursor-pointer">Projects</button>
          </div>

          
          <div className="flex gap-6">
            <a href="https://linkedin.com" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-violet-500/25 transition-all">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-violet-500/25 transition-all">
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        
        <div className="text-center text-[9px] uppercase tracking-[0.6em] text-white/50">
          © 2026 Moura Antoine — Built with React & Tailwind
        </div>
      </div>
    </footer>
  );
}

export default Footer;