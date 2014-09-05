﻿define(
     ({
        map: {
            error: "Kan ikke oprette kort"
        },
        onlineStatus: {
            offline: "Du arbejder offline på nuværende tidspunkt. Formularafsendelser vil blive gemt lokalt, indtil der oprettes forbindelse til serveren.",
            reconnecting: "Opretter forbindelse igen&hellip;",
            pending: "${total} ventende redigeringer sendes, når netværksforbindelsen genoprettes."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "Min organisation",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Mit indhold",
                    favoritesLabel: "Mine favoritter"
                },
                title: "Vælg webkort",
                searchTitle: "Søg",
                ok: "OK",
                cancel: "Annullér",
                placeholder: "Angiv søgeterm"
            },
            groupdlg: {
                items: {
                    organizationLabel: "Min organisation",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Mit indhold",
                    favoritesLabel: "Mine favoritter"
                },
                title: "Vælg gruppe",
                searchTitle: "Søg",
                ok: "OK",
                cancel: "Annullér",
                placeholder: "Angiv søgeterm"
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "Nordlig",
            utm_easting: "Østlig",
            utm_zone_number: "Zonenummer",
            geoFormGeneralTabText: "1. Indtast oplysninger",
            locationInformationText: "2. Vælg placering",
            submitInformationText: "3. Udfyld formularen",
            submitInstructions: "Føj disse oplysninger til kortet.",
            myLocationText: "ø_Current Location_å",
            locationDescription: "ø_Specify the location for this entry by clicking/tapping the map or by using one of the following options._å",
            addressText: "Søg",
            geographic: "ø_Lat/Lon_å",
            locationTabText: "Placering",
            locationPopupTitle: "ø_Location_å",
            submitButtonText: "ø_Submit Entry_å",
            submitButtonTextLoading: "Afsender&hellip;",
            formValidationMessageAlertText: "Følgende felter er obligatoriske:",
            selectLocation: "Vælg en ${openLink}placering${closeLink} til din afsendelse.",
            emptylatitudeAlertMessage: "Vælg en koordinat for ${openLink}breddegrad${closeLink}.",
            emptylongitudeAlertMessage: "Vælg en koordinat for ${openLink}længdegrad${closeLink}.",
            shareUserTitleMessage: "Tak for dit bidrag!",
            entrySubmitted: "ø_Your entry has been submitted to the map._å",
            shareThisForm: "ø_Share This Form_å",
            shareUserTextMessage: "ø_Tell others to contribute using the following options._å",
            addAttachmentFailedMessage: "Kan ikke tilføje vedhæftning til laget",
            addFeatureFailedMessage: "Kan ikke føje objekt til laget",
            noLayerConfiguredMessage: "Ups! Ikke noget at se her. For at starte indsamling af formularafsendelser skal du konfigurere denne GeoForm og vælge et redig\érbarr vektorlag.",
            placeholderLatitude: "Bredde (Y)",
            placeholderLongitude: "Længde (X)",
            latitude: "Breddegrad",
            longitude: "Længdegrad",
            findMyLocation: "ø_Locate Me_å",
            finding: "Lokaliserer&hellip;",
            backToTop: "Tilbage til toppen",
            addressSearchText: "Din afsendelse vil blive vist her. Du kan trække nålen til den korrekte position.",
            shareModalFormText: "Formular-link",
            close: "Luk",
            locationNotFound: "Placeringen blev ikke fundet.",
            setLocation: "ø_Set Location_å",
            find: "ø_Find address or place_å",
            attachment: "Vedhæftning",
            toggleDropdown: "Skift rullemenu",
            invalidLatLong: "Angiv gyldige koordinater for ${latLink}bredde-${closeLink} og ${lngLink}længdegrad${closeLink}.",
            invalidUTM: "Angiv gyldige ${openLink}UTM${closeLink}-koordinater.",
            invalidUSNG: "Angiv gyldige ${openLink}USNG${closeLink}-koordinater.",
            invalidMGRS: "Angiv gyldige ${openLink}MGRS${closeLink}-koordinater.",
            geoformTitleText: "GeoFormular",
            domainDefaultText: "Vælg&hellip;",
            applyEditsFailedMessage: "Beklager, men din post kan ikke sendes. Prøv igen.",
            requiredFields: "Der opstod fejl. Ret dem nedenfor.",
            requiredField: "ø_(required)_å",
            error: "Fejl",
            textRangeHintMessage: "ø_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}_å",
            dateRangeHintMessage: "ø_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}_å"
        },
        builder: {
            invalidUser: "ø_Sorry, you dont have permission to view this item_å",
            invalidWebmapSelectionAlert: "ø_The selected webmap does not contain a valid layer to use. Please add an editable FeatureLayer into your webmap to continue._å",
            invalidWebmapSelectionAlert2: "ø_For More Information please refer to ${openLink}What is Feature Service?${closeLink}_å",
            selectFieldsText: "ø_Select Form Fields_å",
            selectThemeText: "ø_Select Form Theme_å",
            webmapText: "ø_Webmap_å",
            layerText: "ø_Layer_å",
            detailsText: "ø_Details_å",
            fieldsText: "ø_Fields_å",
            styleText: "ø_Style_å",
            optionText: "ø_Options_å",
            previewText: "ø_Preview_å",
            publishText: "ø_Publish_å",
            optionsApplicationText: "ø_Options_å",
            titleText: "ø_Builder_å",
            descriptionText: "ø_GeoForm is a configurable template for form-based data editing of a ${link1}Feature Service${closeLink}. This application allows users to enter data through a form instead of a map’s pop-up while leveraging the power of the ${link2}Web Map${closeLink} and editable Feature Services. Use the following steps to customize and deploy your GeoForm._å",
            btnPreviousText: "ø_Previous_å",
            btnNextText: "ø_Next_å",
            webmapTabTitleText: "ø_Select a Webmap_å",
            viewWebmap: "ø_View webmap_å",
            btnSelectWebmapText: "ø_Choose Webmap_å",
            btnSelectWebmapTextLoading: "ø_Loading&hellip;_å",
            layerTabTitleText: "ø_Select Editable Layer_å",
            selectLayerLabelText: "ø_Layer_å",
            selectLayerDefaultOptionText: "ø_Select Layer_å",
            detailsTabTitleText: "ø_Form Details_å",
            detailTitleLabelText: "ø_Title_å",
            detailLogoLabelText: "ø_Logo Image_å",
            descriptionLabelText: "ø_Help Text (optional)_å",
            fieldTabFieldHeaderText: "ø_Field_å",
            fieldTabLabelHeaderText: "ø_Label_å",
            fieldTabDisplayTypeHeaderText: "ø_Display As_å",
            selectMenuOption: "ø_Select Menu_å",
            selectRadioOption: "ø_Radio Button_å",
            selectTextOption: "ø_Text_å",
            selectCheckboxOption: "ø_Checkbox_å",
            selectMailOption: "ø_Email_å",
            selectUrlOption: "ø_URL_å",
            selectTextAreaOption: "ø_Textarea_å",
            previewApplicationText: "ø_Preview Application_å",
            saveApplicationText: "ø_Save Application_å",
            saveText: "ø_Save_å",
            toggleNavigationText: "ø_Toggle navigation_å",
            formPlaceholderText: "ø_My Form_å",
            shareBuilderInProgressTitleMessage: "ø_Publishing GeoForm_å",
            shareBuilderProgressBarMessage: "ø_Please Wait&hellip;_å",
            shareBuilderTitleMessage: "ø_Success! Item saved_å",
            shareBuilderTextMessage: "ø_You can start collecting information by sharing with others_å",
            shareModalFormText: "ø_Form Link_å",
            shareBuilderSuccess: "ø_Your GeoForm has been updated & published!_å",
            geoformTitleText: "ø_Geo Form_å",
            layerTabText: "ø_This is the layer that the GeoForm will be built from. The layer must be a feature service that is enabled for editing with sharing permissions appropriate for your audience._å",
            detailsTabText: "ø_Use the Form Detail boxes below to customize the Title, add a custom logo, and provide a short description for your GeoForm audience. In the description you can add links to other resources, contact information, and even point your audience to a web mapping application featuring all of the data collected with the GeoForm._å",
            fieldsTabText: "ø_Here you can select which fields will be visible to your GeoForm audience, edit the Labels they will see, and add a short Description to help with data entry._å",
            styleTabText: "ø_Style your GeoForm using the themes below based on your preference._å",
            publishTabText: "ø_If you are finished customizing your GeoForm, save the application and begin sharing with your audience. You can always return to this builder and continue customizing it based on feedback._å",
            smallHeader: "ø_Use Small Header_å",
            pushpinText: "ø_Push pin_å",
            doneButtonText: "ø_View Application Item_å",
            fieldTabPlaceHolderHeaderText: "ø_Hint (optional)_å",
            attachmentLabelText: "ø_Attchment Label_å",
            attachmentLabelHint: "ø_Tell users what type of file to attach._å",
            attachmentDescription: "ø_Attachment Description_å",
            attachmentHint: "ø_If necessary, you can provide additional attachment instructions here._å",
            jumbotronDescription: "ø_The Bootstrap Jumbotron makes it easy to define the purpose of your application. This can be disabled at any time._å",
            shareGeoformText: "ø_Share Geoform_å",
            shareDescription: "ø_The sharing panel makes it easy for your audience to share the GeoForm with other collaborators once they have made a submission - this can be disabled at any time._å",
            defaultMapExtent: "ø_Default Map Extent_å",
            defaultMapExtentDescription: "ø_The map will reset to the default extent in your web map after submission - this can be disabled at any time._å",
            pushpinOptionsDescription: "ø_Choose from a variety of colors for the map pushpin, it should be different from the map symbology to help the user put their submission on the map_å",
            selectLocationText: "ø_Select Location By_å",
            myLocationText: "ø_My Location_å",
            searchText: "ø_Search_å",
            coordinatesText: "ø_Latitude & Longitude Coordinates_å",
            usng: "ø_USNG Coordinates_å",
            mgrs: "ø_MGRS Coordinates_å",
            utm: "ø_UTM Coordinates_å",
            selectLocationSDescription: "ø_Allow users to select a location using these methods._å"
        }
    })
);