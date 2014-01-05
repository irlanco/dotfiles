'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Djibouti"},
    "JM": {message: "Jamaica"},
    "AT": {message: "Austria"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Soovid Holat kasutada muudel seadmetel? (Xbox, PS, Apple TV, iPhone...). Kliki siia"},
    "SZ": {message: "Svaasimaa"},
    "YT": {message: "Mayotte"},
    "BN": {message: "Brunei"},
    "ZM": {message: "Sambia"},
    "app_desc": {message: "Kogu internet on kättesaadav! Mine blokitud lehele -> kliki Hola ikooni -> vali endale sobiv riik -> ANNA TULD!"},
    "Improve translation": {message: "Parenda tõlget"},
    "more...": {message: "veel..."},
    "PR": {message: "Puerto Rico"},
    "SH": {message: "Saint Helena"},
    "There seems to be an error": {message: "Tundub olevat viga"},
    "MA": {message: "Maroko"},
    "MT": {message: "Malta"},
    "SV": {message: "El Salvador"},
    "MP": {message: "Põhja-Mariaanid"},
    "Unblocker": {message: "Vabastaja"},
    "Access any site from any country, free": {message: "Vabastab sinu riigis blokitud veebilehed, tasuta"},
    "Try to <span>reload</span>": {message: "Proovi <span>taaslaadida</span>"},
    "UZ": {message: "Usbekistan"},
    "PW": {message: "Belau"},
    "TK": {message: "Tokelau"},
    "LR": {message: "Libeeria"},
    "TN": {message: "Tuneesia"},
    "EE": {message: "Eesti"},
    "CK": {message: "Cooki saared"},
    "BY": {message: "Valgevene"},
    "NO": {message: "Norra"},
    "KR": {message: "Lõuna-Korea"},
    "BF": {message: "Burkina Faso"},
    "AM": {message: "Armeenia"},
    "SR": {message: "Suriname"},
    "MG": {message: "Madagaskar"},
    "ON": {message: "SEES"},
    "BT": {message: "Bhutan"},
    "CF": {message: "Kesk-Aafrika Vabariik"},
    "AE": {message: "Araabia Ühendemiraadid"},
    "BA": {message: "Bosnia ja Hertsegoviina"},
    "TH": {message: "Tai"},
    "Author:": {message: "Autor:"},
    "CC": {message: "Kookossaared"},
    "NC": {message: "Uus-Kaledoonia"},
    "TO": {message: "Tonga"},
    "SE": {message: "Rootsi"},
    "AZ": {message: "Aserbaidžaan"},
    "AF": {message: "Afganistan"},
    "NG": {message: "Nigeeria"},
    "KE": {message: "Kenya"},
    "BJ": {message: "Benin"},
    "Turn on to get started": {message: "Alustamiseks lülita sisse"},
    "OM": {message: "Omaan"},
    "LK": {message: "Sri Lanka"},
    "ID": {message: "Indoneesia"},
    "FM": {message: "Mikroneesia Liiduriigid"},
    "(some Hola features are not available on your version)": {message: "(mõned Hola omadused pole selles versioonis kasutatavad)"},
    "GM": {message: "Gambia"},
    "LV": {message: "Läti"},
    "RU": {message: "Venemaa"},
    "FI": {message: "Soome"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Hangi Hola Plus, kui soovid katkematut ja reklaamivaba teenust."},
    "LU": {message: "Luksemburg"},
    "VE": {message: "Venezuela"},
    "VI": {message: "USA Neitsisaared"},
    "TV": {message: "Tuvalu"},
    "SN": {message: "Senegal"},
    "MX": {message: "Mehhiko"},
    "IL": {message: "Iisrael"},
    "GG": {message: "Guernsey"},
    "Author site:": {message: "Veebileht:"},
    "HU": {message: "Ungari"},
    "DO": {message: "Dominikaani Vabariik"},
    "OFF": {message: "VÄLJAS"},
    "KH": {message: "Kambodža"},
    "TG": {message: "Togo"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Hola ei saa kahjuks korralikult töötada, sest mingi muu laiendus pääseb puhverserverit ümber seadistama. Palun keela <a>laienduste seadistuses</a> need laiendused, mis võivad muuta puhverserveri seadistust (näiteks reklaamide blokeerijad, VPN teenused jms...)."},
    "BB": {message: "Barbados"},
    "JE": {message: "Jersey"},
    "Remove ads": {message: "Eemalda reklaamid"},
    "DK": {message: "Taani"},
    "PA": {message: "Panama"},
    "CV": {message: "Roheneemesaared"},
    "QA": {message: "Katar"},
    "Reload": {message: "Lae uuesti"},
    "GD": {message: "Grenada"},
    "Number of users that use this option": {message: "Seda valikut kasutab"},
    "MO": {message: "Aomen - Hiina erihalduspiirkond"},
    "HR": {message: "Horvaatia"},
    "CZ": {message: "Tšehhi"},
    "ST": {message: "São Tomé ja Príncipe"},
    "AU": {message: "Austraalia"},
    "IR": {message: "Iraan"},
    "CG": {message: "Kongo Vabariik"},
    "BI": {message: "Burundi"},
    "GW": {message: "Guinea-Bissau"},
    "MK": {message: "Makedoonia"},
    "GR": {message: "Kreeka"},
    "AG": {message: "Antigua ja Barbuda"},
    "AI": {message: "Anguilla"},
    "AN": {message: "Hollandi Antillid"},
    "UA": {message: "Ukraina"},
    "EH": {message: "Lääne-Sahara"},
    "KN": {message: "Saint Kitts ja Nevis"},
    "SC": {message: "Seišellid"},
    "MS": {message: "Montserrat"},
    "NL": {message: "Holland"},
    "EC": {message: "Ecuador"},
    "HK": {message: "Hongkong - Hiina erihalduspiirkond"},
    "MY": {message: "Malaisia"},
    "CR": {message: "Costa Rica"},
    "VA": {message: "Vatikan"},
    "IO": {message: "Briti India ookeani ala"},
    "SD": {message: "Sudaan"},
    "RS": {message: "Serbia"},
    "CN": {message: "Hiina"},
    "UY": {message: "Uruguay"},
    "PY": {message: "Paraguay"},
    "MU": {message: "Mauritius"},
    "CH": {message: "Šveits"},
    "LI": {message: "Liechtenstein"},
    "GH": {message: "Ghana"},
    "KG": {message: "Kõrgõzstan"},
    "NU": {message: "Niue"},
    "PE": {message: "Peruu"},
    "US": {message: "Ameerika Ühendriigid"},
    "SL": {message: "Sierra Leone"},
    "FJ": {message: "Fidži"},
    "ER": {message: "Eritrea"},
    "IQ": {message: "Iraak"},
    "AS": {message: "Ameerika Samoa"},
    "TZ": {message: "Tansaania"},
    "LY": {message: "Liibüa"},
    "GT": {message: "Guatemala"},
    "BM": {message: "Bermuda"},
    "BV": {message: "Bouvet’ saar"},
    "LT": {message: "Leedu"},
    "SG": {message: "Singapur"},
    "PM": {message: "Saint-Pierre ja Miquelon"},
    "Initializing...": {message: "Algkäivitan..."},
    "TT": {message: "Trinidad ja Tobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola ei tööta hästi Windows 8 avakuval. Palun lülitu ümber töölauale. <a>Siin</a> õpetatakse, kuidas seda teha."},
    "SY": {message: "Süüria"},
    "SK": {message: "Slovakkia"},
    "GL": {message: "Gröönimaa"},
    "PG": {message: "Paapua Uus-Guinea"},
    "KI": {message: "Kiribati"},
    "CD": {message: "Kongo DV"},
    "AO": {message: "Angola"},
    "BW": {message: "Botswana"},
    "ZW": {message: "Zimbabwe"},
    "VC": {message: "Saint Vincent ja Grenadiinid"},
    "JP": {message: "Jaapan"},
    "NA": {message: "Namiibia"},
    "TJ": {message: "Tadžikistan"},
    "LC": {message: "Saint Lucia"},
    "VU": {message: "Vanuatu"},
    "MN": {message: "Mongoolia"},
    "IT": {message: "Itaalia"},
    "RE": {message: "Réunion"},
    "WS": {message: "Samoa"},
    "Enable": {message: "Luba"},
    "Loading": {message: "Laen"},
    "EG": {message: "Egiptus"},
    "FR": {message: "Prantsusmaa"},
    "start": {message: "alusta"},
    "RW": {message: "Rwanda"},
    "BE": {message: "Belgia"},
    "UM": {message: "Ühendriikide hajasaared"},
    "Accelerator": {message: "Kiirendi"},
    "LS": {message: "Lesotho"},
    "SA": {message: "Saudi Araabia"},
    "ZA": {message: "Lõuna-Aafrika Vabariik"},
    "PT": {message: "Portugal"},
    "CA": {message: "Kanada"},
    "Starting...": {message: "Alustan..."},
    "CM": {message: "Kamerun"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "Hola tasuta versiooni peab iga 4 tunni järel taas sisse lülitama, lisaks veel on selles ka sponsorite reklaamid."},
    "Hola": {message: "Hola"},
    "NP": {message: "Nepal"},
    "PL": {message: "Poola"},
    "GA": {message: "Gabon"},
    "TM": {message: "Türkmenistan"},
    "KY": {message: "Kaimanisaared"},
    "Verify you have Internet": {message: "Kontrolli, kas sul ikka on internetiühendus"},
    "LA": {message: "Laos"},
    "PH": {message: "Filipiinid"},
    "NI": {message: "Nicaragua"},
    "GU": {message: "Guam"},
    "TF": {message: "Prantsuse Lõunaalad"},
    "KZ": {message: "Kasahstan"},
    "SJ": {message: "Svalbard ja Jan Mayen"},
    "MM": {message: "Myanmar"},
    "NR": {message: "Nauru"},
    "DM": {message: "Dominica"},
    "NE": {message: "Niger"},
    "AD": {message: "Andorra"},
    "MR": {message: "Mauritaania"},
    "changing...": {message: "muudan..."},
    "GS": {message: "Lõuna-Georgia ja Lõuna-Sandwichi saared"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Chrome versioon on liiga vana, Hola kasutamiseks palun <a>uuenda</a> Chrome"},
    "ME": {message: "Montenegro"},
    "AX": {message: "Ahvenamaa"},
    "VG": {message: "Briti Neitsisaared"},
    "VN": {message: "Vietnam"},
    "CI": {message: "Côte d'Ivoire"},
    "DZ": {message: "Alžeeria"},
    "YE": {message: "Jeemen"},
    "GE": {message: "Gruusia"},
    "CX": {message: "Jõulusaar"},
    "LB": {message: "Liibanon"},
    "FK": {message: "Falklandi saared"},
    "DE": {message: "Saksamaa"},
    "even more...": {message: "ja veel..."},
    "MV": {message: "Maldiivid"},
    "PN": {message: "Pitcairn"},
    "BH": {message: "Bahrein"},
    "GI": {message: "Gibraltar"},
    "RO": {message: "Rumeenia"},
    "WF": {message: "Wallis ja Futuna"},
    "AR": {message: "Argentina"},
    "GP": {message: "Guadeloupe"},
    "IN": {message: "India"},
    "Unblocker site list": {message: "Vabastatavad lehed"},
    "FO": {message: "Fääri saared"},
    "AW": {message: "Aruba"},
    "CS": {message: "Serbia ja Montenegro"},
    "BR": {message: "Brasiilia"},
    "HN": {message: "Honduras"},
    "MC": {message: "Monaco"},
    "Translate to your language": {message: "Tõlgi oma keelde"},
    "SB": {message: "Saalomoni Saared"},
    "PS": {message: "Palestiina ala"},
    "NZ": {message: "Uus-Meremaa"},
    "UG": {message: "Uganda"},
    "GB": {message: "Suurbritannia"},
    "HT": {message: "Haiti"},
    "GF": {message: "Prantsuse Guajaana"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Firefoxi versioon on liiga vana. Uuendada saab <a>siin</a>."},
    "ZZ": {message: "määramata"},
    "KM": {message: "Komoorid"},
    "KW": {message: "Kuveit"},
    "MQ": {message: "Martinique"},
    "TC": {message: "Turks ja Caicos"},
    "ES": {message: "Hispaania"},
    "MZ": {message: "Mosambiik"},
    "BO": {message: "Boliivia"},
    "AL": {message: "Albaania"},
    "MD": {message: "Moldova"},
    "TR": {message: "Türgi"},
    "GN": {message: "Guinea"},
    "CO": {message: "Colombia"},
    "SI": {message: "Sloveenia"},
    "Settings": {message: "Seadistus"},
    "AQ": {message: "Antarktis"},
    "JO": {message: "Jordaania"},
    "SM": {message: "San Marino"},
    "CU": {message: "Kuuba"},
    "CL": {message: "Tšiili"},
    "ML": {message: "Mali"},
    "ET": {message: "Etioopia"},
    "IS": {message: "Island"},
    "Reload Hola": {message: "Lae Hola uuesti"},
    "back to": {message: "tagasi"},
    "BG": {message: "Bulgaaria"},
    "MH": {message: "Marshalli Saared"},
    "BS": {message: "Bahama"},
    "TL": {message: "Ida-Timor"},
    "BZ": {message: "Belize"},
    "CY": {message: "Küpros"},
    "IM": {message: "Mani saar"},
    "IE": {message: "Iirimaa"},
    "Get help from engineer over skype:": {message: "Palu tehnikult abi skype kaudu (inglise keeles):"},
    "TW": {message: "Taiwan"},
    "KP": {message: "Põhja-Korea"},
    "PF": {message: "Prantsuse Polüneesia"},
    "app_name": {message: "Hola parem internet"},
    "Update": {message: "Uuenda"},
    "MW": {message: "Malawi"},
    "GY": {message: "Guyana"},
    "$1 blocked?": {message: "$1 blokitud?"},
    "Unblocker is disabled": {message: "Vabastaja on keelatud"},
    "PK": {message: "Pakistan"},
    "GQ": {message: "Ekvatoriaal-Guinea"},
    "$1 unblocked": {message: "$1 vabastatud"},
    "Number of users that pressed not working": {message: "Mittetöötamisest on teatanud"},
    "NF": {message: "Norfolk"},
    "TD": {message: "Tšaad"},
    "SO": {message: "Somaalia"},
    "BD": {message: "Bangladesh"},
    "HM": {message: "Heard ja McDonald"},

};
return E; });