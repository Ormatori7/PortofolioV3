import Page3DProject from "../../components/ProjectCardPage3D.jsx";
import ContinuousCarousel from "../../components/Carrousel.jsx";
import BoxCarousel from "../../components/CarrouselArrow.jsx";

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
      description:
        "Resource-based gameplay where every action (lights, doors, CCTV) drains a limited power supply, leaving the player vulnerable.",
      image: "../images/FnafImage/DoorFnaf.png",
      categorie: "dev",
      position: "0",
    },
    {
      titre: "Ik Head System",
      description:
        "Animatronics utilize an IK (Inverse Kinematics) system to procedurally track the player's camera after a predefined delay, increasing the sense of unease",
      image: "../images/FnafImage/Awake.png",
      categorie: "dev",
      position: "1",
    },
  ],
};

const MenuImage = [
  { image: "../images/FnafImage/chica.png", titre: "Chica" },
  { image: "../images/FnafImage/foxy.png", titre: "Foxy" },
  { image: "../images/FnafImage/MainMenuFnaf.png", titre: "Bonnie" },
  { image: "../images/FnafImage/freddy.png", titre: "Freddy" },
];

const projectScreenshots = [
  "../images/FnafImage/stage.png",
  "../images/FnafImage/partyRoom.png",
  "../images/FnafImage/piratecurtain.png",
  "../images/FnafImage/maintenance.png",
  "../images/FnafImage/restrooms.png",
  "../images/FnafImage/kitchen.png",
  "../images/FnafImage/lefthallway.png",
  "../images/FnafImage/RightHallway.png",
  "../images/FnafImage/storage.png",
  "../images/FnafImage/RightCorner.png",
  "../images/FnafImage/leftCorner.png",
  "../images/FnafImage/office.png",
];

function FnafPage({ setPage }) {
  return (
    <>
      <Page3DProject setPage={setPage} datapage={DataForPage} />

      <div className="pb-20 pt-15">
        <h2 className="text-center text-white text-3xl font-black uppercase tracking-tighter mb-10">
          Menu Preview
        </h2>
        <ContinuousCarousel data={MenuImage} />
      </div>

      <div className="pb-20 pt-15">
        <h2 className="text-center text-white text-3xl font-black uppercase tracking-tighter mb-10">
          Map preview
        </h2>
        <BoxCarousel images={projectScreenshots} />
      </div>
    </>
  );
}
export default FnafPage;
