﻿define(
	 ({
		viewer: {
			common: {
				close: "Sulje"
			},
			loading: {
				long: "Tarinaa alustetaan",
				long2: "Odota hetki",
				failButton: "Lataa tarina uudelleen"
			},
			signin: {
				title: "Todennus on pakollinen",
				explainViewer: "Kirjaudu sisään %PORTAL_LINK%-sivuston tilillä käyttääksesi tarinaa.",
				explainBuilder: "Kirjaudu sisään %PORTAL_LINK%-sivuston tilillä määrittääksesi tarinan."
			},
			errors: {
				boxTitle: "Tapahtui virhe",
				invalidConfig: "Virheellinen määritys",
				invalidConfigNoApp: "Web-karttasovelluksen tunnusta ei ole määritetty index.html-tiedostossa.",
				unspecifiedConfigOwner: "Valtuutettua omistajaa ei ole määritetty.",
				invalidConfigOwner: "Tarinan omistajalla ei ole valtuuksia.",
				createMap: "Karttaa ei voi luoda",
				invalidApp: "Kohdetta %TPL_NAME% ei ole, tai se ei ole käytettävissä.",
				appLoadingFail: "Tapahtui virhe, eikä %TPL_NAME% latautunut oikein.",
				notConfiguredDesktop: "Tarinaa ei ole vielä määritetty.",
				notConfiguredMobile: "Nykyinen näyttökoko ei tue kohteen %TPL_NAME% luontitoimintoa.",
				notAuthorized: "Sinulla ei ole tämän tarinan käyttöoikeuksia",
				noBuilderIE: "Luontitoimintoa ei tueta Internet Explorerin versiota %VERSION% edeltävissä versioissa. %UPGRADE%",
				noViewerIE: "Tarinaa ei tueta Internet Explorerin versiota %VERSION% edeltävissä versioissa. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Päivitä selain</a>.",
				mapLoadingFail: "Tapahtui virhe, eikä kartta latautunut oikein.",
				signOut: "Kirjaudu ulos"
			},
			mobileInfo: {
				legend: "Selite",
				description: "Kuvaus",
				lblLegendMobileError: "Selite ei ole käytettävissä. Lataa tarina uudelleen.",
				lblLegendMobileErrorExplain: "Selite ei ole käytettävissä, kun laitetta kierretään pystysuuntaan tarinan latauksen jälkeen."
			},
			mobileFooter: {
				swipeInvite: "Siirry tarinassa pyyhkäisemällä",
				lblNext: "Seuraava",
				lblEnd: "Olet saavuttanut tarinan lopun"
			},
			headerFromCommon: {
				storymapsText: "Tarinakartta",
				builderButton: "Muokkaa",
				facebookTooltip: "Jaa Facebookissa",
				twitterTooltip: "Jaa Twitterissä",
				bitlyTooltip: "Hanki lyhyt linkki",
				templateTitle: "Määritä mallin nimi",
				templateSubtitle: "Määritä mallin alaotsikko",
				share: "Jaa",
				checking: "Tarkistetaan tarinan sisältöä",
				fix: "Korjaa tarinan ongelmat",
				noerrors: "Yhtään ongelmaa ei havaittu"
			},
			overviewFromCommon: {
				title: "Yleiskatsauskartta"
			},
			legendFromCommon: {
				title: "Selite"
			},
			shareFromCommon: {
				copy: "Kopioi",
				copied: "Kopioitu",
				open: "Avaa",
				embed: "Upota Web-sivulle",
				embedExplain: "Käytä seuraavaa HTML-koodia tarinan upottamiseen Web-sivulle.",
				size: "Koko (leveys/korkeus):"
			},
			locatorFromCommon: {
				error: "Sijainti ei ole käytettävissä"
			}
        }
    })
);