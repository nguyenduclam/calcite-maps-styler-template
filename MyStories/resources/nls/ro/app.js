﻿define(
	 ({
		header: {
			start: "start",
			searchStories: "Căutaţi poveştile dvs...",
			filter: "Filtrare",
			sort: "Sortare",
			sortColon: "Sortare:",
			numResults: "Rezultate: {{NUM_RESULTS}}",
			sortBy: "Sortare după",
			dateModified: "Data modificării",
			title: "Titlu",
			type: "Tip",
			views: "Vizualizări",
			errors: "Erori",
			filterBy: "Filtrare după",
			filterItems: "Filtrare elemente",
			apps: "Aplicaţii",
			sharing: "Partajare",
			clearAll: "Golire toate",
			clearSearch: "Goleşte căutarea",
			logOut: "Deconectare",
			mainQuote: "Poveştile reprezintă cea mai puternică modalitate de a introduce în prezent idei în lume.",
			quoteSource: "Robert McKee",
			checkYourStories: "Verificaţi poveştile",
			createStory: "Creaţi o poveste",
			totalStories: "Total poveşti: {{NUM_STORIES}}",
			noIssues: "Totul este bine",
			userStories: "Poveşti de la {{USER_NAME}}",
			headerDisabledTooltip: "Vă rugăm aşteptaţi în timp ce rezolvăm problema...",
			notOnTouch: "Indisponibil pe dispozitive tactile",
		},
		deleteModal: {
			title: "Confirmare ştergere",
			warningText: "Sigur doriţi să ştergeţi această poveste? Nu veţi mai putea să o recuperaţi.",
			deleteText: "Ştergere",
			cancel: "Anulare"
		},
		loading: {
			loadingText: "Se încarcă poveştile dvs..."
		},
		cantFindStories: {
			whereAreStories: "Nu vedeţi povestea dvs.?",
			notSeeExplanation: "Relatările mele va enumera doar hărţile informative găzduite în ArcGIS Online create cu aplicaţiile {{STORY_MAP_TOUR}}, {{JOURNAL}}, {{MAP_SERIES}} şi {{SWIPE_SPYGLASS}}. Consultaţi {{FAQ}} pentru informaţii suplimentare.",
			faq: "Întrebări frecvente",
			followingStoriesToUpdate: "Următoarele poveşti create cu versiuni mai vechi ale aplicaţiilor noastre trebuie actualizate pentru a fi enumerate în Relatările mele:",
			gettingStories: "Se caută poveşti create cu versiuni mai vechi ale aplicaţiilor noastre, care trebuie actualizate...",
			title: "Titlu",
			typeOfStoryMap: "Tip",
			lastModified: "Ultima modificare",
			allUpToDate: "Nu există poveşti create cu versiuni mai vechi ale aplicaţiilor noastre care trebuie actualizate.",
			updateAll: "Actualizare toate",
			errorScanningForStories: "A existat o eroare la căutarea poveştilor dvs.",
			close: "Închidere",
			updates: "Actualizări",
			updatingNumberOfNumber: "Se actualizează {{CURRENT_NUMBER}} din {{TOTAL}}",
			updatingNumberOfNumberAlt: "Se actualizează {{CURRENT_NUMBER}} / {{TOTAL}}",
			updateSucceeded: "Actualizare reuşită!",
			reloadingStories: "Se reîncarcă poveştile dvs...",
			errorUpdatingStories: "A existat o eroare la actualizarea poveştilor dvs.",
			partialUpdateMessage: "Poveşti actualizate cu succes: {{NUM_UPDATED}}"
		},
		signIn: {
			signInTitle: "Autentificaţi-vă la Hărţi informative",
			signInTo: "Autentificaţi-vă la contul de ArcGIS Online existent pentru a:",
			explanationOne: "Creaţi hărţi informative detaliate pentru a relata poveşti.",
			explanationTwo: "Utilizaţi hărţile şi datele dvs. din ArcGIS Online în hărţile informative.",
			explanationThree: "Gestionaţi hărţile informative şi verificaţi starea conţinutului acestora.",
			dontHaveAccount: "Nu aveţi un cont ArcGIS Online? Înregistraţi-vă pentru un:",
			publicAccount: "Cont public necomercial",
			orgAccount: "Abonament de evaluare gratuită ArcGIS",
			timeExpired: "Autentificarea dvs. a expirat. Autentificaţi-vă din nou pentru a continua de unde aţi rămas.",
			apiDidntLoad: "Ceva nu nu se încarcă corect. Încercaţi să reîmprospătaţi pagina.",
			needAccount: "Aveţi nevoie de un cont?",
			letsGo: "Să începem!"
		},
		sharingLevel: {
			publicMessage: "Public",
			privateMessage: "Privat",
			organization: "Organizaţie",
			changedSharing: "S-a modificat nivelul de partajare.",
			unableToChange: "Imposibil de modificat nivelul de partajare.",
			partOfMap: "Acest element rezidă pe o hartă. Pentru a-i modifica nivelul de partajare, trebuie să modificaţi nivelul de partajare al hărţii.",
			storyPublicContentOrg: "Povestea este publică, de aceea conţinutul acesteia nu poate fi partajat cu organizaţia dvs.",
			storyPublicContentPrivate: "Povestea este publică, de aceea conţinutul acesteia nu poate fi privat",
			mapOrg: "Partajarea hărţii cu organizaţia ar afecta povestea",
			layerOrg: "Partajarea stratului tematic cu organizaţia ar afecta povestea",
			mapPrivate: "Dacă faceţi harta privată, povestea va fi afectată",
			layerPrivate: "Dacă faceţi stratul tematic privat, povestea va fi afectată"
		},
		collectionList: {
			advocacy: "Promovare şi deschidere",
			architecture: "Arhitectură şi design",
			conservation: "Conservare şi sustenabilitate",
			culture: "Cultură",
			destinations: "Destinaţii şi turism",
			disasters: "Dezastre şi recuperare",
			economy: "Economie şi dezvoltare",
			entertainment: "Divertisment",
			history: "Istorie",
			infrastructure: "Infrastructură",
			marketing: "Marketing",
			nature: "Natură şi mediu",
			news: "Ştiri şi evenimente",
			oceans: "Oceane",
			parks: "Parcuri şi recreere",
			people: "Oameni şi societate",
			planning: "Planificare şi analiză",
			publicArt: "Artă publică",
			science: "Ştiinţă şi tehnologie",
			sport: "Sport",
			travelogues: "Jurnale de călătorie"
		},
		types: {
			custom: "Personalizat",
			notSpecified: "Tip nespecificat"
		},
		storyMap: {
			shared: "Partajat",
			saveFailed: "Eroare la salvare",
			numViews: "Vizualizări: {{NUM_VIEWS}}",
			editStory: "Editare poveste",
			viewLive: "Vizualizare live",
			preview: "Previzualizare",
			deleteButton: "Ştergere",
			modified: "Modificat la {{DATE}}",
			summary: "Rezumat",
			loading: "Se încarcă...",
			collapse: "restrângere",
			close: "închidere",
			hide: "ascundere",
			notAvailableWhenBroken: "Povestea dvs. are problemele de mai jos",
			cantBeDeleted: "Această poveste are activată protecţia la ştergere, accesaţi pagina elementului său din ArcGIS Online pentru dezactivare",
			shareDialog: {
				title: "Partajaţi povestea cu lumea!",
				notPublicWarning: "Povestea este partajată cu organizaţia dvs. Doar membrii organizaţiei dvs. vor putea să o vizualizeze.",
				embedStory: "Încorporaţi povestea dvs.",
				shortLink: "Link scurt",
				hideHeaderBar: "Ascundeţi bara antet",
				copied: "Copiat",
				small: "mic",
				medium: "mediu",
				large: "mare",
				custom: "personalizat",
				widthAbbreviation: "l",
				heightAbbreviation: "î",
				emptyDimension: "Introduceţi o dimensiune.",
				seeExample: "Previzualizaţi încorporarea",
				removeHeader: "Ascundeţi antetul aplicaţiei"
			},
			maps: {
				unableRetrieveTitle: "Nu se pot prelua hărţi",
				unableRetrieveDescription: "Nu am putut prelua hărţi pentru această hartă informativă."
			},
			images: {
				unableRetrieveTitle: "Nu se pot prelua imagini",
				unableRetrieveDescription: "Nu am putut prelua imagini pentru această hartă informativă."
			},
			tags: {
				tags: "Etichete",
				collectionTags: "Subiect",
				selectASubject: "Selectaţi un subiect",
				save: "Salvare",
				saved: "Salvat",
				errorSaving: "Eroare la salvare",
				tagTip: "Sfat: Etichetele ajută oamenii să găsească povestea dvs. în ArcGIS Online. Cu cât sunt mai relevante, cu atât lucrările dvs. vor fi mai vizibile."
			},
			submitToGallery: {
				gallerySubmission: "Galerie de hărţi informative",
				canSubmitIf: "Puteţi nominaliza povestea dvs. în galerie dacă conţine următoarele:",
				hasOwnImage: "Miniatură personalizată",
				chosenSubject: "Un subiect şi câteva etichete",
				chosenSubjectAlt: "Un {{SUBJECT}} şi câteva etichete",
				storyMapTopicSubject: "subiect",
				sharedPublicly: "Partajat public",
				noBrokenContent: "Fără conţinut cu erori",
				nominateToGallery: "Nominalizaţi în galerie",
				comingSoon: "În curând!",
				submitted: "Trimis",
				errorSubmitting: "Eroare la trimitere",
				ourGallery: "Galeria de hărţi informative",
				galleryTip: "{{THE_GALLERY}} este un set întreţinut de hărţi informative care prezintă unele dintre cele mai bune exemple. Dacă povestea dvs. este selectată, va fi adăugată în 10 zile de la trimitere. Din cauza numărului de nominalizări, nu putem promite că povestea dvs. va fi adăugată."
			},
			placeholders: {
				noSummary: "Niciun rezumat, faceţi clic pentru a adăuga unul."
			},
			errors: {
				cantDeleteStory: "Imposibil de şters povestea.",
				unableToFind: "Imposibil de găsit conţinutul",
				unableToRetrieve: "Nu am putut prelua conţinutul pentru această hartă informativă."
			},
			socialSharing: {
				availableWhenPublic: "Această opţiune va fi disponibilă atunci când povestea dvs. devine publică."
			},
			dialog: {
				back: "Înapoi",
				close: "Închidere",
				cancel: "Anulare"
			},
			imagePicker: {
				changeDefault: "Modificaţi imaginea implicită",
				changeImage: "Schimbare miniatură",
				uploadImage: "Încărcare miniatură",
				chooseImage: "Alegere miniatură",
				chooseAnImage: "Alegere imagine",
				notInIEVersion: "Această caracteristică nu este disponibilă în Internet Explorer {{VERSION_NUMBER}}.",
				or: "Sau",
				uploadAnImage: "Încărcare imagine",
				supportedFileTypes: "Acceptă .png, .jpg, .gif",
				imageSizeMessage: "Imaginea dvs. trebuie să aibă cel puţin 286 px lăţime şi 190 px înălţime.",
				minimumDimensions: "Minimum: 286 x 190 px",
				imagesLoading: "Se încarcă imaginile…",
				noImages: "Această poveste nu are imagini",
				errorLoading: "Imposibil de preluat imaginile din această poveste",
				clickBelowTip: "Faceţi clic pe butonul de mai jos pentru a încărca o imagine.",
				dragAndDrop: "Tragere şi plasare",
				cropImage: "Decupare imagine",
				saveImage: "Salvare imagine",
				save: "Salvare",
				savingImage: "Se salvează imaginea dvs...",
				saved: "Salvată!",
				errorSaving: "Imposibil de salvat imaginea.",
				skipAndCrop: "Ignoră şi decupează pentru mine",
				wrongFormat: "Acest tip de fişier nu este suportat.",
				noCropWarning: "Această imagine nu poate fi decupată, dar puteţi să o salvaţi ca miniatură de poveste cu dimensiunile originale ({{WIDTH_PIXELS}} x {{HEIGHT_PIXELS}} px)."
			}
		},
		content: {
			media: {
				maps: "Hărţi",
				images: "Imagini",
				videos: "Videoclipuri",
				webpages: "Pagini web",
				tags: "Etichete",
				gallery: "Galerie"
			},
			headers: {
				status: "Stare",
				source: "Sursă",
				name: "Nume",
				shared: "Partajat"
			},
			component: {
				mapTour: "Număr punct",
				bullet: "Marcator",
				tab: "Filă",
				accordion: "Secţiune",
				mapJournal: "Secţiune"
			},
			titleType: {
				mapTour: "Subtitlu",
				mapJournal: "URL",
				mapSeries: "URL"
			},
			actions: {
				viewMap: "Vizualizare hartă",
				editMap: "Editare hartă",
				fix: "Fixare",
				viewLayer: "Vizualizare strat tematic"
			},
			contentType: {
				mainStage: "acţiune nivel principal",
				sidePanel: "descriere"
			},
			notification: {
				refreshExplanation: "Verificaţi povestea din nou",
				checking: "În curs de verificare...",
				foundSomeIssues: "Am descoperit câteva probleme",
				noIssuesFound: "Nu s-a găsit nicio problemă",
				storyPublic: "Povestea dvs. este acum publică",
				storyOrg: "Povestea este acum partajată cu organizaţia dvs.",
				storyPrivate: "Povestea dvs. este acum privată",
				mapPublic: "Harta dvs. este acum publică",
				mapOrg: "Harta este acum partajată cu organizaţia dvs.",
				mapPrivate: "Harta dvs. este acum privată",
				layerPublic: "Stratul dvs. tematic este acum public",
				layerOrg: "Stratul tematic este acum partajat cu organizaţia dvs.",
				layerPrivate: "Stratul dvs. tematic este acum privat",
				contentPublic: "Conţinutul dvs. este acum public",
				contentOrg: "Conţinutul este acum partajat cu organizaţia dvs.",
				contentPrivate: "Conţinutul dvs. este acum privat",
				storyAndContentPublic: "Povestea dvs. şi conţinutul acesteia sunt acum publice",
				storyAndContentOrg: "Povestea şi conţinutul acesteia sunt acum partajate cu organizaţia dvs.",
				storyAndContentPrivate: "Povestea dvs. şi conţinutul acesteia sunt acum private",
				shareBulkPrompt: "Doriţi să partajaţi conţinutul poveştii în mod corespunzător?",
				layersPublic: "Unele straturi tematice au fost, de asemenea, partajate public",
				layersOrg: "Unele straturi tematice au fost, de asemenea, partajate cu organizaţia dvs.",
				layersPrivate: "Unele straturi tematice au fost, de asemenea, făcute private",
				mapsPublic: "Unele hărţi au fost, de asemenea, partajate public",
				mapsOrg: "Unele hărţi au fost, de asemenea, partajate cu organizaţia dvs.",
				mapsPrivate: "Unele hărţi au fost, de asemenea, făcute private",
				layersAndMapsPublic: "Unele hărţi şi straturi tematice au fost, de asemenea, partajate public",
				layersAndMapsOrg: "Unele hărţi şi straturi tematice au fost, de asemenea, partajate cu organizaţia dvs.",
				layersAndMapsPrivate: "Unele hărţi şi straturi tematice au fost, de asemenea, făcute private",
				yes: "Da",
				no: "Nu",
				premiumPublicSuccess: "Conţinutul dvs. premium este acum accesibil publicului",
				subscriptionPublicSuccess: "Conţinutul abonamentului dvs. este acum accesibil publicului"
			},
			errors: {
				publicDisabled: "Partajarea cu publicul a fost dezactivată de administrator",
				noMapName: "Nu a putut fi preluat numele hărţii",
				notPublic: "NU ESTE PUBLIC",
				inaccessible: "INACCESIBIL",
				deleted: "ŞTERS",
				cantAccessVideo: "Nu se poate accesa materialul video",
				noStoriesFound: "Nu am putut găsi nicio hartă informativă în conţinutul dvs.",
				cantShowStories: "Nu s-au putut afişa hărţile informative. Încercaţi din nou mai târziu.",
				consolationSearch: "Nu am putut găsi nicio poveste.",
				notCompatibleWithBrowser : "Opţiunea Relatările mele nu este suportată în versiunile de Internet Explorer dinainte de {{VERSION_NUMBER}}.",
				pleaseUpdateBrowser: "Actualizaţi browserul.",
				searchTip: "Încercaţi să o simplificaţi puţin.",
				consolationNoStories: "Bine aţi venit la Relatările mele!",
				noStoriesTip: "Pentru a crea prima hartă informativă, consultaţi pagina destinată aplicaţiilor.",
				letsGo: "Să începem",
				cantChangeSharingLevel: "Imposibil de modificat nivelul de partajare",
				cantChangeSharingLevels: "Imposibil de modificat nivelurile de partajare",
				errorUpdatingTitle: "Eroare la actualizarea titlului",
				errorUpdatingSummary: "Eroare la actualizarea rezumatului",
				noEmptyTitle: "Titlul nu poate rămâne necompletat",
				cantUpdatePremiumContent: "Conţinutul premium nu poate fi actualizat",
				cantUpdateSubscriptionContent: "Conţinutul abonamentului nu poate fi actualizat",
				createFirstStory: "Creează Prima mea poveste"
			},
			tooltipErrors: {
				mapHasBeenDeleted: "Harta a fost ştearsă",
				layerHasBeenDeleted: "Stratul tematic a fost şters",
				mapIsInaccessible: "Harta este inaccesibilă",
				layerIsInaccessible: "Stratul tematic este inaccesibil",
				mapNotYoursNotAccessible: "Harta este deţinută de altcineva şi nu este accesibilă",
				layerServiceOkItemNot: "Stratul tematic a fost adăugat ca element care a fost şters sau este inaccesibil",
				layerNotYoursNotAccessible: "Stratul tematic este deţinut de altcineva şi nu este accesibil",
				mapOthersSharedBelowLevel: "Harta nu este deţinută de dumneavoastră şi nu este publică",
				layerOthersSharedBelowLevel: "Stratul tematic nu este deţinut de dumneavoastră şi nu este public",
				noMapNoDetails: "Fără detaliile hărţii, nu vă putem spune nimic despre straturile tematice",
				mapIsPrivate: "Harta este privată",
				mapIsOrg: "Harta este partajată doar cu organizaţia dvs.",
				layerIsPrivate: "Stratul tematic este privat",
				layerIsOrg: "Stratul tematic este partajat doar cu organizaţia dvs.",
				imageInaccessible: "Această imagine este inaccesibilă",
				videoInaccessible: "Acest video este inaccesibil",
				webpageInaccessible: "Această pagină web este inaccesibilă",
				layerSecureService: "Stratul tematic este un serviciu securizat",
				mapSecureService: "Harta este un serviciu securizat",
				layerConsumesCredits: "Stratul tematic este conţinut premium şi consumă credite",
				layerSubscriptionContent: "Stratul tematic este conţinut de abonament",
				mapConsumesCredits: "Harta este conţinut premium şi consumă credite",
				mapSubscriptionContent: "Harta este conţinut de abonament"
			},
			tooltipWarnings: {
				cantScanThisTypeAlt: "Nu putem să verificăm acest tip de strat tematic",
				cantScanThisType: "Stratul tematic nu este de un tip pe care putem să îl verificăm",
				webpageNotScanned: "Paginile web nu sunt verificate pentru a se descoperi problemele"
			},
			scanningErrors: {
				deletedMap: "Conţinut şters",
				inaccessibleMap: "Conţinut hartă inaccesibil",
				notYoursNotAccessible: "Conţinutul nu este deţinut de dvs. şi nu este public",
				serviceOkItemNot: "Straturi tematice funcţionale, dar elemente inaccesibile",
				someContentNotPublic: "Conţinutul nu este partajat public",
				someContentPrivate: "Conţinut privat",
				othersSharedBelowLevel: "Conţinutul nu este deţinut de dvs. şi nu este public",
				premiumContent: "Conţinut premium",
				subscriptionContent: "Conţinut abonament",
				secureService: "Servicii securizate",
				inaccessibleImage: "Imagini inaccesibile",
				inaccessibleVideo: "Materiale video inaccesibile",
				inaccessibleWebpage: "Pagini web inaccesibile"
			},
			scanningErrorTips: {
				deletedMapTip: "Sfat: Deschideţi harta web şi eliminaţi conţinutul cu erori sau eliminaţi harta web din poveste.",
				inaccessibleMapTip: "Sfat: Deschideţi harta web şi eliminaţi conţinutul cu erori sau eliminaţi harta web din poveste.",
				notYoursNotAccessibleTip: "Sfat: Deschideţi harta web şi eliminaţi stratul tematic sau harta din poveste.",
				serviceOkItemNotTip: "Straturile tematice au fost adăugate ca elemente care sunt inaccesibile sau au fost şterse. Straturile tematice funcţionează, dar acest lucru poate afecta harta dvs. (ferestre pop-up, simbolistică).",
				ignore: "Ignorare",
				fix: "Fixare",
				clickToShareOrg: "Faceţi clic pe buton pentru a partaja acest conţinut cu organizaţia dvs. sau modificaţi fiecare element manual făcând clic pe butoanele de partajare.",
				clickToSharePublic: "Faceţi clic pe buton pentru a partaja tot acest conţinut cu publicul sau modificaţi fiecare element manual făcând clic pe butoanele de partajare.",
				shareOrg: "Partajare cu organizaţia dvs.",
				sharePublicly: "Partajare în mod public",
				othersSharedBelowLevelTip: "Sfat: O parte din conţinutul poveştii dvs. este deţinută de {{USER_NAME}} şi este posibil ca cei care vizualizează povestea dvs. să nu o poată vedea.",
				secureServiceTip: "Sfat: Eliminaţi serviciul securizat din poveste sau urmaţi procedura descrisă {{HERE}}.",
				blogArticle: "aici",
				premiumContentTip: "Povestea dvs. are conţinut premium care va consuma {{CREDITS}} atunci când este făcută publică. Faceţi povestea publică şi continuaţi sau eliminaţi straturile tematice din povestea dvs.",
				premiumContentPublicTip: "Povestea dvs. are conţinut premium care va consuma {{CREDITS}} atunci când este disponibilă public. Asiguraţi-vă că faceţi aceste straturi tematice publice şi continuaţi sau eliminaţi straturile tematice din povestea dvs.",
				subscriptionContentTip: "Povestea dvs. are conţinut de abonament care nu este disponibil public în mod implicit. Asiguraţi-vă că doriţi să faceţi aceste straturi tematice disponibile (nu vor fi consumate credite) sau eliminaţi straturile tematice din povestea dvs.",
				agolCredits: "Credite ArcGIS Online",
				credits: "credite",
				makePublic: "Faceţi public",
				confirm: "Confirmare",
				inaccessibleImageTip: "Sfat: Furnizaţi imaginea lipsă sau eliminaţi referinţa la aceasta.",
				inaccessibleVideoTip: "Sfat: Furnizaţi materialul video lipsă sau eliminaţi referinţa la acesta.",
				inaccessibleWebpageTip: "Sfat: Furnizaţi pagina web lipsă sau eliminaţi referinţa la aceasta."
			},
			removeLayer: {
				title: "Remediere problemă strat tematic",
				layersWithIssue: "Straturi tematice cu această problemă: {{NUM_WITH_ISSUE}}",
				issueExplanation: "Stratul tematic {{LAYER_NAME}} a fost adăugat ca element care este inaccesibil sau a fost şters. Stratul tematic funcţionează, dar acest lucru poate afecta harta dvs. (ferestre pop-up, simbolistică). Nu ne dăm seama dacă elementul a fost important pentru povestea dvs.",
				issueSolution: "Pentru a remedia problema, puteţi edita harta dvs., puteţi elimina stratul tematic şi îl puteţi adăuga înapoi la hartă utilizând următoarea adresă URL:",
				editMap: "Editaţi harta dvs.",
				clickBelowWhenDone: "După ce finalizaţi editarea, faceţi clic pe butonul de mai jos:",
				rescanAndClose: "Scanaţi din nou şi închideţi"
			},
			info: {
				ownedBy: "Elementul este deţinut de {{USER_NAME}}",
				unknownUser: "altcineva",
				untitledSection: "(Secţiune fără titlu)",
				introRecord: "Introducere"
			},
			layers: {
				layersHeader: "Straturi tematice",
				noLayers: "(Niciun strat tematic)",
				basemapParens: "(hartă fundal)"
			},
			images: {
				thumbnails: "Miniaturi",
				thumbnail: "Miniatură",
				thumbnailParens: "(miniatură)"
			},
			general: {
				noTitle: "(niciun titlu)",
				loading: "Se încarcă..."
			}
		},
		infographics: {
			mapJournal: {
				firstTitle: "secţiuni",
				secondTitle: "stil",
				secondValueA: "panou lateral",
				secondValueB: "panou mobil",
				thirdTitle: "hărţi"
			},
			mapTour: {
				firstTitle: "puncte de tur",
				secondTitle: "stil",
				secondValueA: "integrat",
				secondValueB: "trei panouri",
				thirdTitle: "hartă fundal",
				thirdValueLoading: "Se încarcă...",
				thirdValueUnknown: "necunoscută"
			},
			mapSeries: {
				firstTitleA: "marcatori",
				firstTitleB: "secţiuni",
				firstTitleC: "file",
				secondTitle: "stil",
				secondValueA: "cu marcatori",
				secondValueB: "acordeon lateral",
				secondValueC: "cu file",
				thirdTitle: "hărţi"
			},
			swipeSpyglass: {
				firstTitle: "puncte de interes",
				secondTitle: "stil",
				secondValueA: "preluare",
				secondValueB: "ochean",
				thirdTitle: "hărţi"
			}
		},
		progress: {
			checkingStories: "Se verifică dacă poveştile dvs. au probleme...",
			stop: "Oprire",
			exit: "Ieşire",
			dismiss: "Închidere",
			done: "Gata.",
			noStoriesWithIssuesLower: "Nu s-a găsit nicio problemă!",
			storiesErrorFree: "Se pare că poveştile dvs. nu au probleme",
			scanAllError: "Imposibil de scanat -- nu am putut prelua una sau mai multe poveşti",
			scanProgress: "{{NUM_SCANNED}} din {{NUM_TOTAL}}",
			scanStopped: "Poveşti scanate: {{NUM_SCANNED}}, Poveşti cu probleme: {{ISSUE_STORIES}}",
			storiesWithIssues: "Poveşti cu probleme: {{NUM_STORIES}}"
		}
    })
);