import { ReactorModel } from "../../components/Reactor";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import PageDevProject from "../../components/ProjectCardPageDev";
import { supabase } from "../../supabaseClient.ts";
import { useState, useEffect } from "react";

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
  const [dataForPage, setDataForPage] = useState(null);
  useEffect(() => {
    const chargementDonnes = async () => {
      const { data: projectInfo, error: projectError } = await supabase
        .from("Project_list")
        .select("*")
        .eq("id", 5)
        .single();

      const { data: projectCards, error: cardsError } = await supabase
        .from("CardDev_content")
        .select("*")
        .eq("project_ID", 5)
        //pas de single car on veut tt les éléments de la page et pas juste un seul
        .order("position", { ascending: true });

      if (!projectError && !cardsError) {
        // console.log("Mes cartes reçues :", projectCards); => debugage pour voir si les cards sont bien la
        setDataForPage({
          ...projectInfo,
          HugeCardData: projectCards,
        });
      } else {
        console.error("Erreur Supabase :", projectError || cardsError);
      }
    };
    chargementDonnes();
  }, []);

  if (!dataForPage) {
    return (
      <div className="text-white text-center pt-50 pb-20">
        Chargement du projet...
      </div>
    );
  }
  return (
    <>
      <PageDevProject datapage={dataForPage} />
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
