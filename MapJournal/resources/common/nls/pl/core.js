﻿define(
	({
		commonCore: {
			common: {
				add: "Dodaj",
				edit: "Edytuj",
				save: "Zapisz",
				next: "Dalej",
				cancel: "Anuluj",
				back: "Wstecz",
				apply: "Zastosuj",
				close: "Zamknij",
				open: "Otwórz",
				start: "Początek",
				loading: "Wczytywanie",
				disabledAdmin: "Opcja ta została wyłączona przez Administratora",
				width: "Szerokość",
				height: "Wysokość"
			},
			inlineFieldEdit: {
				editMe: "Przeprowadź edycję"
			},
			builderPanel: {
				panelHeader: "Kreator szablonu %TPL_NAME%",
				buttonSaving: "Zapisywanie",
				buttonSaved: "Zapisane",
				buttonShare: "Udostępnij",
				buttonSettings: "Ustawienia",
				buttonHelp: "Pomoc",
				buttonPreview: "Wyświetl dane dynamiczne",
				tooltipFirstSave: "Z tej funkcji można skorzystać dopiero po zapisaniu aplikacji.",
				tooltipNotShared: "Z tej funkcji można skorzystać dopiero po udostępnieniu aplikacji.",
				noPendingChange: "Brak oczekujących zmian",
				unSavedChangePlural: "Oczekujące zmiany",
				closeWithPendingChange: "Czy na pewno chcesz potwierdzić tę czynność? Zmiany zostaną utracone.",
				saveError: "Zapisywanie nie powiodło się, spróbuj ponownie",
				shareStatus1: "Aplikacja nie została jeszcze zapisana.",
				shareStatus2: "Aplikacja jest udostępniania publicznie",
				shareStatus3: "Aplikacja jest udostępniana w obrębie tej instytucji",
				shareStatus4: "Aplikacja nie jest udostępniana"
			},
			share: {
				firstSaveTitle: "Aplikacja zapisana pomyślnie",
				firstSaveHeader: "Aplikacja została zapisana w portalu %PORTAL%, jednak nie została jeszcze udostępniona.",
				firstSavePreview: "Ogólnie",
				firstSaveShare: "Udostępnij",
				firstSaveA1: "Jeżeli nie znasz jeszcze portalu %PORTAL% lub chcesz szybko uzyskać dostęp do interfejsu kreatora, możesz zapisać następujące łącze: %LINK1%",
				firstSaveA1bis: "Aplikację można również znaleźć w Twoim <a href='%LINK2%' target='_blank'>folderze zasobów w portalu %PORTAL%</a>.",
				shareTitle: "Udostępnij swoją aplikację",
				sharePrivateHeader: "Aplikacja nie jest udostępniona, czy chcesz ją udostępnić?",
				sharePrivateBtn1: "Udostępnij publicznie",
				sharePrivateBtn2: "Udostępnij mojej instytucji",
				sharePrivateWarning: "Udostępnianie %WITH% zostało wyłączone, ponieważ nie jesteś właścicielem <a href='%LINK%' target='_blank'>mapy internetowej</a>.",
				sharePrivateWarningWith1: "publicznie",
				sharePrivateWarningWith2: "publicznie i instytucji",
				sharePrivateProgress: "Trwa udostępnianie...",
				sharePrivateErr: "Udostępnianie nie powiodło się. Spróbuj ponownie lub",
				sharePrivateOk: "Aktualizacja udostępniania powiodła się. Trwa wczytywanie...",
				shareHeader1: "Aplikacja jest <strong>dostępna publicznie</strong>.",
				shareHeader2: "Aplikacja jest dostępna dla członków instytucji (wymagane logowanie).",
				shareLinkCopy: "Kopiuj",
				shareLinkCopied: "Skopiowane",
				shareQ1Opt1: "Jak mogę zachować prywatny status aplikacji?",
				shareQ1Opt2: "W jaki sposób mogę zachować prywatny status aplikacji lub udostępnić ją publicznie?",
				shareA1: "Użyj przycisku %SHAREIMG% na <a href='%LINK1%' target='_blank'>stronie aplikacji</a>.",
				shareQ2bis: "W jaki sposób mogę powrócić do interfejsu kreatora?",
				shareA2div1: "Zapisz i użyj ponownie następującego łącza %LINK1% lub <a href='%LINK2%' target='_blank'>strony elementu aplikacji</a>.",
				shareA2div2: "Po zalogowaniu w portalu %PORTAL% właściciel aplikacji widzi w jej oknie przycisk umożliwiający uruchomienie kreatora:",				
				shareQ3: "Gdzie są przechowywane dane?",
				shareA3: "Dane oraz konfiguracja aplikacji %TPL_NAME% są przechowywane w <a href='%LINK2%' target='_blank'>tej aplikacji internetowej</a>. Jeżeli skorzystano z opcji importu danych z serwisu Flickr, Picasa, Facebook lub YouTube, obrazy i filmy wideo nie zostały skopiowane do portalu %PORTAL."
			},
			settings: {
				header: "Ustawienia",
				tabError: "Sprawdź, czy poszczególne karty nie zawierają błędnych danych"
			},
			settingsLayout: {
				title: "Układ",
				explain: "Jakiego układu chcesz użyć?",
				explainInit: "Zmian układu możesz dokonać w dowolnej chwili w oknie dialogowym ustawień.",
				viewExample: "Wyświetl przykład online"
			},
			settingsTheme: {
				title: "Motyw"
			},
			settingsHeader: {
				title: "Nagłówek",
				logoEsri: "Logo firmy Esri",
				logoNone: "Brak logo",
				logoCustom: "Logo niestandardowe",
				logoCustomPlaceholder: "Adres URL (maks. 250x50 pikseli)",
				logoCustomTargetPlaceholder: "łącze przekierowujące do innej strony",
				logoSocialExplain: "Dostosuj łącze w nagłówku.",
				logoSocialText: "Tekst",
				logoSocialLink: "Łącze"
			}
		}
	})

);
