/* ============================================================
   Choix "Autre" : dans chaque liste ou groupe de choix d'un
   formulaire, on ajoute l'option "Autre". Quand elle est choisie,
   un champ texte apparaît ; ce qui est écrit devient la valeur
   envoyée (WhatsApp ou avis publié).
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  function creerChamp(parent) {
    var champ = document.createElement("input");
    champ.type = "text";
    champ.hidden = true;
    champ.className = "autre-champ";
    champ.placeholder = "Écrivez ici votre choix";
    champ.setAttribute("aria-label", "Précisez votre choix");
    parent.appendChild(champ);
    return champ;
  }

  // Affiche ou cache le champ ; il est obligatoire seulement quand il est visible
  function afficher(champ, actif, choixAutre) {
    champ.hidden = !actif;
    champ.required = actif;
    if (actif) {
      champ.focus();
    } else {
      champ.value = "";
      choixAutre.value = "Autre";
    }
  }

  // 1. Listes déroulantes (<select>)
  document.querySelectorAll("form select").forEach(function (liste) {
    var optionAutre = Array.from(liste.options).find(function (o) {
      return /^Autre/.test(o.text);
    });
    if (!optionAutre) {
      optionAutre = new Option("Autre (je précise)", "Autre");
      liste.add(optionAutre);
    }
    var champ = creerChamp(liste.parentNode);

    liste.addEventListener("change", function () {
      afficher(champ, liste.selectedOptions[0] === optionAutre, optionAutre);
    });
    champ.addEventListener("input", function () {
      optionAutre.value = champ.value.trim() || "Autre";
    });
    liste.form.addEventListener("reset", function () {
      afficher(champ, false, optionAutre);
    });
  });

  // 2. Boutons à choisir (âge, moment de la journée)
  document.querySelectorAll(".chip-group, .slot-group").forEach(function (groupe) {
    var modele = groupe.querySelector(".chip, .slot");
    var nom = modele.querySelector("input").name;
    var identifiant = nom + "-autre";

    var item = modele.cloneNode(true);
    var radioAutre = item.querySelector("input");
    var etiquette = item.querySelector("label");
    radioAutre.id = identifiant;
    radioAutre.value = "Autre";
    radioAutre.checked = false;
    etiquette.setAttribute("for", identifiant);
    etiquette.textContent = "Autre";
    groupe.appendChild(item);

    var champ = creerChamp(groupe.parentNode);
    groupe
      .closest("form")
      .querySelectorAll('input[name="' + nom + '"]')
      .forEach(function (radio) {
        radio.addEventListener("change", function () {
          afficher(champ, radioAutre.checked, radioAutre);
        });
      });
    champ.addEventListener("input", function () {
      radioAutre.value = champ.value.trim() || "Autre";
    });
    groupe.closest("form").addEventListener("reset", function () {
      afficher(champ, false, radioAutre);
    });
  });
});
