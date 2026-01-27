import Page3DProject from "../../components/ProjectCardPage3D.jsx";

const Project1 = {
  titre: "testTitre",
  AppUsed: ["Blender", "Unreal"],
  sousTitre: "test du sous titre",
  imagePrincipal: "../images/0001.png",
  projectDescription: "Description Du projet",
  texte1: "texte de la box1",
  details: "les details lié a ce projet",
  texte2: "texte de la box2",
  but: "le but de ce projet",
  texte3: "texte de la box3",
  titre2: "titre des explications du projet",
  HugeCardData: [
    {
      titre: "Project 1",
      description: "lfioshfsudghsuifgishi usdfuih uihsfdhifhsidhihf fej",
      image: "../images/0001.png",
      categorie: "dev",
    },
    {
      titre: "Project 2",
      description: "lfioshfsudghsuifgishi usdfuih uihsfdhifhsidhihf fej",
      image: "../images/0001.png",
      categorie: "dev",
    },
     {
      titre: "Project 2",
      description: "lfioshfsudghsuifgishi usdfuih uihsfdhifhsidhihf fej",
      image: "../images/0001.png",
      categorie: "dev",
    },
  ],
};

function PageProjectTest({ setPage }) {
  return <Page3DProject setPage={setPage} datapage={Project1} />;
}
export default PageProjectTest;
