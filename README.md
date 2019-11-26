# numbin-variable
Widget pour info numériques binaire complétement paramétrable.

Il permet l’affichage d’info numérique binaire avec fond, image de l'équipement, bandeau d'état et texte du bandeau d'état paramétrables.

L’installation préalable du widget Multi-action-Defaut de @JAG est un prérequis.

Les bandeaux d'état de bas de vignette sont à choisir parmi les 11 couleurs suivantes :

* aqua
* blue
* lime
* yellow
* lightsalmon
* orange
* darkorange
* red
* darkred
* black
* gray

Les images de fond, standards ou optionnels, doivent se trouver dans le répertoire “data/customTemplates/dashboard/cmd.action.other.Multi-action-Defaut/fond”. Les images superposées doivent se trouver dans le répertoire “data/customTemplates/dashboard/cmd.action.other.Multi-action-Defaut/” auquel il convient d’ajouter le nom du dossier spécifique.
Si les images requises ne s’y trouvent pas, vous devrez les transférer par Jeexplorer.

Ce widget bascule automatiquement du thème sombre au clair et adapte le fond du widget en conséquence.

Voici les paramètres à prendre en compte pour l’utilisation de ce widget.

* folder: (obligatoire), nom du dossier de l’image (vent, eau, …).
* icon: (obligatoire), nom de l’image.
* colbanon: (obligatoire), couleur du bandeau pour l'état ON.
* colbanoff: (obligatoire), couleur du bandeau pour l'état OFF.
* txtbanon: (obligatoire), texte à faire figurer sur le bandeau pour l'état ON.
* txtbanoff: (obligatoire), texte à faire figurer sur le bandeau pour l'état OFF.
* theme: (optionnel), nom du thème de fond à afficher. Les fichiers de fond devront alors s’appeler fo_bkg_nom_dark.png et fo_bkg_nom_light.png. Si le paramètre est absent ou vide, les thèmes par défaut seront affichés.

Si l’un des paramètres est erronés, le widget vous indiquera celui à corriger.

Avec le paramétrage suivant:

![alt tag](https://user-images.githubusercontent.com/54777712/69622993-58af7080-1042-11ea-9890-f7c0ff177641.PNG)

Résultat pour OFF:

![alt tag](https://user-images.githubusercontent.com/54777712/69622995-59480700-1042-11ea-96af-f9bb7871e809.PNG)

Résultat pour ON :

![alt tag](https://user-images.githubusercontent.com/54777712/69622997-59e09d80-1042-11ea-8a0e-a6513d857174.PNG)
