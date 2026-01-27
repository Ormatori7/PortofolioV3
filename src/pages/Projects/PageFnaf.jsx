import Page3DProject from "../../components/ProjectCardPage3D.jsx";

const DataForPage = {
  titre: "Fnaf remake",
  AppUsed: ["Unreal Engine"],
  sousTitre: "The handmade remake of an famous game in order to learn the 3D software Unreal Engine ",
  imagePrincipal: "../images/FnafImage/BonnyCloseCam.png",
  projectDescription: "Description Du projet",
  texte1: "texte de la box1",
  details: "les details lié a ce projet",
  texte2: "texte de la box2",
  but: "le but de ce projet",
  texte3: "texte de la box3",
  titre2: "A preview of this game content and developement",
  HugeCardData: [
    {
      titre: "Modular AI System",
      description: "Actor-based AI logic to provide for animatronic some movement and dynamic pathfinding based on actor points.",
      image: "../images/FnafImage/MainStagefnaf.png",
      categorie: "dev",
    },
    {
      titre: "Ai Path",
      description: "As the hours pass, the animatronics grow increasingly aggressive, stalking through the shadows of the facility. They will attempt to breach your office by any means necessary, keep a watchful eye on every sector, or face the consequences of a security failure...",
      image: "../images/FnafImage/BonnyCloseCam.png",
      categorie: "dev",
    },
     {
      titre: "Survival Mechanics",
      description: "lfioshfsudghsuifgishi usdfuih uihsfdhifhsidhihf fej",
      image: "../images/FnafImage/MainMenuFnaf.png",
      categorie: "dev",
    },
  ],
};

function FnafPage({ setPage }) {
  return <Page3DProject setPage={setPage} datapage={DataForPage} />;
}
export default FnafPage;
