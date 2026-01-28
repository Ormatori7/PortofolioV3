export const ThemeViolet =
  "bg-violet-500/10 border border-violet-400/20 hover:bg-violet-500/25 hover:border-violet-400/60 hover:shadow-[0_0_12px_rgba(167,139,250,0.3)] transition-all duration-300";
export const ThemeGlass =
  "bg-white/10 border-white/10 hover:bg-violet-500/30 border-white/10";
export const ThemeNeon = "bg-white/10 border border-violet-500 hover:bg-violet-500/30 "


function SkillCard({ texte, bgColor, icone }) {
  return (
    <div
      className={`px-2 py-2  border rounded-xl text-sm text-white  hover:scale-110 transition-all cursor-default shadow-lg shadow-black/50 flex items-center gap-2 ${bgColor ? bgColor : ThemeGlass}`}
    >
      {icone && <span className="text-xl">{icone}</span>} 
      {/* Affiche l'icône si elle existe */}
      <span>{texte}</span>
    </div>
  );
}

export default SkillCard;
