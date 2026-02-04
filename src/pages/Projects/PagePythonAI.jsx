import PageDevProject from "../../components/ProjectCardPageDev";

const DataForPage = {
  titre: "Python gesture-based control",
  AppUsed: ["Python"],
  sousTitre:
    "The creation of an python script in order to learn code by blending logic with real life interaction",
  imagePrincipal: "./images/0001.png",

  details: "Project details",
  texte1:
    "Developed in 3 days, this python project was created to learn how code can react with external inputs and more precisely with part of body, which was the hands during this project.",

  projectDescription: "Project description",
  texte2:
    "This project was developed in Python 3.12.9 within a virtual environment (venv) and utilizes MediaPipe, an open-source framework by Google for AI and machine learning solutions. It also integrates OpenCV (Open Source Computer Vision Library) to handle camera access and create a visual interface, facilitating real-time debugging.",

  but: "The goal of the project",
  texte3:
    "The objective was to develop a script enabling gesture-based control for applications like Spotify and YouTube, allowing users to trigger basic commands like play or stop via real-time hand tracking. ",

  titre2: "A preview of this project content and developement",
  HugeCardData: [
    {
      titre: "Modular AI System",
      description:
        "Actor-based AI logic to provide for animatronic some movement and dynamic pathfinding based on actor points.",
      image: "./images/FnafImage/MainStagefnaf.png",
      categorie: "feature",
      position: "0",
    },
    {
      titre: "Ai Path",
      description:
        "As the hours pass, the animatronics grow increasingly aggressive, stalking through the shadows of the facility. They will attempt to breach your office by any means necessary, keep a watchful eye on every sector, or face the consequences of a security failure...",
      image: "./images/FnafImage/BonnyCloseCam.png",
      categorie: "feature",
      position: "1",
    },
    {
      titre: "Survival Mechanics",
      description:
        "Resource-based gameplay where every action (lights, doors, CCTV) drains a limited power supply, leaving the player vulnerable.",
      image: "./images/FnafImage/DoorFnaf.png",
      categorie: "dev",
      position: "0",
    },
    {
      titre: "Ik Head System",
      description:
        "Animatronics utilize an IK (Inverse Kinematics) system to procedurally track the player's camera after a predefined delay, increasing the sense of unease",
      image: "./images/FnafImage/Awake.png",
      categorie: "dev",
      position: "1",
    },
  ],
};

function PythonAi({}) {
  return (
    <>
      <PageDevProject datapage={DataForPage} />
    </>
  );
}
export default PythonAi;
