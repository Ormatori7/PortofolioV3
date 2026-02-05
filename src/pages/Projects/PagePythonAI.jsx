import PageDevProject from "../../components/ProjectCardPageDev";
import ContinuousCarousel from "../../components/Carrousel.jsx";

const DataForPage = {
  titre: "Python gesture-based control",
  AppUsed: ["Python"],
  sousTitre:
    "The creation of an python script in order to learn code by blending logic with real life interaction",
  imagePrincipal: "./images/PythonAiImage/full.png",

  details: "Project details",
  texte1:
    "Developed in 3 days, this python project was created to learn how code can react with external inputs and more precisely with part of body, which was the hands in this case.",

  projectDescription: "Project description",
  texte2:
    "This project was developed in Python 3.12.9 within a virtual environment (venv) and utilizes MediaPipe, an open-source framework by Google for AI and machine learning solutions. It also integrates OpenCV (Open Source Computer Vision Library) to handle camera access and create a visual interface, facilitating real-time debugging.",

  but: "The goal of the project",
  texte3:
    "The objective was to develop a script enabling gesture-based control for applications like Spotify or YouTube, allowing users to trigger basic commands like play or stop via real-time hand tracking.",

  titre2: "A preview of this project content and developement",
  HugeCardData: [
    {
      code: "# the tool wich allow the script to acces the webcam \nimport cv2 \n# the framework wich contains the Ai for the hands \nimport mediapipe \n# The library for math calculations \nimport math \n# A tool to convert numbers \nimport numpy \n# Allows the script to control the keyboard \nimport pyautogui",
      language: "Python",
      titre: "The import",
      description:
        "Those are the import needed to make this project functionnal.",
      categorie: "import",
      position: "1",
    },
    {
      code: "mp_hands = (mp.solutions.hands) \n\nmp_draw = (mp.solutions.drawing_utils)",
      language: "Python",
      titre: "The Ai variable preparation",
      description:
        "The module we need in order to use the detection and draw tools from the framework mediapipe.",
      categorie: "variable",
      position: "0",
    },
    {
      code: "lmList = [] \n\nlmList.append([id, cx, cy, cz])",
      language: "Python",
      titre: "The finger list",
      description:
        "Creating a list to store the ID and spatial coordinates (X, Y, Z) for each point. Each finger has 4 landmarks, plus the wrist, totaling 21 points for the entire hand.",
      categorie: "variable",
      position: "0",
    },
    {
      code: "points = np.array([[p[1], p[2]] for p in lmList], dtype=np.int32) \n\n# Adjust the size on the box depending on the size of the hand \nrect = cv2.minAreaRect(points) \nbox = cv2.boxPoints(rect) # Find the 4 corners\nbox = box.astype(int) # Convert numbers into integer\n\ncv2.drawContours(frame, [box], 0, (0, 255, 255), 2)\n# draw the box in yellow",
      language: "Python",
      titre: "Hand bounding box",
      description:
        "Using an oriented bounding box as a local reference to resolve rotation-related coordinate issues.",
      categorie: "solution",
      position: "0",
    },
    {
      code: "paume = lmListLocale[5][1] < lmListLocale[17][1] \n\nif paume:\n   couleur_point = (0, 255, 0) \nelse:\n   couleur_point = (0, 0, 255)",
      language: "Python",
      titre: "The color points",
      description:
        "By comparing finger coordinates (index and pinky), I stored the result in a variable used as a condition to dynamically change the landmark colors.",
      categorie: "comparison",
      position: "0",
    },
    {
      code: "distance_ref = math.hypot(x9 - x0, y9 - x0) \n\nrotated_x = (tx * cos_a - ty * sin_a)\nrotated_y = tx * sin_a + ty * cos_a\n\nfinal_x = rotated_x / distance_ref\nfinal_y = rotated_y / distance_ref\n\nlmListLocale.append([id_loc, final_x, final_y])",
      language: "Python",
      titre: "Hand Scale Normalization",
      description:
        "To keep tracking stable at any distance, I use the hand's own size as a reference. I transform the original coordinates (lmList) into a fixed local scale (lmListLocale) based on the distance between the wrist and the middle finger.",
      categorie: "normalization",
      position: "0",
    },
  ],
};

const MenuImage = [
  { image: "./images/PythonAiImage/TwoHands.png", titre: "Hand from face"},
  { image: "./images/PythonAiImage/back.png", titre: "Hand from back"},
  { image: "./images/PythonAiImage/fist.png", titre: "Pause"},
  { image: "./images/PythonAiImage/play.png", titre: "Play"},
  { image: "./images/PythonAiImage/ninja.png", titre: "Previous"},
  { image: "./images/PythonAiImage/thumbnail.png", titre: "Next"},
  { image: "./images/PythonAiImage/sound.png", titre: "Volume"},
];

function PythonAi({}) {
  return (
    <>
      <PageDevProject datapage={DataForPage} />

      <div className="pb-20 pt-15">
        <h2 className="text-center text-white text-3xl font-black uppercase tracking-tighter mb-10">
          movement preview
        </h2>
        <ContinuousCarousel data={MenuImage} />
      </div>
    </>
  );
}
export default PythonAi;
