/* eslint-disable no-fallthrough */
import states from "./states";

let values = [];

function lowerState(state, stats) {
  for (let index = 0; index < stats.length; index++) {
    switch (state) {
      case stats[0]:
        values.push(
          "Aba North",
          "Aba South",
          "Arochukwu",
          "Ukwa West",
          "Osisoma Ngwa",
          "Obi Ngwa",
          "Isiala Ngwa",
          "Isuikwato",
          "Bende",
          "Ohafia",
          "Umuahia South",
          "Usiala Ngwa South",
          "Umu Nneochi"
        );
        break;

      case stats[1]:
        values.push("Abaji", "Abuja Municipal Area Council", "Bwari", "Gwagwalada", "Kuje", "Kwali");
        break;

      case stats[2]:
        values.push(
          "Demsa",
          "Fufore",
          "Ganye",
          "Girei",
          "Gombi",
          "Guyuk",
          "Hong",
          "Jada",
          "Lamurde",
          "Madagali",
          "Maiha",
          "Mayo-Belwa",
          "Michika",
          "Mubi",
          "Mubi",
          "Numan",
          "Shelleng",
          "Song",
          "Toungo",
          "Yola North",
          "Yola South Local"
        );
        break;

      case stats[3]:
        values.push(
          "Abak",
          "Eket",
          "Eastern Obolo",
          "Essien Udim",
          "Etim Ekpo",
          "Etinan",
          "Esit eket",
          "Ibeno",
          "Ibesikpo Asutan",
          "Ibiono Ibom",
          "Ika",
          "Ikono",
          "Ikot Abasi",
          "Ikot Ekpene",
          "Ini",
          "Itu",
          "Mbo",
          "Mkpat enin",
          "Nsit atai",
          "Nsit Ibom",
          "Nsit ubium",
          "Obot akara",
          "Okobo",
          "Onna",
          "Oron",
          "Oruk anam",
          "Udung uko",
          "Ukanafun",
          "Uruan",
          "Urue offong/oruko",
          "Uyo"
        );
        break;

      case stats[4]:
        values.push(
          "Aguata",
          "Anambra East",
          "Anambra West",
          "Anaocha",
          "Awka North",
          "Awka South",
          "Ayamelum",
          "Dunukofia",
          "Ekwusigo",
          "Idemili North",
          "Idemili South",
          "Ihiala",
          "Njikoka",
          "Nnewi North",
          "Nnewi South",
          "Ogbaru",
          "Onitsha North",
          "Onitsha South",
          "Orumba North",
          "Orumba South",
          "Oyi"
        );
        break;

      case stats[5]:
        values.push(
          "Alkaleri",
          "Bauchi",
          "Bogoro",
          "Damban",
          "Darazo",
          "Dass",
          "Gamawa",
          "Ganjuwa",
          "Giade",
          "Itas/Gadau",
          "JamaAre",
          "Katagum",
          "Kirfi",
          "Misau",
          "Ningi",
          "Shira",
          "Tafawa Balewa",
          "Toro",
          "Warji",
          "Zaki"
        );
        break;

      case stats[6]:
        values.push("Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa");
        break;

      case stats[7]:
        values.push(
          "Ado",
          "Agatu",
          "Apa",
          "Buruku",
          "Gboko",
          "Guma",
          "Gwer East",
          "Gwer West",
          "Katsina-Ala",
          "Konshisha",
          "Kwande",
          "Logo",
          "Makurdi",
          "Obi",
          "Ogbadibo",
          "Ohimini",
          "Oju",
          "Okpokwu",
          "Oturkpo",
          "Tarka",
          "Ukum",
          "Ushongo",
          "Vandeikya"
        );
        break;

      case stats[8]:
        values.push(
          "Abadam",
          "Askira/Uba",
          "Bama",
          "Bayo",
          "Biu",
          "Chibok",
          "Damboa",
          "Dikwa",
          "Gubio",
          "Guzamala",
          "Gwoza",
          "Hawul",
          "Jere",
          "Kaga",
          "Kala/Balge",
          "Konduga",
          "Kukawa",
          "Kwaya Kusar",
          "Mafa",
          "Magumeri",
          "Maiduguri",
          "Marte",
          "Mobbar",
          "Monguno",
          "Ngala",
          "Nganzai",
          "Shani"
        );
        break;

      case stats[9]:
        values.push(
          "Abi",
          "Akamkpa",
          "Akpabuyo",
          "Bakassi",
          "Bekwstatsa",
          "Biase",
          "Boki",
          "Calabar Municipal",
          "Calabar South",
          "Etung",
          "Ikom",
          "Obanliku",
          "Obubra",
          "Obudu",
          "Odukpani",
          "Ogoja",
          "Yakuur",
          "Yala"
        );
        break;

      case stats[10]:
        values.push(
          "Aniocha North",
          "Aniocha South",
          "Bomadi",
          "Burutu",
          "Ethiope East",
          "Ethiope West",
          "Ika North East",
          "Ika South",
          "Isoko North",
          "Isoko South",
          "Ndokwa East",
          "Ndokwa West",
          "Okpe",
          "Oshimili North",
          "Oshimili South",
          "Patani",
          "Sapele Delta",
          "Udu",
          "Ughelli North",
          "Ughelli South",
          "Ukwuani",
          "Uvwie",
          "Wstatsi North",
          "Wstatsi South",
          "Wstatsi South West"
        );
        break;

      case stats[11]:
        values.push(
          "Abakaliki",
          "Afikpo North",
          "Afikpo South",
          "Ebonyi",
          "Ezza North",
          "Ezza South",
          "Ikwo",
          "Ishielu",
          "Ivo",
          "Izzi",
          "Ohaozara",
          "Ohaukwu",
          "Onicha"
        );
        break;

      case stats[12]:
        values.push(
          "Aninri",
          "Awgu",
          "Enugu East",
          "Enugu North",
          "Enugu South",
          "Ezeagu",
          "Igbo Etiti",
          "Igbo Eze North",
          "Igbo Eze South",
          "Isi Uzo",
          "Nkanu East",
          "Nkanu West",
          "Nsukka",
          "Oji River",
          "Udenu",
          "Udi",
          "Uzo Uwani"
        );
        break;

      case stats[13]:
        values.push(
          "Akoko-Edo",
          "Egor",
          "Esan Central",
          "Esan North-East",
          "Esan South-East",
          "Esan West",
          "Etsako Central",
          "Etsako East",
          "Etsako West",
          "Igueben",
          "Ikpoba Okha",
          "Oredo",
          "Orhionmwon",
          "Ovia North-East",
          "Ovia South-West",
          "Owan East",
          "Owan West",
          "Uhunmwonde"
        );
        break;

      case stats[14]:
        values.push(
          "Ado Ekiti",
          "Efon",
          "Ekiti East",
          "Ekiti South-West",
          "Ekiti West",
          "Emure",
          "Gbonyin",
          "Ido Osi",
          "Ijero",
          "Ikere",
          "Ikole",
          "Ilejemeje",
          "Irepodun/Ifelodun",
          "Ise/Orun",
          "Moba",
          "Oye"
        );
        break;

      case stats[15]:
        values.push(
          "Akko",
          "Balanga",
          "Billiri",
          "Dukku",
          "Funakaye",
          "Gombe",
          "Kaltungo",
          "Kwami",
          "Nafada",
          "Shongom",
          "Yamaltu/Deba"
        );
        break;
      default:
        values.push("Error");
    }
  }
}

function middleState(state, stats) {
  for (let index = 0; index < stats.length; index++) {
    switch (state) {
      case stats[16]:
        values.push(
          "Aboh Mbaise",
          "Ahiazu Mbaise",
          "Ehime Mbano",
          "Ezinihitte",
          "Ideato North",
          "Ideato South",
          "Ihitte/Uboma",
          "Ikeduru",
          "Isiala Mbano",
          "Isu",
          "Mbaitoli",
          "Ngor Okpala",
          "Njaba",
          "Nkwerre",
          "Nwangele",
          "Obowo",
          "Oguta",
          "Ohaji/Egbema",
          "Okigwe",
          "Orlu",
          "Orsu",
          "Oru East",
          "Oru West",
          "Owerri Municipal",
          "Owerri North",
          "Owerri West",
          "Unuimo"
        );
        break;

      case stats[17]:
        values.push(
          "Auyo",
          "Babura",
          "Biriniwa",
          "Birnin Kudu",
          "Buji",
          "Dutse",
          "Gagarawa",
          "Garki",
          "Gumel",
          "Guri",
          "Gwaram",
          "Gwiwa",
          "Hadejia",
          "Jahun",
          "Kafin Hausa",
          "Kaugama",
          "Kazaure",
          "Kiri Kasama",
          "Kiyawa",
          "Maigatari",
          "Malam Madori",
          "Miga",
          "Ringim",
          "Roni",
          "Sule Tankarkar",
          "Taura",
          "Yankwashi"
        );
        break;

      case stats[18]:
        values.push(
          "Birnin Gwari",
          "Chikun",
          "Giwa",
          "Igabi",
          "Ikara",
          "Jaba",
          "Jema",
          "Kachia",
          "Kaduna North",
          "Kaduna South",
          "Kagarko",
          "Kajuru",
          "Kaura",
          "Kauru",
          "Kubau",
          "Kudan",
          "Lere",
          "Makarfi",
          "Sabon Gari",
          "Sanga",
          "Soba",
          "Zangon Kataf",
          "Zaria"
        );
        break;

      case stats[19]:
        values.push(
          "Ajingi",
          "Albasu",
          "Bagwai",
          "Bebeji",
          "Bichi",
          "Bunkure",
          "Dala",
          "Dambatta",
          "Dawakin Kudu",
          "Dawakin Tofa",
          "Doguwa",
          "Fagge",
          "Gabasawa",
          "Garko",
          "Garun Mallam",
          "Gaya",
          "Gezawa",
          "Gwale",
          "Gwarzo",
          "Kabo",
          "Kano Municipal",
          "Karaye",
          "Kibiya",
          "Kiru",
          "Kumbotso",
          "Kunchi",
          "Kura",
          "Madobi",
          "Makoda",
          "Minjibir",
          "Nasarawa",
          "Rano",
          "Rimin Gado",
          "Rogo",
          "Shanono",
          "Sumaila",
          "Takai",
          "Tarauni",
          "Tofa",
          "Tsanyawa",
          "Tudun Wada",
          "Ungogo",
          "Warawa",
          "Wudil"
        );
        break;

      case stats[20]:
        values.push(
          "Bakori",
          "Batagarawa",
          "Batsari",
          "Baure",
          "Bindawa",
          "Charanchi",
          "Dan Musa",
          "Dandume",
          "Danja",
          "Daura",
          "Dutsi",
          "Dutsin",
          "Faskari",
          "Funtua",
          "Ingawa",
          "Jibia",
          "Kafur",
          "Kaita",
          "Kankara",
          "Kankia",
          "Katsina",
          "Kurfi",
          "Kusada",
          "MaiAdua",
          "Malumfashi",
          "Mani",
          "Mashi",
          "Matazu",
          "Musawa",
          "Rimi",
          "Sabuwa",
          "Safana",
          "Sandamu",
          "Zango"
        );
        break;

      case stats[21]:
        values.push(
          "Aleiro",
          "Arewa Dandi",
          "Argungu",
          "Augie",
          "Bagudo",
          "Birnin Kebbi",
          "Bunza",
          "Dandi",
          "Fakai",
          "Gwandu",
          "Jega",
          "Kalgo",
          "Koko/Besse",
          "Maiyama",
          "Ngaski",
          "Sakaba",
          "Shanga",
          "Suru",
          "Wasagu/Danko",
          "Yauri",
          "Zuru"
        );
        break;

      case stats[22]:
        values.push(
          "Adavi",
          "Ajaokuta",
          "Ankpa",
          "Bassa",
          "Dekina",
          "Ibaji",
          "Idah",
          "Igalamela Odolu",
          "Ijumu",
          "Kabba/Bunu",
          "Kogi",
          "Lokoja",
          "Mopa Muro",
          "Ofu",
          "Ogori/Magongo",
          "Okehi",
          "Okene",
          "Olamaboro",
          "Omala",
          "Yagba East",
          "Yagba West"
        );
        break;

      case stats[23]:
        values.push(
          "Asa",
          "Baruten",
          "Edu",
          "Ekiti, Kwara State",
          "Ifelodun",
          "Ilorin East",
          "Ilorin South",
          "Ilorin West",
          "Irepodun",
          "Isin",
          "Kaiama",
          "Moro",
          "Offa",
          "Oke Ero",
          "Oyun",
          "Pategi"
        );
        break;

      case stats[24]:
        values.push(
          "Agege",
          "Ajeromi-Ifelodun",
          "Alimosho",
          "Amuwo-Odofin",
          "Apapa",
          "Badagry",
          "Epe",
          "Eti Osa",
          "Ibeju-Lekki",
          "Ifako-Ijaiye",
          "Ikeja",
          "Ikorodu",
          "Kosofe",
          "Lagos Island",
          "Lagos Mainland",
          "Mushin",
          "Ojo",
          "Oshodi-Isolo",
          "Shomolu",
          "Surulere"
        );
        break;

      case stats[25]:
        values.push(
          "Akwanga",
          "Awe",
          "Doma",
          "Karu",
          "Keana",
          "Keffi",
          "Kokona",
          "Lafia",
          "Nasarawa",
          "Nasarawa Egon",
          "Obi",
          "Toto",
          "Wamba"
        );
        break;

      case stats[26]:
        values.push(
          "Agaie",
          "Agwara",
          "Bida",
          "Borgu",
          "Bosso",
          "Chanchaga",
          "Edati",
          "Gbako",
          "Gurara",
          "Katcha",
          "Kontagora",
          "Lapai",
          "Lavun",
          "Magama",
          "Mariga",
          "Mashegu",
          "Mokwa",
          "Moya",
          "Paikoro",
          "Rafi",
          "Rijau",
          "Shiroro",
          "Suleja",
          "Tafa",
          "Wushishi"
        );
        break;

      case stats[27]:
        values.push(
          "Abeokuta North",
          "Abeokuta South",
          "Ado-Odo/Ota",
          "Egbado North",
          "Egbado South",
          "Ewekoro",
          "Ifo",
          "Ijebu East",
          "Ijebu North",
          "Ijebu North East",
          "Ijebu Ode",
          "Ikenne",
          "Imeko Afon",
          "Ipokia",
          "Obafemi Owode",
          "Odeda",
          "Odogbolu",
          "Ogun Waterside",
          "Remo North",
          "Shagamu"
        );
        break;

      case stats[28]:
        values.push(
          "Akoko North-East",
          "Akoko North-West",
          "Akoko South-East",
          "Akoko South-West",
          "Akure North",
          "Akure South",
          "Ese Odo",
          "Idanre",
          "Ifedore",
          "Ilaje",
          "Ile Oluji/Okeigbo",
          "Irele",
          "Odigbo",
          "Okitipupa",
          "Ondo East",
          "Ondo West",
          "Ose",
          "Owo"
        );
        break;

      case stats[29]:
        values.push(
          "Aiyedaade",
          "Aiyedire",
          "Atakunmosa East",
          "Atakunmosa West",
          "Boluwaduro",
          "Boripe",
          "Ede North",
          "Ede South",
          "Egbedore",
          "Ejigbo",
          "Ife Central",
          "Ife East",
          "Ife North",
          "Ife South",
          "Ifedayo",
          "Ifelodun",
          "Ila",
          "Ilesa East",
          "Ilesa West",
          "Irepodun",
          "Irewole",
          "Isokan",
          "Iwo",
          "Obokun",
          "Odo Otin",
          "Ola Oluwa",
          "Olorunda",
          "Oriade",
          "Orolu",
          "Osogbo"
        );
        break;

      case stats[30]:
        values.push(
          "Afijio",
          "Akinyele",
          "Atiba",
          "Atisbo",
          "Egbeda",
          "Ibadan North",
          "Ibadan North-East",
          "Ibadan North-West",
          "Ibadan South-East",
          "Ibadan South-West",
          "Ibarapa Central",
          "Ibarapa East",
          "Ibarapa North",
          "Ido",
          "Irepo",
          "Iseyin",
          "Itesiwaju",
          "Iwajowa",
          "Kajola",
          "Lagelu",
          "Ogbomosho North",
          "Ogbomosho South",
          "Ogo Oluwa",
          "Olorunsogo",
          "Oluyole",
          "Ona Ara",
          "Orelope",
          "Ori Ire",
          "Oyo",
          "Oyo East",
          "Saki East",
          "Saki West",
          "Surulere"
        );
        break;
      default:
        values.push("");
    }
  }
}

function upperState(state, stats) {
  for (let index = 0; index < stats.length; index++) {
    switch (state) {
      case stats[31]:
        values.push(
          "Barkin Ladi",
          "Bassa",
          "Bokkos",
          "Jos East",
          "Jos North",
          "Jos South",
          "Kanam",
          "Kanke",
          "Langtang North",
          "Langtang South",
          "Mangu",
          "Mikang",
          "Pankshin",
          "Qua An Pan",
          "Riyom",
          "Shendam",
          "Wase"
        );
        break;

      case stats[32]:
        values.push(
          "Abua/Odual",
          "Ahoada East",
          "Ahoada West",
          "Akuku-Toru",
          "Andoni",
          "Asari-Toru",
          "Bonny",
          "Degema",
          "Eleme",
          "Emuoha",
          "Etche",
          "Gokana",
          "Ikwerre",
          "Khana",
          "Obio/Akpor",
          "Ogba/Egbema/Ndoni",
          "Ogu/Bolo",
          "Okrika",
          "Omuma",
          "Opobo/Nkoro",
          "Oyigbo",
          "Port Harcourt",
          "Tai"
        );
        break;

      case stats[33]:
        values.push(
          "Binji",
          "Bodinga",
          "Dange Shuni",
          "Gada",
          "Goronyo",
          "Gudu",
          "Gwadabawa",
          "Illela",
          "Isa",
          "Kebbe",
          "Kware",
          "Rabah",
          "Sabon Birni",
          "Shagari",
          "Silame",
          "Sokoto North",
          "Sokoto South",
          "Tambuwal",
          "Tangaza",
          "Tureta",
          "Wamako",
          "Wurno",
          "Yabo"
        );
        break;

      case stats[34]:
        values.push(
          "Ardo Kola",
          "Bali",
          "Donga",
          "Gashaka",
          "Gassol",
          "Ibi",
          "Jalingo",
          "Karim Lamido",
          "Kumi",
          "Lau",
          "Sardauna",
          "Takum",
          "Ussa",
          "Wukari",
          "Yorro",
          "Zing"
        );
        break;

      case stats[35]:
        values.push(
          "Bade",
          "Bursari",
          "Damaturu",
          "Fika",
          "Fune",
          "Geidam",
          "Gujba",
          "Gulani",
          "Jakusko",
          "Karasuwa",
          "Machina",
          "Nangere",
          "Nguru",
          "Potiskum",
          "Tarmuwa",
          "Yunusari",
          "Yusufari"
        );
        break;

      case stats[36]:
        values.push(
          "Anka",
          "Bakura",
          "Birnin Magaji/Kiyaw",
          "Bukkuyum",
          "Bungudu",
          "Chafe",
          "Gummi",
          "Gusau",
          "Kaura Namoda",
          "Maradun",
          "Maru",
          "Shinkafi",
          "Talata Mafara",
          "Zurmi"
        );
        break;

      default:
        values.push("");
        break;
    }
  }
}

function mapStateToLga(state) {
  lowerState(state, states);
  middleState(state, states);
  upperState(state, states);

  // Removes duplicated from the state say values
  return values.filter((a, b) => values.indexOf(a) === b);
}

export default mapStateToLga;
