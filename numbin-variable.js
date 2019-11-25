<div style="padding:0px; margin:2px 2px; width:85px; height:85px;" class="cmd #history# container-fluid tooltips cmd-widget" data-type="info" data-version="#version#" data-eqLogic_id="#eqLogic_id#" data-subtype="numeric" data-cmd_id="#id#" data-cmd_uid="#uid#">
 	<img class="background#uid#"/>
 	<img class="banner#uid#"/>
	<img class="icon#uid#" style="transform:translate(-50%,-50%);" />
	<div class="txtban#uid#"></div>
	<div class="colban#uid#"></div>
	<div class="error#uid#"/>
 
	<script>
		jeedom.cmd.update['#id#'] = function(_options){
			// Récupération de srcState
			var srcState = _options.display_value;	// Valeur de l'info numérique

			// Récupération des valeurs des paramètres du widget
 			var fldIcon = ('#folder#'!='#'+'folder#') ? '#folder#' : "";
													// Dossier de l'image à superposer (obligatoire)
 			var srcIcon = ('#icon#'!='#'+'icon#') ? '#icon#' : "";
													// Image à superposer (obligatoire)
			var srcTxtBanOn = ('#txtbanon#'!='#'+'txtbanon#') ? '#txtbanon#': "";
													// Texte du bandeau ON (obligatoire)
			var srcTxtBanOff = ('#txtbanoff#'!='#'+'txtbanoff#') ? '#txtbanoff#': "";
													// Texte du bandeau OFF (obligatoire)
			var srcColBanOn = ('#colbanon#'!='#'+'colbanon#') ? '#colbanon#': "";
													// Couleur du bandeau ON (obligatoire)
			var srcColBanOff = ('#colbanoff#'!='#'+'colbanoff#') ? '#colbanoff#': "";
													// Couleur du bandeau OFF (obligatoire)
			var srcTheme = ('#theme#'!='#'+'theme#') ? '#theme#': "";
													// Thème du background s'il y a lieu (optionnel)

			var fldBkg = 'data/customTemplates/dashboard/cmd.action.other.Multi-action-Defaut/fond/';
													// Dossier des images de background
			var srcMode = "light"					// Mode du background (dark ou light)
			var srcColBanner = "";					// Couleur du bandeau
			var srcValBanner = ""					// Texte du bandeau
			var srcTxtBanner = "black"				// Couleur des caractères du bandeau
			var srcMode = "light";					// Mode du background (dark ou light)
			var srcErrorCode = "";					// Nom du paramètre en erreur s'il y a lieu
			var	srcTemp = 0;						// Variable temporaire
		
			// Validation des paramètres
			} else if (fldIcon == null || fldIcon == "") {
				srcErrorCode = "folder";
			} else if (srcIcon == null || srcIcon == "") {
				srcErrorCode = "icon";
			} else if (srcTxtBanOn == null || srcTxtBanOn == "" ) {
				srcErrorCode = "txtbanon";
			} else if (srcColBanOn == null || srcColBanOn == "" ) {
				srcErrorCode = "colbanon";
			} else if (srcTxtBanOff == null || srcTxtBanOff == "" ) {
				srcErrorCode = "txtbanoff";
			} else if (srcColBanOff == null || srcColBanOff == "" ) {
				srcErrorCode = "colbanoff";
			}
			

			if (srcErrorCode != "") {
				srcIcon = "error";
			} else {
				// Initialisation du nom du dossier des images
				fldIcon = 'data/customTemplates/dashboard/cmd.action.other.Multi-action-Defaut/' + fldIcon + '/';

				// Initialisation de la couleur du bandeau
				if (srcState == 0) {
					srcColBanner = srcColBanOff;
					srcValBanner = srcTxtBanOff; 
				} else {
					srcValBanner = srcColBanOn;
					srcValBanner = srcTxtBanOn; 
				}
	
				// Calcul de la couleur des caractères de la valeur de la commande et du bandeau
				switch (srcValBanner) {
					case "aqua":
						srcTxtBanner = "black"
						break;
					case "blue":
						srcTxtBanner = "white"
						break;
					case "lime":
						srcTxtBanner = "white"
						break;
					case "yellow":
						srcTxtBanner = "black"
						break;
					case "lightsalmon":
						srcTxtBanner = "black"
						break;
					case "orange":
						srcTxtBanner = "black"
						break;
					case "darkorange":
						srcTxtBanner = "white"
						break;
					case "red":
						srcTxtBanner = "white"
						break;
					case "darkred":
						srcTxtBanner = "white"
						break;
					case "black":
						srcTxtBanner = "white"
						break;
					case "gray":
						srcTxtBanner = "white"
						break;
					defaut:
						srcErrorCode = "? colban ?";
						break;
				}
			}
			
			// Sélection du mode clair ou sombre
			if ($('body')[0].hasAttribute('data-theme')) {
				if ($('body').attr('data-theme').endsWith('Light')) {
					srcMode = "light";
				} else {
					srcMode = "dark";
				}
			}

			if (srcErrorCode != "") {
				// Affichage des éléments d'erreur
				$('.background#uid#').empty().attr('src', fldBkg + 'fo_oups1.png');
				$('.banner#uid#').empty().attr('src', fldBkg + 'fo_banner_red.png');
				$('.icon#uid#').hide();
				$('.error#uid#').css('color','white');
				$('.error#uid#').empty().text(srcErrorCode);
			} else {
				// Affichage des textes
				$('.txtban#uid#').css('color',srcTxtBanner);
				$('.txtban#id#').empty().text(srcValBanner);
				
				//Affichage du background, du bandeau et du nom de la commande
				if (srcTheme != "") {
					srcTheme = srcTheme + '_';
				}
				
				$('.background#uid#').empty().attr("src", fldBkg + 'fo_bkg_' + srcTheme + srcMode + '.png');
				$('.banner#uid#').empty().attr("src", fldBkg + 'fo_banner_' + srcValBanner + '.png');
				$('.icon#uid#').empty().attr('src', fldIcon + srcIcon + srcIconID + '.png');
			}

			$('.cmd[data-cmd_uid=#uid#]').attr('title','Valeur du '+_options.valueDate+', collectée le '+_options.collectDate);
		}
		jeedom.cmd.update['#id#']({display_value:'#state#',valueDate:'#valueDate#',collectDate:'#collectDate#',alertLevel:'#alertLevel#'});
	</script>

	<style>
		div.txtban#uid# {
			font-size:1em;
			font-weight:bold;
			position:absolute;
			vertical-align:middle;
			top:82%;
			left:0%;
			width:85px;
			height:85px;
			z-index:4;
		}
		div.error#uid# {
			font-size:1em;
			font-weight:bold;
			position:absolute;
			vertical-align:middle;
			top:82%;
			left:0%;
			width:85px;
			height:85px;
			z-index:4;
		}		
		div.value#uid# {
			font-size:1.2em;
			font-weight:bold;
			position:absolute;
			vertical-align:middle;
			top:2%;
			width:85px;
			height:85px;
			z-index:4;
			letter-spacing:0px;
		}
		img.background#uid# {
			position:absolute;
			top:0%;
			left:0%;
			width:85px;
			height:85px;
			z-index:1;
		}
		img.banner#uid# {
			position:absolute;
			top:0%;
			left:0%;
			width:85px;
			height:85px;
			z-index:2;
		}
		img.icon#uid# {
			position:absolute;
			margin:0;
			top:47%;
			left:52%;
			max-height:50px;
			max-width:50px;
			z-index:2;
		}
	</style>
</div>
