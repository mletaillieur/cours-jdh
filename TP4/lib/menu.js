/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var pagesDisponibles = new Array(
        ["Accueil", "index.htm", "Bienvenue sur " + projet["nom"]],
        ["Recherche", "recherche.htm", "Votre recherche de BD"],
        ["Commande", "commande.htm", "Votre panier"]
        );

function affichePageMenu(nom_page)
{
    menuHtml = "<div id='menu'><ul>";
    for (i = 0; i < pagesDisponibles.length; i++) 
    {
        menuHtml += "<li><a href=\""+ pagesDisponibles[i][1] + "\">"+ pagesDisponibles [i][0] + "</a></li>";
    }
    menuHtml += "</ul>";
    document.write(menuHtml);
}
