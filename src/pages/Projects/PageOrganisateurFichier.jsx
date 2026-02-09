import PageDevProject from "../../components/ProjectCardPageDev";

const DataForPage = {
  titre: "File organizer",
  AppUsed: ["Python"],
  sousTitre:
    "The creation of an python script in order to quickly organize a folder",
  imagePrincipal: "./images/folder.jpg",

  details: "Project details",
  texte1:
    "Developed in 1 day, this python project was created to learn how code can have direct interaction with computer inputs.",

  projectDescription: "Project description",
  texte2:
    "This project was developed in Python 3.14 and use two mains Library to perform different task.",

  but: "The goal of the project",
  texte3:
    "The objective was to develop a script which can help me in my file and folder organization to save some time on my work on 3D software.",

  titre2: "A preview of this project content and developement",
  HugeCardData: [
    {
      code: "# the library to read the folder content \nimport os \n\n# The import to allow some action like moove a file, create a folder...\nimport shutil",
      language: "Python",
      titre: "The Import",
      description:
        "Those are the import used in this project to perfom the different task",
      categorie: "import",
      position: "1",
    },
    {
      code: "dossier_source = r'path of the folder' \n\nextensions_config = {\nModeles_3D': ['.fbx', '.obj', '.stl'],\nTextures': [.png', '.jpg', '.tga', '.exr'],\nProjets_Bender': ['.blend']\n} \n\n# list the folder content\ncontenu = os.listdir(dossier_source)",
      language: "Python",
      titre: "The Requirements",
      description: "Those variable are the requirements to begin the script",
      categorie: "Requirement",
      position: "1",
    },
    {
      code: "for dossier, liste_ext in extensions_config.items(): \n  if extension in liste_ext: \n  dossier_cible = dossier \n  break",
      language: "Python",
      titre: "File Sorting Logic",
      description:
        "This logic acts as a smart classifier: it matches the file extension against my configuration to determine the correct destination folder (dossier_cible).",
      categorie: "logic",
      position: "1",
    },
    {
      code: "chemin_dest = os.path.join(dossier_source, dossier_cible)",
      language: "Python",
      titre: "Path Construction",
      description:
        "Here we build the path for the new folder, stored in the chemin_dest variable, by merging the path of the dossier_source and the dossier_cible variable into a final path.",
      categorie: "Construction",
      position: "1",
    },
    {
      code: "os.makedirs(chemin_dest, exist_ok=True) \nshutil.move(chemin_complet, os.path.join(chemin_dest, i))",
      language: "Python",
      titre: "Folder Creation And File Movement",
      description:
        "Those lines allows in first to create a new folder if it doesn't already exist but also moove the target file in his new folder.",
      categorie: "Action",
      position: "1",
    },
  ],
};

function PythonOrganisateur({}) {
  return (
    <>
      <PageDevProject datapage={DataForPage} />
    </>
  );
}
export default PythonOrganisateur;
