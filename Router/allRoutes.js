import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
             ("/but", "Présentation","/pages/but.html"),
             ("/connexion", "Connexion","/pages/connexion.html"),
             ("/pages/interface", "Interface appli","/pages/interface.html")];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "emat-documentation";