'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Dzsibuti"},
    "JM": {message: "Jamaica"},
    "AT": {message: "Ausztria"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Szeretné Hola más eszközökkel? (Xbox, PS, Apple TV, iPhone ...). Kattintson ide"},
    "SZ": {message: "Szváziföld"},
    "YT": {message: "Mayotte"},
    "BN": {message: "Brunei"},
    "ZM": {message: "Zambia"},
    "app_desc": {message: "Elérheti az összes az interneten! Menj a blokkolt site -> kattintson Hola ikon -> váltás ország zászlóját -> Jó szórakozást!"},
    "Improve translation": {message: "Javítani fordítás"},
    "more...": {message: "több ..."},
    "PR": {message: "Puerto Rico"},
    "SH": {message: "Szent Helena"},
    "There seems to be an error": {message: "Úgy tűnik, hogy egy hiba"},
    "MA": {message: "Marokkó"},
    "SV": {message: "Salvador"},
    "MT": {message: "Málta"},
    "MP": {message: "Északi Mariana-szigetek"},
    "Unblocker": {message: "Unblocker"},
    "Access any site from any country, free": {message: "Hozzáférés bármely más weboldal bármely országból, ingyen"},
    "Try to <span>reload</span>": {message: "Próbálja <span> reload </span>"},
    "UZ": {message: "Üzbegisztán"},
    "PW": {message: "Palau"},
    "TK": {message: "Tokelau"},
    "LR": {message: "Libéria"},
    "TN": {message: "Tunézia"},
    "EE": {message: "Észtország"},
    "CK": {message: "Cook-szigetek"},
    "BY": {message: "Fehéroroszország"},
    "NO": {message: "Norvégia"},
    "KR": {message: "Dél-Korea"},
    "BF": {message: "Burkina Faso"},
    "AM": {message: "Örményország"},
    "SR": {message: "Suriname"},
    "MG": {message: "Madagaszkár"},
    "ON": {message: "ON"},
    "BT": {message: "Bhután"},
    "CF": {message: "Közép-afrikai Köztársaság"},
    "AE": {message: "Egyesült Arab Emirátus"},
    "BA": {message: "Bosznia-Hercegovina"},
    "TH": {message: "Thaiföld"},
    "Author:": {message: "Szerző:"},
    "CC": {message: "Kókusz-szigetek"},
    "NC": {message: "Új-Kaledónia"},
    "TO": {message: "Tonga"},
    "SE": {message: "Svédország"},
    "AZ": {message: "Azerbajdzsán"},
    "AF": {message: "Afganisztán"},
    "NG": {message: "Nigéria"},
    "KE": {message: "Kenya"},
    "BJ": {message: "Benin"},
    "Turn on to get started": {message: "Kapcsolja be az induláshoz"},
    "OM": {message: "Omán"},
    "LK": {message: "Srí Lanka"},
    "ID": {message: "Indonézia"},
    "FM": {message: "Mikronézia"},
    "(some Hola features are not available on your version)": {message: "(Néhány Hola funkciók nem állnak rendelkezésre a változat)"},
    "GM": {message: "Gambia"},
    "LV": {message: "Lettország"},
    "RU": {message: "Oroszország"},
    "FI": {message: "Finnország"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Get Hola Plus ENSZ-megszakított, ad-ingyenes szolgáltatás."},
    "LU": {message: "Luxemburg"},
    "VE": {message: "Venezuela"},
    "TV": {message: "Tuvalu"},
    "VI": {message: "Amerikai Virgin-szigetek"},
    "SN": {message: "Szenegál"},
    "MX": {message: "Mexikó"},
    "IL": {message: "Izrael"},
    "GG": {message: "Guernsey"},
    "Author site:": {message: "Szerző oldalon:"},
    "HU": {message: "Magyarország"},
    "DO": {message: "Dominikai Köztársaság"},
    "OFF": {message: "OFF"},
    "KH": {message: "Kambodzsa"},
    "TG": {message: "Togo"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Hola nem működik megfelelően, mert másik mellékre irányítja a proxy beállításokat. Kérjük, kapcsolja ki más kiterjesztésű úgy gondolja, talán vezérelheti a proxy beállításait <a> kiterjesztések </a> (például ad-blokkolók, egyéb VPN-szolgáltatások, stb.)"},
    "BB": {message: "Barbados"},
    "JE": {message: "Jersey"},
    "Remove ads": {message: "Vegye hirdetések"},
    "DK": {message: "Dánia"},
    "PA": {message: "Panama"},
    "CV": {message: "Zöld-foki Köztársaság"},
    "QA": {message: "Katar"},
    "Reload": {message: "Újratöltés"},
    "GD": {message: "Grenada"},
    "Number of users that use this option": {message: "Azon felhasználók száma, hogy használja ezt a lehetőséget"},
    "MO": {message: "Makaó SAR Kína"},
    "MF": {message: "Saint Martin"},
    "HR": {message: "Horvátország"},
    "CZ": {message: "Csehország"},
    "BL": {message: "Saint Barthélemy"},
    "ST": {message: "Sao Tomé és Príncipe"},
    "AU": {message: "Ausztrália"},
    "IR": {message: "Irán"},
    "CG": {message: "Kongó"},
    "BI": {message: "Burundi"},
    "GW": {message: "Guinea-Bissau"},
    "MK": {message: "Macedónia"},
    "GR": {message: "Görögország"},
    "AG": {message: "Antigua és Barbuda"},
    "AI": {message: "Anguilla"},
    "AN": {message: "Holland Antillák"},
    "UA": {message: "Ukrajna"},
    "EH": {message: "Nyugat-Szahara"},
    "KN": {message: "Saint Kitts és Nevis"},
    "SC": {message: "Seychelle-szigetek"},
    "MS": {message: "Montserrat"},
    "NL": {message: "Hollandia"},
    "EC": {message: "Ecuador"},
    "HK": {message: "Hongkong S.A.R, Kína"},
    "MY": {message: "Malajzia"},
    "CR": {message: "Costa Rica"},
    "VA": {message: "Vatikán"},
    "IO": {message: "Brit Indiai Oceán"},
    "SD": {message: "Szudán"},
    "RS": {message: "Szerbia"},
    "CN": {message: "Kína"},
    "UY": {message: "Uruguay"},
    "PY": {message: "Paraguay"},
    "MU": {message: "Mauritius"},
    "CH": {message: "Svájc"},
    "LI": {message: "Liechtenstein"},
    "GH": {message: "Ghána"},
    "KG": {message: "Kirgizisztán"},
    "NU": {message: "Niue"},
    "PE": {message: "Peru"},
    "US": {message: "Egyesült Államok"},
    "SL": {message: "Sierra Leone"},
    "FJ": {message: "Fidzsi"},
    "ER": {message: "Eritrea"},
    "IQ": {message: "Irak"},
    "AS": {message: "Amerikai Szamoa"},
    "TZ": {message: "Tanzánia"},
    "LY": {message: "Líbia"},
    "GT": {message: "Guatemala"},
    "BM": {message: "Bermuda"},
    "BV": {message: "Bouvet-sziget"},
    "LT": {message: "Litvánia"},
    "SG": {message: "Szingapúr"},
    "PM": {message: "Saint Pierre és Miquelon"},
    "Initializing...": {message: "Inicializálása ..."},
    "TT": {message: "Trinidad és Tobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola nem működik jól a Windows 8 módban. Kérjük, váltson desktop módban. Kattintson <a> ide </a> vonatkozó utasításokat"},
    "SY": {message: "Szíria"},
    "SK": {message: "Szlovákia"},
    "GL": {message: "Grönland"},
    "PG": {message: "Pápua Új-Guinea"},
    "KI": {message: "Kiribati"},
    "CD": {message: "Kongó - Kinshasa"},
    "AO": {message: "Angola"},
    "BW": {message: "Botswana"},
    "ZW": {message: "Zimbabwe"},
    "VC": {message: "Saint Vincent és Grenadines"},
    "JP": {message: "Japán"},
    "NA": {message: "Namíbia"},
    "TJ": {message: "Tadzsikisztán"},
    "LC": {message: "Santa Lucia"},
    "VU": {message: "Vanuatu"},
    "MN": {message: "Mongólia"},
    "IT": {message: "Olaszország"},
    "RE": {message: "Reunion"},
    "WS": {message: "Szamoa"},
    "Enable": {message: "Engedélyezése"},
    "Loading": {message: "Terhelés"},
    "EG": {message: "Egyiptom"},
    "FR": {message: "Franciaország"},
    "start": {message: "kezdet"},
    "RW": {message: "Ruanda"},
    "BE": {message: "Belgium"},
    "UM": {message: "Amerikai Csendes-óceáni Szigetek"},
    "Accelerator": {message: "Gázpedál"},
    "LS": {message: "Lesotho"},
    "SA": {message: "Szaúd-Arábia"},
    "ZA": {message: "Dél-Afrika"},
    "PT": {message: "Portugália"},
    "CA": {message: "Kanada"},
    "Starting...": {message: "Indítása ..."},
    "CM": {message: "Kamerun"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "Az ingyenes változat Hola kell újra engedélyezni 4 óránként, és a szponzorált hirdetéseket."},
    "Hola": {message: "Hola"},
    "NP": {message: "Nepál"},
    "PL": {message: "Lengyelország"},
    "GA": {message: "Gabon"},
    "TM": {message: "Türkmenisztán"},
    "KY": {message: "Kajmán-szigetek"},
    "Verify you have Internet": {message: "Ellenőrizze, hogy van internet"},
    "LA": {message: "Laosz"},
    "PH": {message: "Fülöp-szigetek"},
    "NI": {message: "Nicaragua"},
    "TF": {message: "Francia Déli Területek"},
    "GU": {message: "Guam"},
    "KZ": {message: "Kazahsztán"},
    "SJ": {message: "Svalbard és Jan Mayen"},
    "MM": {message: "Mianmar"},
    "NR": {message: "Nauru"},
    "DM": {message: "Dominika"},
    "NE": {message: "Niger"},
    "AD": {message: "Andorra"},
    "MR": {message: "Mauritánia"},
    "changing...": {message: "változó ..."},
    "GS": {message: "Dél Grúzia és a Déli Szendvics-szigetek"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Nagyon régi verziója Chrome, <a> frissítést </a> Chrome használata Hola"},
    "ME": {message: "Montenegró"},
    "AX": {message: "Aland-szigetek"},
    "VG": {message: "Brit Virgin-szigetek"},
    "VN": {message: "Vietnam"},
    "CI": {message: "Elefántcsontpart"},
    "DZ": {message: "Algéria"},
    "YE": {message: "Jemen"},
    "GE": {message: "Grúzia"},
    "CX": {message: "Karácsony-szigetek"},
    "LB": {message: "Libanon"},
    "FK": {message: "Falkland-szigetek"},
    "DE": {message: "Németország"},
    "even more...": {message: "még több ..."},
    "MV": {message: "Maldív-szigetek"},
    "PN": {message: "Pitcairn-sziget"},
    "BH": {message: "Bahrein"},
    "GI": {message: "Gibraltár"},
    "RO": {message: "Románia"},
    "WF": {message: "Wallis és Futuna"},
    "AR": {message: "Argentína"},
    "GP": {message: "Guadeloupe"},
    "IN": {message: "India"},
    "Unblocker site list": {message: "Unblocker oldal lista"},
    "FO": {message: "Feröer-szigetek"},
    "AW": {message: "Aruba"},
    "CS": {message: "Szerbia és Montenegró"},
    "BR": {message: "Brazília"},
    "HN": {message: "Honduras"},
    "MC": {message: "Monaco"},
    "Translate to your language": {message: "Fordítás nyelvet"},
    "SB": {message: "Salamon-szigetek"},
    "PS": {message: "Palesztin Terület"},
    "NZ": {message: "Új-Zéland"},
    "UG": {message: "Uganda"},
    "GB": {message: "Egyesült Királyság"},
    "HT": {message: "Haiti"},
    "GF": {message: "Francia Guyana"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Régi Firefox. Press <a> ide </a> frissíteni."},
    "ZZ": {message: "Ismeretlen vagy érvénytelen körzet"},
    "KM": {message: "Comore-szigetek"},
    "KW": {message: "Kuvait"},
    "MQ": {message: "Martinique"},
    "TC": {message: "Turks- és Caicos-szigetek"},
    "MZ": {message: "Mozambik"},
    "ES": {message: "Spanyolország"},
    "BO": {message: "Bolívia"},
    "AL": {message: "Albánia"},
    "MD": {message: "Moldova"},
    "TR": {message: "Törökország"},
    "GN": {message: "Guinea"},
    "CO": {message: "Kolumbia"},
    "SI": {message: "Szlovénia"},
    "Settings": {message: "Beállítások"},
    "AQ": {message: "Antarktisz"},
    "JO": {message: "Jordánia"},
    "SM": {message: "San Marino"},
    "CU": {message: "Kuba"},
    "CL": {message: "Chile"},
    "ML": {message: "Mali"},
    "ET": {message: "Etiópia"},
    "IS": {message: "Izland"},
    "Reload Hola": {message: "Reload Hola"},
    "back to": {message: "vissza a"},
    "BG": {message: "Bulgária"},
    "MH": {message: "Marshall-szigetek"},
    "BS": {message: "Bahamák"},
    "TL": {message: "Kelet-Timor"},
    "BZ": {message: "Belize"},
    "CY": {message: "Ciprus"},
    "IM": {message: "Man-sziget"},
    "IE": {message: "Írország"},
    "Get help from engineer over skype:": {message: "Kérjen segítséget mérnök Skype:"},
    "TW": {message: "Tajvan"},
    "KP": {message: "Észak-Korea"},
    "PF": {message: "Francia Polinézia"},
    "app_name": {message: "Hola jobb Internet"},
    "Update": {message: "Frissítés"},
    "MW": {message: "Malawi"},
    "GY": {message: "Guyana"},
    "Unblocker is disabled": {message: "Unblocker van tiltva"},
    "PK": {message: "Pakisztán"},
    "GQ": {message: "Egyenlítői-Guinea"},
    "Number of users that pressed not working": {message: "Felhasználók száma, hogy nyomva nem működik"},
    "NF": {message: "Norfolk-sziget"},
    "SO": {message: "Szomália"},
    "TD": {message: "Csád"},
    "BD": {message: "Banglades"},
    "HM": {message: "Heard és McDonald Szigetek"},

};
return E; });