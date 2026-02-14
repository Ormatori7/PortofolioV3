// ce fichier decrit la forme de mon sac de donnéess de supabase, c'est à dire les types de données que je vais recevoir de ma base de données Supabase.

//c'est la notice du meuble qui explique comment il est construit

//permet a mon pc de voir mes données (exmples de personne aveugle en jsx et non aveugle avec tsx) pour :
//-eviter les erreurs de frappe dans le code
// suggérer automatiquement le nom des colonnes de supabase quand je veux les utiliser dans mon code

//metaphore du douanier d'un point A vers le client en passant par la douanne

//------PARTIE EN TETE-------
// On utilise "export" pour que ce plan soit utilisable dans les autres fichiers
//l'export de Project me permet de verifier les données de l'en tete de mes projets sont comformes a la database
export interface Project {
  id: number;
  titre: string;
  AppUsed: string[]; // Les crochets [] indiquent une liste (un tableau)
  sousTitre: string;
  imagePrincipal: string;
  details: string;
  texte1: string;
}

//------PARTIE 3D-------

//pareil avec la partie des cartes 3D
export interface Card3D {
  id: number;
  project_ID: number;
  image: string;
  titre: string;
  description: string;
  categorie: string;
  position: string;
}

//pareil pour le carrousel que ce soit Auto ou non (auto ou map)
export interface GalleryItem {
  id: number;
  image: string;
  // On précise les deux seuls textes autorisés pour éviter les erreurs
  type: "auto" | "map";
  project_ID: number;
  position: string;
}

//permet de rassembler ttes les données en un et qui est enfant de Project
//on ajoute les données qu'on veut et pas celle de Project car l'interface en elle mme est basé sur project et contient deja tt ses elements
// on stock les notices dans les variables
export interface AllData3D extends Project {
  HugeCardData: Card3D[]; //ajoute a liste des cartes
  GalleryFullData: GalleryItem[]; // on ajoute la liste des images
  // ? est pour lui dire que c'est optionnel(pour les pages qui ne l'ont pas)
  GalleryUrlList?: string[]; // On garde un tableau de chaînes de caractères pour les URLs des images de la carte
}

//------PARTIE DEV-------

export interface cardDev {
  id: number;
  code: string;
  language: string;
  titre: string;
  description: string;
  categorie: string;
  position: string;
}

export interface AllDataDev extends Project {
  HugeCardData: cardDev[]; //ajoute a liste des cartes
  GalleryData?: GalleryItem[]; // on ajoute la liste des images
}
