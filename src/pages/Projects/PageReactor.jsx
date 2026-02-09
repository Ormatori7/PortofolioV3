import { ReactorModel } from "../../components/Reactor";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import PageDevProject from "../../components/ProjectCardPageDev";

const DataForPage = {
  titre: "3D model implementation",
  AppUsed: ["React Three Fiber", "React"],
  sousTitre:
    "The implementation of a 3D model in a React application using React Three Fiber.",
  imagePrincipal: "./images/R3F_2.png",

  details: "Project details",
  texte1:
    "Developed in 1 day, this project was created to learn how code can meet 3D in the without even leaving a website",

  projectDescription: "Project description",
  texte2:
    "This project was developed in React Three Fiber wich is a React renderer for Three.js. It allows to create and manipulate 3D content in a React website using the powerfull library Three.js. ",

  but: "The goal of the project",
  texte3:
    "The main goal of this project was to learn how to implement a 3D model in a React website and to create a simple scene with lighting and reflections.",

  titre2: "A preview of this project content and developement",
  HugeCardData: [
    {
      code: "-npm install three @types/three @react-three/fiber @react-three/drei",
      language: "R3F",
      titre: "The Installation",
      description: "Those are the library needed to perfom the different task.",
      categorie: "installation",
      position: "1",
    },
    {
      code: "-npx gltfjsx public/3D_PortofolioModel.glb --transform",
      language: "R3F",
      titre: "The Compression of the 3D model",
      description:
        "This command compresses the 3D model into a format compatible with React Three Fiber which is the .jsx file. After that you can import the model as a component and use it in your scene.",
      categorie: "compression",
      position: "1",
    },
  ],
};

function ModelInPage() {
  return (
    <div className="w-[90%] max-w-[dvh] h-[600px] mx-auto my-[50px] rounded-[24px] overflow-hidden border border-[#ffe205] bg-black">
      {/* Cette ligne active la rotation/zoom/pan */}
      {/* Position [X, Y, Z] : 4 en l'air, 4 sur le côté, 4 en profondeur */}
      <Canvas camera={{ position: [3, 5, 3], fov: 65 }}>
        <OrbitControls makeDefault />{" "}
        {/* orbit control sert a pouvoir  se deplacer autour de l'objet 3D */}
        {/* Indispensable pour voir l'objet/partie lightning */}
        <ambientLight intensity={1} />
        {/* Permet de charger le modèle 3D sans bloquer l'interface sinn peut avoir un erreur*/}
        {/* permet aussi de mettre un message de chargement pendant que le modèle se charge */}
        <Suspense fallback={null}>
          {/* Ajoute des reflets réalistes/background supprimable stv ne rien avoir */}
          <Environment preset="sunset" blur={0.1} />
          {/* Appel du composant Model */}
          <ReactorModel />
          {/* ------PARTIE SOL--------- */}
          {/* on utilise pi pour dire 180 degres donc -Math.PI / 2 = -90 sur l'axe X */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
            {/* la taille du sol */}
            <planeGeometry args={[20, 20]} />
            <MeshReflectorMaterial
              blur={[300, 100]} // Flou du reflet
              resolution={1024} // Qualité du miroir
              mixBlur={1} // flou se melange au reflet original
              mixStrength={40} // Intensité du reflet
              roughness={1}
              depthScale={1.2} //couche de vernis
              minDepthThreshold={0.4} //distance minimale où le reflet commence à être net
              maxDepthThreshold={1.4} // distance à partir de laquelle le reflet s'estompe totalement
              color="#050505" // Couleur du sol
              metalness={0.5} //réaction du matériau à la lumière
            />
          </mesh>
          {/* ---------PARTIE PANNEAU LUMINEUX-------- */}
          {/* group permet de regrouper ce qu'il possede pour un changement de tt ce qu'il contient d'un coup */}
          <group position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            {/* Un grand panneau blanc qui brille */}
            <mesh>
              <planeGeometry args={[10, 10]} />
              <meshStandardMaterial
                emissive="gold" //la couleur
                emissiveIntensity={2} //l'intensité
                toneMapped={false} // permet de dire a react: Laisse cet objet être plus brillant que le maximum autorisé
              />
            </mesh>
          </group>
        </Suspense>
      </Canvas>
      {/* systeme de loading screen => un écran noir complet avec une barre de chargement*/}
      {/* se lie au suspense via le fallback */}
      <Loader
        dataInterpolation={(p) =>
          `Initialisation du système : ${p.toFixed(0)}%`
        }
        initialState={(active) => active}
      />
    </div>
  );
}

function PageForReactor() {
  return (
    <>
      <PageDevProject datapage={DataForPage} />
      <div className="pb-20 pt-15 text-center text-white">
        <h2 className="  text-3xl font-black uppercase tracking-tighter mb-10">
          A preview of the 3D model implementation
        </h2>
        <p>
          You can interact with the 3D model here, try to zoom in/out and rotate
          it to see the different details of the model.
        </p>
        <ModelInPage />
      </div>
    </>
  );
}
export default PageForReactor;
