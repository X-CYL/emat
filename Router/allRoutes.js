import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/but", "Présentation", "/pages/but.html"),
  new Route("/connexion", "Connexion", "/pages/connexion.html"),
  new Route("/interface", "Interface appli", "/pages/interface.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "emat-documentation";
