# numbin-variable
Widget pour info numériques binaire complétement paramétrable.

Il permet l’affichage d’info numérique binaire avec fond, image d'équipement, bandeau d'état et texte du bandeau d'état paramétrables.
En option, il est également possible d'affecter des images ON/OFF aux équipements, de choisir les couleurs d'état des bandeaux, leur texte et la couleur de celui-ci, de faire clignoter les bandeaux afin de souligner un état remarquable et de choisir l'image de fond de la vignette.

L’installation préalable du widget Multi-action-Defaut de @JAG est un prérequis.

Les couleurs de bandeau d'état de bas de vignette se déteminent en utilisant les codes couleurs standard HTML, soit sous la forme "#xxxxxx", soit sous la forme "red" (par exemple pour rouge).

Les images de fond, standards ou optionnels, doivent se trouver dans le répertoire “data/customTemplates/dashboard/cmd.action.other.Multi-action-Defaut/fond”. Les images superposées doivent se trouver dans le répertoire “data/customTemplates/dashboard/cmd.action.other.Multi-action-Defaut/” auquel il convient d’ajouter le nom du dossier spécifique de l'équipement. 
Si les images requises ne s’y trouvent pas, vous devrez les transférer par Jeexplorer.

Ce widget bascule automatiquement du thème sombre au clair et adapte le fond du widget en conséquence.

Voici les paramètres à prendre en compte pour l’utilisation de ce widget.

* folder: (obligatoire), nom du dossier de l’image (vent, eau, …).
* icon: (obligatoire), nom de l’image en .png sans suffixe. Pour "image.png" noter "image".
* colbanon: (optionnel) - Défaut "lime" - Couleur du bandeau pour l'état ON
* colbanoff: (optionnel) - Défaut "red" - Couleur du bandeau pour l'état OFF.
* txtbanon: (optionnel) - Défaut "ON" - Texte du bandeau pour l'état ON.
* txtbanoff: (optionnel) - Défaut "OFF" - Texte du bandeau pour l'état OFF.
* coltxtbanon: (optionnel) - Défaut "black" - Texte du bandeau pour l'état ON.
* coltxtbanoff: (optionnel) - Défaut "black" - Texte du bandeau pour l'état OFF.
* onoff: (optionnel) - Défaut "yes" - Indique si l'état différencie l'affichage d'équipements. Si oui, les images s'appelleront "image_on.png/image_off.png", le nom passé dans icon restant "image".
* blinkon: (optionnel) - Défaut "no" - Permet au bandeau de bas de vignette clignote pour l'état ON.
* blinkoff: (optionnel) - Défaut "no" - Permet au bandeau de bas de vignette clignote pour l'état OFF.
* theme: (optionnel) - Défaut "thème standard" - Nom du thème de fond à afficher. Les fichiers de fond devront alors s’appeler fo_bkg_nom_dark.png et fo_bkg_nom_light.png.

Si l’un des paramètres obligatoires est erroné, le widget vous indiquera celui à corriger, sauf si vous n'avez pas créé ou choisi les bonnes images, dans ce cas, vous verrez une image vide.

Avec ces paramètres:

![Capture](https://user-images.githubusercontent.com/54777712/70778895-a2f35a00-1d83-11ea-95e2-296612c416bc.PNG)

Voici le résultat:

![numbin](https://user-images.githubusercontent.com/54777712/70778921-af77b280-1d83-11ea-8a6b-37bb85068291.gif)
