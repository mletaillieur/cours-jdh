
/* 
 * Dans le fichier lib/affiche.js
 - créer un tableau "projet" avec 3 clefs décrivant les informations suivantes:
 ["nom"]    = "BDPhilia";
 ["auteur"] = "votre nom";
 //["copy"]   = "&copy; 2009 votre entreprise";
 */
projet = new Array();
projet["Nom"] = "BDPhilia";
projet["auteur"] = "Moi";
projet["copy"] = "&copy; 2009 Entreprise";

function affichePageBandeauHaut(){
    affiche_bandeau="<div id='bandeau'></div>";
    document.write(affiche_bandeau);
}