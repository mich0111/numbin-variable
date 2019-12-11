# numbin-variable
Widget pour info numériques binaire complétement paramétrable.

Il permet l’affichage d’info numérique binaire avec fond, image d'équipement, bandeau d'état et texte du bandeau d'état paramétrables.
En option, il est également possible d'affecter des images ON/OFF aux équipements, de faire clignoter les bandeaux d'état fin de souligner un état remarquable et de choisir l'image de fond de la vignette.

L’installation préalable du widget Multi-action-Defaut de @JAG est un prérequis.

Vous devez indiquer les couleurs de bandeau d'état de bas de vignette en utilisant les codes couleurs standard HTML. Soit sous la forme "#xxxxxx", soit sous la forme "red" (par exemple pour rouge).

Les images de fond, standards ou optionnels, doivent se trouver dans le répertoire “data/customTemplates/dashboard/cmd.action.other.Multi-action-Defaut/fond”. Les images superposées doivent se trouver dans le répertoire “data/customTemplates/dashboard/cmd.action.other.Multi-action-Defaut/” auquel il convient d’ajouter le nom du dossier spécifique de l'équipement. 
Si les images requises ne s’y trouvent pas, vous devrez les transférer par Jeexplorer.

Ce widget bascule automatiquement du thème sombre au clair et adapte le fond du widget en conséquence.

Voici les paramètres à prendre en compte pour l’utilisation de ce widget.

* folder: (obligatoire), nom du dossier de l’image (vent, eau, …).
* icon: (obligatoire), nom de l’image en .png sans suffixe. Pour "image.png" noter "image".
* colbanon: (obligatoire), couleur du bandeau pour l'état ON.
* colbanoff: (obligatoire), couleur du bandeau pour l'état OFF.
* txtbanon: (obligatoire), texte à faire figurer sur le bandeau pour l'état ON.
* txtbanoff: (obligatoire), texte à faire figurer sur le bandeau pour l'état OFF.
* onoff: (optionnel), si != "no" alors les images de l'équipement auront un état ON et OFF. Dans ce cas, les images des équipements devront s'appeler "image_on.png" et "image_off.png". En revanche, le nom de l'image passée dans icon reste "image".
* blinkon: (optionnel) , si = "yes" alors le bandeau de bas de vignette clignote si ON.
* blinkoff: (optionnel) , si = "yes" alors le bandeau de bas de vignette clignote si OFF.
* theme: (optionnel), nom du thème de fond à afficher. Les fichiers de fond devront alors s’appeler fo_bkg_nom_dark.png et fo_bkg_nom_light.png. Si le paramètre est absent ou vide, les thèmes par défaut seront affichés.

Si l’un des paramètres obligatoires est erroné, le widget vous indiquera celui à corriger, sauf si vous n'avez pas créé ou choisi les bonnes images, dans ce cas, vous verrez une image vide.

Avec le paramétrage suivant, c'est-à-dire onoff à no:

![Capture2](https://user-images.githubusercontent.com/54777712/70377268-e3318300-1912-11ea-8d54-2fff2c1646a0.PNG)

Voici le résultat:

![Capture3](https://user-images.githubusercontent.com/54777712/70377269-e3ca1980-1912-11ea-941b-fc534bb43ec6.PNG)

Et avec l'option onoff non initialisée, c'est-à-dire ces paramètres:

![Capture1](https://user-images.githubusercontent.com/54777712/70377267-e3318300-1912-11ea-9c16-0c5bff37f20e.PNG)

Voici le résultat:

![Capture](https://user-images.githubusercontent.com/54777712/70377266-e3318300-1912-11ea-82f8-2d4f2404f50d.PNG)
