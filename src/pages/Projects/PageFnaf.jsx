import Page3DProject from "../../components/ProjectCardPage3D.jsx";

const DataForPage = {
  titre: "Fnaf remake",
  AppUsed: ["Unreal Engine"],
  sousTitre:
    "The handmade remake of an famous game in order to learn the 3D software Unreal Engine ",
  imagePrincipal: "../images/FnafImage/BonnyCloseCam.png",

  details: "Project details",
  texte1:
    "Developed in two weeks, this solo project encompassed every aspect of animatronics to programming core gameplay mechanics, excets for 3D modelling, using Unreal Engine's Blueprints.",

  projectDescription: "Project description",
  texte2:
    "This project is a faithful remake of the original Five Nights at Freddy's. The primary objective was to recreate the oppressive atmosphere of the security office by engineering an unpredictable AI system and a high-fidelity environment.",

  but: "The goal of the game",
  texte3:
    "The mission: survive the night shift from 12 AM to 6 AM for five consecutive nights while managing critical power resources.",

  titre2: "A preview of this game content and developement",
  HugeCardData: [
    {
      titre: "Modular AI System",
      description:
        "Actor-based AI logic to provide for animatronic some movement and dynamic pathfinding based on actor points.",
      image: "../images/FnafImage/MainStagefnaf.png",
      categorie: "feature",
      position: "0",
    },
    {
      titre: "Ai Path",
      description:
        "As the hours pass, the animatronics grow increasingly aggressive, stalking through the shadows of the facility. They will attempt to breach your office by any means necessary, keep a watchful eye on every sector, or face the consequences of a security failure...",
      image: "../images/FnafImage/BonnyCloseCam.png",
      categorie: "feature",
      position: "1",
    },
    {
      titre: "Survival Mechanics",
      description: "lfioshfsudghsuifgishi usdfuih uihsfdhifhsidhihf fej",
      image: "../images/0001.png",
      categorie: "dev",
      position: "0",
    },
  ],
};

function FnafPage({ setPage }) {
  return <Page3DProject setPage={setPage} datapage={DataForPage} />;
}
export default FnafPage;
