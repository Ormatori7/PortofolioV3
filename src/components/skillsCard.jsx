export const ThemeViolet =
  "bg-violet-500 border-white/10 hover:bg-violet-500/30 border-white/10";
export const ThemeGlass =
  "bg-white/10 border-white/10 hover:bg-violet-500/30 border-white/10";
export const ThemeNeon = "bg-white/10 border border-violet-500 hover:bg-violet-500/30 "


function SkillCard({ texte, bgColor }) {
  return (
    <div
      className={`px-2 py-2  border rounded-xl text-sm text-white  hover:scale-110 transition-all cursor-default shadow-lg shadow-black/50 ${bgColor ? bgColor : ThemeGlass}`}
    >
      <span>{texte}</span>
    </div>
  );
}

export default SkillCard;
