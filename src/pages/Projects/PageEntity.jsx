import Page3DProject from "../../components/ProjectCardPage3D.jsx";
import BoxCarousel from "../../components/CarrouselArrow.jsx";

const DataForPage = {
  titre: "The soul of the entity",
  AppUsed: ["Unreal Engine", "Blender"],
  sousTitre:
    "An handmade project on the halloween theme in order to learn blender and insert this knowledge into the game ",
  imagePrincipal: "./images/EntityImage/Mainmenu.png",

  details: "Project details",
  texte1:
    "Born from a one-week development marathon, this project explores the boundaries of atmospheric horror. As a survivor trapped in a nightmare forest, you must locate the 6 pieces of an entity's soul to escape this place.On days you can navigate without fear on this forest but on nights, silence is your only ally: move carefully through the shadows, for the entity is always listening, and every sound could be your last...",

  projectDescription: "Project description",
  texte2:
    "A complete end-to-end solo production. From initial 3D modeling and environment design to core system architecture, every asset and line of code was handcrafted within a rigorous 7-day development sprint.",

  but: "The goal of the game",
  texte3:
    "The mission: Find the 6 shards on the map and escape by the main gate before the entity catch you...",

  titre2: "A preview of this game content and developement",
  HugeCardData: [
    {
      titre: "Volumetric Shadows",
      description:
        "Advanced volumetric fog and shadow systems implemented to enhance the spooky atmosphere while maintaining high performance.",
      image: "./images/EntityImage/doorCloseLantern.png",
      categorie: "feature",
      position: "0",
    },
    {
      titre: "The Magic Lantern",
      description:
        "You can right click in order to use your magic lantern. While active, the lantern manage to open doors but also scare away the entity.",
      image: "./images/EntityImage/DoorOpenlantern.png",
      categorie: "feature",
      position: "1",
    },
    {
      titre: "On Day",
      description: "What the game look like on day",
      image: "./images/EntityImage/lightOn.png",
      categorie: "Preview",
      position: "0",
    },
    {
      titre: "On Night",
      description: "What the game look like on night",
      image: "./images/EntityImage/LightOFF.png",
      categorie: "Preview",
      position: "1",
    },
  ],
};

const projectScreenshots = [
  "./images/EntityImage/farm.png",
  "./images/EntityImage/autel.png",
  "./images/EntityImage/church.png",
  "./images/EntityImage/grave.png",
  "./images/EntityImage/Pumpkin Area.png",
  "./images/EntityImage/camping.png",
  "./images/EntityImage/DoorClose.png",
];

function EntityPage({ setPage }) {
  return (
    <>
      <Page3DProject setPage={setPage} datapage={DataForPage} />

      <div className="pb-20 pt-15">
        <h2 className="text-center text-white text-3xl font-black uppercase tracking-tighter mb-10">
          Map preview
        </h2>
        <BoxCarousel images={projectScreenshots} />
      </div>
    </>
  );
}
export default EntityPage;
