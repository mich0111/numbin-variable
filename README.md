# numbin-variable
Widget pour info numériques binaire complétement paramétrable.

Il permet l’affichage d’info numérique binaire avec fond, image de l'équipement, bandeau d'état et texte du bandeau d'état paramétrables.
En option, il est également possible d'affecter des images ON/OFF aux équipements.

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
* icon: (obligatoire), nom de l’image en .png sans suffixe. Pour "image.png" noté "image".
* colbanon: (obligatoire), couleur du bandeau pour l'état ON.
* colbanoff: (obligatoire), couleur du bandeau pour l'état OFF.
* txtbanon: (obligatoire), texte à faire figurer sur le bandeau pour l'état ON.
* txtbanoff: (obligatoire), texte à faire figurer sur le bandeau pour l'état OFF.
* onoff: (optionnel), si = "yes" alors les images de l'équipement auront un état on et off. Dans ce cas, les images des équipements devront s'appeler "image_on.png" et "image_off.png". En revanche, le nom de l'image passée dans icon reste "image".
* theme: (optionnel), nom du thème de fond à afficher. Les fichiers de fond devront alors s’appeler fo_bkg_nom_dark.png et fo_bkg_nom_light.png. Si le paramètre est absent ou vide, les thèmes par défaut seront affichés.

Si l’un des paramètres est erronés, le widget vous indiquera celui à corriger, sauf si vous n'avez pas créé ou choisi les bonnes images, dans ce cas, vous verrez une image vide.

Avec le paramétrage suivant, c'est-à-dire onoff à no:

https://user-images.githubusercontent.com/54777712/70377268-e3318300-1912-11ea-8d54-2fff2c1646a0.PNG

Voici le résultat:

https://user-images.githubusercontent.com/54777712/70377269-e3ca1980-1912-11ea-941b-fc534bb43ec6.PNG

Et avec l'option onoff non initialisée, c'est-à-dire ces paramètres:

https://user-images.githubusercontent.com/54777712/70377267-e3318300-1912-11ea-9c16-0c5bff37f20e.PNG

Voici le résultat:

https://user-images.githubusercontent.com/54777712/70377266-e3318300-1912-11ea-82f8-2d4f2404f50d.PNG
