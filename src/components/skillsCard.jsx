function SkillCard({ texte }) {
  return (
    <div className="px-2 py-2 bg-violet-500 border border-white/10 rounded-xl text-sm text-white hover:bg-violet-500/30 hover:scale-110 transition-all cursor-default">
      <span>{texte}</span>
    </div>
  );
}

export default SkillCard;
