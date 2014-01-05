'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Djibouti"},
    "JM": {message: "Iamáice"},
    "AT": {message: "An Ostair"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Want Hola ar gléasanna eile? (Xbox, PS, Apple teilifíse, iPhone ...). Cliceáil anseo"},
    "SZ": {message: "An tSuasalainn"},
    "YT": {message: "Mayotte"},
    "BN": {message: "Brúiné"},
    "ZM": {message: "An tSaimbia"},
    "app_desc": {message: "Rochtain GACH ar an Idirlíon! Téigh go dtí an suíomh blocáilte -> cliceáil Hola icon -> Bratach na tíre athrú -> Bain sult as!"},
    "Improve translation": {message: "Feabhas a chur ar aistriúcháin"},
    "more...": {message: "níos mó ..."},
    "PR": {message: "Portó Ríce"},
    "SH": {message: "San Héilin"},
    "There seems to be an error": {message: "Dealraíonn sé go bhfuil earráid"},
    "MA": {message: "Maracó"},
    "MT": {message: "Málta"},
    "SV": {message: "An tSalvadóir"},
    "MP": {message: "Oileáin Mariana Thuaidh"},
    "Unblocker": {message: "Unblocker"},
    "Access any site from any country, free": {message: "Rochtain ar aon suíomh ó aon tír, saor in aisce"},
    "Try to <span>reload</span>": {message: "Bain triail as a <span> reload </span>"},
    "UZ": {message: "Úisbéiceastáin"},
    "PW": {message: "Palau"},
    "TK": {message: "Tócalá"},
    "LR": {message: "An Libéir"},
    "TN": {message: "An Túinéis"},
    "EE": {message: "An Eastóin"},
    "CK": {message: "Oileáin Cook"},
    "BY": {message: "An Bhealarúis"},
    "NO": {message: "An Iorua"},
    "KR": {message: "An Chóiré Theas"},
    "BF": {message: "Buircíne Fasó"},
    "AM": {message: "An Airméin"},
    "SR": {message: "Suranam"},
    "MG": {message: "Madagascar"},
    "ON": {message: "AR"},
    "BT": {message: "An Bhútáin"},
    "CF": {message: "Poblacht na hAfraice Láir"},
    "AE": {message: "Aontas na nÉimíríochtaí Arabacha"},
    "BA": {message: "An Bhoisnia agus Heirseagóvéin"},
    "TH": {message: "An Téalainn"},
    "Author:": {message: "Author:"},
    "CC": {message: "Oileáin na gCócónna"},
    "NC": {message: "An Nua-Chaladóin"},
    "TO": {message: "Tonga"},
    "SE": {message: "An tSualainn"},
    "AZ": {message: "An Asarbaiseáin"},
    "AF": {message: "An Afganastáin"},
    "NG": {message: "An Nigéir"},
    "BJ": {message: "Beinin"},
    "KE": {message: "An Chéinia"},
    "Turn on to get started": {message: "Cas ar chun tús a chur"},
    "OM": {message: "Óman"},
    "LK": {message: "Srí Lanca"},
    "ID": {message: "An Indinéis"},
    "FM": {message: "An Mhicrinéis"},
    "(some Hola features are not available on your version)": {message: "(Nach bhfuil roinnt gnéithe Hola ar fáil ar do version)"},
    "GM": {message: "An Ghaimbia"},
    "LV": {message: "An Laitvia"},
    "RU": {message: "Cónaidhm na Rúise"},
    "FI": {message: "An Fhionlainn"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Faigh Hola Plus le un-isteach, seirbhís ad-saor in aisce."},
    "LU": {message: "Lucsamburg"},
    "VE": {message: "Veiniséala"},
    "TV": {message: "Túválú"},
    "VI": {message: "Oileáin na Maighdean S.A.M."},
    "MX": {message: "Meicsiceo"},
    "SN": {message: "An tSeineagáil"},
    "IL": {message: "Iosrael"},
    "GG": {message: "Geansaí"},
    "Author site:": {message: "Suíomh Údar:"},
    "HU": {message: "An Ungáir"},
    "DO": {message: "An Phoblacht Dhoiminiceach"},
    "OFF": {message: "OFF"},
    "KH": {message: "An Chambóid"},
    "TG": {message: "Tóga"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Ní féidir Hola obair i gceart toisc go bhfuil síneadh eile a rialú do chuid socruithe seachfhreastalaí. Le do thoil a dhíchumasú síntí eile a cheapann tú a d'fhéadfadh rialú do socruithe seachfhreastalaí i <a> síntí </a> (mar shampla, ad-blockers, seirbhísí VPN eile, etc)."},
    "BB": {message: "Barbadós"},
    "JE": {message: "Geirsí"},
    "DK": {message: "An Danmhairg"},
    "PA": {message: "Panama"},
    "QA": {message: "Catar"},
    "CV": {message: "An Rinn Ghlas"},
    "Reload": {message: "Athlódáil"},
    "GD": {message: "Grenada"},
    "Number of users that use this option": {message: "Líon na n-úsáideoirí a bhaineann úsáid as an rogha seo"},
    "MO": {message: "R.R.S. na Síne Macáó"},
    "HR": {message: "An Chróit"},
    "CZ": {message: "Poblacht na Seice"},
    "ST": {message: "Sao Tome agus Principe"},
    "AU": {message: "An Astráil"},
    "IR": {message: "An Iaráin"},
    "CG": {message: "An Congó"},
    "BI": {message: "An Bhurúin"},
    "GW": {message: "An Ghuine-Bhissau"},
    "MK": {message: "An Mhacadóin"},
    "GR": {message: "An Ghréig"},
    "AG": {message: "Aintíge agus Barbúda"},
    "AI": {message: "Anguilla"},
    "AN": {message: "Antillí na hÍsiltíre"},
    "UA": {message: "An Úcráin"},
    "EH": {message: "An Sahára Thiar"},
    "KN": {message: "Saint Kitts agus Nevis"},
    "SC": {message: "Na Séiséil"},
    "MS": {message: "Montsarat"},
    "NL": {message: "An Ísiltír"},
    "HK": {message: "R.R.S. na Síne Hong Cong"},
    "EC": {message: "Eacuadór"},
    "MY": {message: "An Mhalaeisia"},
    "CR": {message: "Cósta Ríce"},
    "VA": {message: "An Vatacáin"},
    "IO": {message: "Críocha Briotanacha an Aigéin Indiagh"},
    "RS": {message: "An tSeirbia"},
    "SD": {message: "An tSúdáin"},
    "CN": {message: "An tSín"},
    "UY": {message: "Urugua"},
    "PY": {message: "Paragua"},
    "MU": {message: "Oileán Mhuirís"},
    "LI": {message: "Lichtinstéin"},
    "CH": {message: "An Eilvéis"},
    "GH": {message: "Gána"},
    "KG": {message: "An Chirgeastáin"},
    "NU": {message: "Nívé"},
    "US": {message: "Stáit Aontaithe Mheiriceá"},
    "PE": {message: "Peiriú"},
    "SL": {message: "Siarra Leon"},
    "FJ": {message: "Fidsí"},
    "ER": {message: "An Eiritré"},
    "IQ": {message: "An Iaráic"},
    "AS": {message: "Samó Meiriceánach"},
    "TZ": {message: "An Tansáin"},
    "LY": {message: "An Libia"},
    "GT": {message: "Guatamala"},
    "BM": {message: "Beirmiúda"},
    "BV": {message: "Oileán Bouvet"},
    "LT": {message: "An Liotuáin"},
    "SG": {message: "Singeapór"},
    "PM": {message: "Saint Pierre agus Miquelon"},
    "Initializing...": {message: "Initializing ..."},
    "TT": {message: "Oileáin na Tríonóide agus Tobága"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Ní Hola ag obair go maith i Windows 8 mód. Le do thoil ag aistriú chuig mód deisce. Cliceáil <a> anseo </a> le haghaidh treoracha"},
    "SY": {message: "An tSiria"},
    "SK": {message: "An tSlóvaic"},
    "GL": {message: "An Ghraonlainn"},
    "PG": {message: "Nua-Ghuine Phapua"},
    "KI": {message: "Ciribeas"},
    "CD": {message: "Poblacht Dhaonlathach an Chongó"},
    "BW": {message: "An Bhotsuáin"},
    "AO": {message: "Angóla"},
    "ZW": {message: "An tSiombáib"},
    "VC": {message: "Saint Vincent agus na Grenadines"},
    "JP": {message: "An tSeapáin"},
    "NA": {message: "An Namaib"},
    "TJ": {message: "An Táidsíceastáin"},
    "LC": {message: "San Lúisia"},
    "VU": {message: "Vanuatú"},
    "MN": {message: "An Mhongóil"},
    "IT": {message: "An Iodáil"},
    "RE": {message: "Réunion"},
    "WS": {message: "Samó"},
    "Enable": {message: "Cumasaigh"},
    "Loading": {message: "Luchtú"},
    "FR": {message: "An Fhrainc"},
    "EG": {message: "An Éigipt"},
    "start": {message: "tús a chur"},
    "RW": {message: "Ruanda"},
    "BE": {message: "An Bheilg"},
    "UM": {message: "Mion-Oileáin Imeallacha S.A.M."},
    "Accelerator": {message: "Luasaire"},
    "SA": {message: "An Araib Shádach"},
    "LS": {message: "Leosóta"},
    "ZA": {message: "An Afraic Theas"},
    "PT": {message: "An Phortaingéil"},
    "CA": {message: "Ceanada"},
    "Starting...": {message: "Ag tosú ..."},
    "CM": {message: "Camarún"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "Ní mór an leagan saor in aisce de Hola a ath-chumas gach 4 uair an chloig agus tá sé urraithe ag fógraí."},
    "Hola": {message: "Hola"},
    "NP": {message: "Neipeal"},
    "PL": {message: "An Pholainn"},
    "GA": {message: "An Ghabúin"},
    "TM": {message: "An Tuircméanastáin"},
    "KY": {message: "Oileáin na gCadhman"},
    "Verify you have Internet": {message: "Fíoraigh go bhfuil tú Idirlíon"},
    "LA": {message: "Laos"},
    "PH": {message: "Na hOileáin Fhilipíneacha"},
    "NI": {message: "Nicearagua"},
    "TF": {message: "Críocha Deisceartacha na Fraince"},
    "GU": {message: "Guam"},
    "KZ": {message: "An Chasacstáin"},
    "SJ": {message: "Svalbard agus Jan Mayen"},
    "MM": {message: "Maenmar"},
    "NR": {message: "Nárú"},
    "NE": {message: "An Nígir"},
    "DM": {message: "Doiminice"},
    "MR": {message: "An Mharatáin"},
    "AD": {message: "Andóra"},
    "changing...": {message: "atá ag athrú ..."},
    "GS": {message: "An tSeoirsia Theas agus Oileáin Sandwich Theas"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Leagan an-aois de Chrome, <a> cothrom le dáta </a> Chrome a úsáid Hola"},
    "ME": {message: "Montainéagró"},
    "AX": {message: "Oileáin Alaind"},
    "VG": {message: "Oileáin Bhriotanacha na Maighdean"},
    "VN": {message: "Vít Neam"},
    "CI": {message: "An Cósta Eabhair"},
    "DZ": {message: "An Ailgéir"},
    "YE": {message: "Éimin"},
    "GE": {message: "An tSeoirsia"},
    "CX": {message: "Oileán na Nollag"},
    "LB": {message: "An Liobáin"},
    "FK": {message: "Oileáin Fháclainne"},
    "DE": {message: "An Ghearmáin"},
    "even more...": {message: "fiú níos mó ..."},
    "MV": {message: "Na Maildiví"},
    "PN": {message: "Pitcairn"},
    "BH": {message: "Bairéin"},
    "GI": {message: "Giobráltar"},
    "RO": {message: "An Rómáin"},
    "WF": {message: "Oileáin Vailís agus Futúna"},
    "IN": {message: "An India"},
    "AR": {message: "An Airgintín"},
    "GP": {message: "Guadalúip"},
    "Unblocker site list": {message: "Liosta láithreán Unblocker"},
    "CS": {message: "An tSeirbia agus Montainéagró"},
    "AW": {message: "Arúba"},
    "FO": {message: "Oileáin Fharó"},
    "BR": {message: "An Bhrasaíl"},
    "HN": {message: "Hondúras"},
    "MC": {message: "Monacó"},
    "Translate to your language": {message: "Aistrigh le do theanga"},
    "SB": {message: "Oileáin Sholaimh"},
    "NZ": {message: "An Nua-Shéalainn"},
    "PS": {message: "Na Críocha Pailistíneacha"},
    "UG": {message: "Úganda"},
    "GB": {message: "An Ríocht Aontaithe"},
    "HT": {message: "Háití"},
    "GF": {message: "An Ghuáin Fhrancach"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Sean-leagan de Firefox. Preas <a> anseo </a> a uasghrádú."},
    "ZZ": {message: "Réigiún Anaithnid nó Neamhbhailí"},
    "KM": {message: "Oileáin Chomóra"},
    "KW": {message: "Cuáit"},
    "MQ": {message: "Martainíc"},
    "TC": {message: "Oileáin Turks agus Caicos"},
    "ES": {message: "An Spáinn"},
    "MZ": {message: "Mósaimbíc"},
    "BO": {message: "An Bholaiv"},
    "AL": {message: "An Albáin"},
    "TR": {message: "An Tuirc"},
    "MD": {message: "An Mholdóiv"},
    "GN": {message: "An Ghuine"},
    "SI": {message: "An tSlóvéin"},
    "CO": {message: "An Cholóim"},
    "Settings": {message: "Socruithe"},
    "AQ": {message: "An Antartaice"},
    "JO": {message: "An Iordáin"},
    "SM": {message: "San Mairíne"},
    "CL": {message: "An tSile"},
    "CU": {message: "Cúba"},
    "ML": {message: "Mailí"},
    "ET": {message: "An Aetóip"},
    "IS": {message: "An Íoslainn"},
    "Reload Hola": {message: "Athlódáil Hola"},
    "back to": {message: "ar ais go"},
    "BG": {message: "An Bhulgáir"},
    "MH": {message: "Oileáin Marshall"},
    "BS": {message: "Na Bahámaí"},
    "TL": {message: "Tíomór Thoir"},
    "BZ": {message: "An Bheilís"},
    "CY": {message: "An Chipir"},
    "IM": {message: "Oileán Mhanann"},
    "IE": {message: "Éire"},
    "Get help from engineer over skype:": {message: "Faigh cabhair ó innealtóir thar Skype:"},
    "TW": {message: "An Téaváin"},
    "KP": {message: "An Chóiré Thuaidh"},
    "PF": {message: "An Pholainéis Fhrancach"},
    "app_name": {message: "Hola Níos Fearr Idirlín"},
    "Update": {message: "Nuashonraigh"},
    "MW": {message: "An Mhaláiv"},
    "GY": {message: "An Ghuáin"},
    "Unblocker is disabled": {message: "Tá Unblocker faoi mhíchumas"},
    "GQ": {message: "An Ghuine Mheánchriosach"},
    "PK": {message: "An Phacastáin"},
    "Number of users that pressed not working": {message: "Líon na n-úsáideoirí nach brúite ag obair"},
    "NF": {message: "Oileán Norfolk"},
    "TD": {message: "Sead"},
    "SO": {message: "An tSomáil"},
    "HM": {message: "Oileán Heard agus Oileáin McDonald"},
    "BD": {message: "An Bhanglaidéis"},

};
return E; });