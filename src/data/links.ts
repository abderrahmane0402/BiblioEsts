export const Links = new Map();
//showDocs
Links.set("/livre", "/addDocs/livre");
Links.set("/pfe", "/addDocs/pfe");
Links.set("/etudiant", "/addDocs/etudiant");
Links.set("/prof", "/addDocs/prof");
Links.set("/utilisateur", "/addDocs/utilisateur");
Links.set("/fournisseur", "/addDocs/fournisseur");
Links.set("/approvisionnement", "/addDocs/approvis");
Links.set("/categorie", "/addDocs/categorie");
Links.set("/exemplaire", "/addDocs/exemplaire");
Links.set(
  "/emprunt/etudiant/livre/encours",
  "/addDocs/emprunt/etudiant/livre"
);
Links.set(
  "/emprunt/etudiant/livre/historique",
  "/addDocs/emprunt/etudiant/livre"
);
Links.set("/emprunt/etudiant/pfe/encours", "/addDocs/emprunt/etudiant/pfe");
Links.set(
  "/emprunt/etudiant/pfe/historique",
  "/addDocs/emprunt/etudiant/pfe"
);
Links.set("/emprunt/prof/livre/encours", "/addDocs/emprunt/prof/livre");
Links.set("/emprunt/prof/livre/historique", "/addDocs/emprunt/prof/livre");
Links.set("/emprunt/prof/pfe/encours", "/addDocs/emprunt/prof/pfe");
Links.set("/emprunt/prof/pfe/historique", "/addDocs/emprunt/prof/pfe");
