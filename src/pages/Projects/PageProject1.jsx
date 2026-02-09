import { Model } from "../../components/3D_PortofolioModel.jsx";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";

function PageProjectTest({}) {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* Cette ligne active la rotation/zoom/pan */}
      {/* Position [X, Y, Z] : 4 en l'air, 4 sur le côté, 4 en profondeur */}
      <Canvas camera={{ position: [2, 3, 4], fov: 65 }}>
        {/* <OrbitControls makeDefault />{" "}  orbit control sert a pouvoir se deplacer autour de l'objet 3D*/}
        {/* Indispensable pour voir l'objet/partie lightning */}
        <ambientLight intensity={1} />
        {/* Permet de charger le modèle 3D sans bloquer l'interface sinn peut avoir un erreur
         */}
        <Suspense fallback={null}>
          {/* Ajoute des reflets réalistes/background supprimable stv ne rien avoir */}
          <Environment preset="sunset" background blur={0.1} />
          {/* Appel du composant Model */}
          <Model customColor="red" />
          {/* ------PARTIE SOL--------- */}
          {/* on utilise pi pour dire 180 degres donc -Math.PI / 2 = -90 sur l'axe X */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
            <planeGeometry args={[20, 20]} />
            <MeshReflectorMaterial
              blur={[300, 100]} // Flou du reflet
              resolution={1024} // Qualité du miroir
              mixBlur={1}
              mixStrength={40} // Intensité du reflet
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505" // Couleur du sol (très sombre pour le look showroom)
              metalness={0.5}
            />
          </mesh>
          {/* ---------PARTIE PANNEAU LUMINEUX-------- */}
          {/* group permet de regrouper ce qu'il possede pour un changement de tt ce qu'il contient d'un coup */}
          <group position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            {/* Un grand panneau blanc qui brille */}
            <mesh>
              <planeGeometry args={[10, 10]} />
              <meshStandardMaterial
                emissive="white" //la couleur
                emissiveIntensity={2} //l'intensité
                toneMapped={false} // permet de dire a react: Laisse cet objet être plus brillant que le maximum autorisé
              />
            </mesh>
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}
export default PageProjectTest;
