import hailemichaelSolomonPhoto from '../assets/images/teams/HAILEMICHAELSOLOMON.png';
import fevenGirmaPhoto from '../assets/images/teams/FEVENGIRMA.png';
import helenPhoto from '../assets/images/teams/HELEN.png';
import mekdesGebruPhoto from '../assets/images/teams/MEKDESGEBRU.png';
import yitbarekTeklePhoto from '../assets/images/teams/YITBAREKTEKLE.png';
import diboraMesfinPhoto from '../assets/images/teams/DIBORAMESFIN.png';
import hailegiorgisSolomonPhoto from '../assets/images/teams/HAILEGIORGISSOLOMON.png';
import supervisionDepartmentPhoto from '../assets/images/teams/SUPERVISION.png';
import designDepartmentPhoto from '../assets/images/teams/DESIGN DEPARTMENT.png';
import paymentDepartmentPhoto from '../assets/images/teams/PAYMENTDEPARTMENT.png';

export const COMPANY_INFO = {
  name: "HH Consulting Architects and Engineering PLC",
  tagline: "Innovative Design, Sustainable Future",
  address: "Ethiopia, Addis Ababa, 22 Mazoriya, Efrata building, 3rd floor",
  phones: [
    "011 8683830",
    "011 6672951",
    "+251 913592121",
    "+251 911228253",
    "+251 966935979"
  ],
  emails: [
    "hhconsultingarchitectengineers@gmail.com",
    "hayla_h@yahoo.com"
  ],
  social: {
    facebook: "https://web.facebook.com/p/HH-Consulting-Architects-Engineers-100076434397072/?_rdc=1&_rdr#",
    linkedin: "https://et.linkedin.com/company/hh-consulting-architects-engineers-plc",
  }
};

export const SERVICES = [
  {
    id: 1,
    title_en: "Building Design",
    title_am: "የህንፃ ዲዛይን",
    description_en: "Architectural, Structure, Electrical, Sanitary, Mechanical & Others.",
    description_am: "አርክቴክቸራል፣ መዋቅራዊ፣ ኤሌክትሪክ፣ ሳኒተሪ፣ ሜካኒካል እና ሌሎችም፡፡",
    icon: "building"
  },
  {
    id: 2,
    title_en: "Urban Design and Planning",
    title_am: "የከተማ ዲዛይን እና ፕላኒንግ",
    description_en: "Comprehensive urban and regional master plans and infrastructure planning.",
    description_am: "አጠቃላይ የከተማ እና ክልላዊ ማስተር ፕላኖች እና የመሠረተ ልማት ዕቅድ።",
    icon: "city"
  },
  {
    id: 3,
    title_en: "Infrastructures",
    title_am: "መሠረተ ልማት",
    description_en: "Bridge and transportation structures, and infrastructure master planning.",
    description_am: "የድልድይ እና የትራንስፖርት መዋቅሮች፣ እና የመሠረተ ልማት ማስተር ፕላን።",
    icon: "hammer"
  },
  {
    id: 4,
    title_en: "Terminal Design",
    title_am: "የተርሚናል ዲዛይን",
    description_en: "Strategic design for transportation and logistics terminals.",
    description_am: "ለትራንስፖርት እና ሎጅስቲክስ ተርሚናሎች ስትራቴጂካዊ ዲዛይን።",
    icon: "building"
  },
  {
    id: 5,
    title_en: "Road Works",
    title_am: "የመንገድ ሥራዎች",
    description_en: "Professional road and highway design and engineering solutions.",
    description_am: "ሙያዊ የመንገድ እና የሀይዌይ ዲዛይን እና የምህንድስና መፍትሄዎች።",
    icon: "hammer"
  },
  {
    id: 6,
    title_en: "Irrigations",
    title_am: "መስኖ",
    description_en: "Irrigation and water resource engineering for sustainable agriculture.",
    description_am: "ለዘላቂ ግብርና የመስኖ እና የውሃ ሀብት ምህንድስና።",
    icon: "hammer"
  },
  {
    id: 7,
    title_en: "Feasibility Study",
    title_am: "የአዋጭነት ጥናት",
    description_en: "Detailed feasibility studies for public and private projects.",
    description_am: "ለሕዝብ እና ለግል ፕሮጀክቶች ዝርዝር የአዋጭነት ጥናቶች።",
    icon: "tasks"
  },
  {
    id: 8,
    title_en: "Topography Survey",
    title_am: "የቶፖግራፊ ጥናት",
    description_en: "Accurate topographic surveys and site analysis.",
    description_am: "ትክክለኛ የቶፖግራፊ ጥናቶች እና የጣቢያ ትንተና።",
    icon: "city"
  },
  {
    id: 9,
    title_en: "Landscape Design",
    title_am: "የላንድስኬፕ ዲዛይን",
    description_en: "Aesthetic and functional landscape architecture and specifications.",
    description_am: "ውብ እና ተግባራዊ የላንድስኬፕ አርክቴክቸር እና ዝርዝር መግለጫዎች።",
    icon: "city"
  },
  {
    id: 10,
    title_en: "Contract Administration",
    title_am: "የኮንትራት አስተዳደር",
    description_en: "Supervision and quality control for construction projects.",
    description_am: "ለግንባታ ፕሮጀክቶች ቁጥጥር እና የጥራት ቁጥጥር።",
    icon: "tasks"
  }
];

export const PROJECTS = [
  // 1. Building Design
  {
    id: 1.1,
    title_en: "DR. AR. ALIBIRA GENERAL HOSPITAL",
    title_am: "ዶ/ር አሊ ቢራ ጠቅላላ ሆስፒታል",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/drAliBiraGeneralHospital.jpg",
    location: "Haramaya, Ethiopia",
    client: "Ali Birra Foundation",
    value: "2,829,723,466 ETB",
    description_en: "Preparing complete Architectural and Engineering Drawings, Preparing Bid Document. Contract Administration and supervision services.",
    featured: true
  },
  {
    id: 1.2,
    title_en: "KEBEDE MIXED USE G+34",
    title_am: "ከበደ ድብልቅ አገልግሎት ህንፃ G+34",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/kebedeMixedUseGPlus34.jpg",
    location: "Haramaya, Ethiopia",
    client: "Ali Birra Foundation",
    value: "6,600,000,000 ETB",
    description_en: "Preparing complete Architectural and Engineering Drawings, Preparing Bid Document. Contract Administration and supervision services.",
    featured: true
  },
  {
    id: 1.3,
    title_en: "DR. AR. ALIBIRA CANCER GUEST HOUSE",
    title_am: "ዶ/ር አሊ ቢራ የካንሰር እንግዳ ማረፊያ",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/drAliBiraCancerGuestHouse.jpg",
    location: "Haramaya, Ethiopia",
    client: "Ali Birra Foundation",
    value: "192,723,466 ETB",
    description_en: "Preparing complete Architectural and Engineering Drawings, Preparing Bid Document. Contract Administration and supervision services."
  },
  {
    id: 1.4,
    title_en: "CHURCHILL HOTEL",
    title_am: "ቸርችል ሆቴል",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/churchillHotel.jpg",
    location: "Addis Ababa, Ethiopia",
    client: "Endale and families plc",
    value: "1,302,723,466 ETB",
    description_en: "Preparing complete Architectural and Engineering Drawings, Preparing Bid Document. Contract Administration and supervision services.",
    featured: true
  },
  {
    id: 1.5,
    title_en: "HARAMAYA UNIVERSITY GUEST HOUSE",
    title_am: "የሐረማያ ዩኒቨርሲቲ እንግዳ ማረፊያ",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/haramayaUniversityGeustHouse.jpg",
    location: "Addis Ababa, Ethiopia",
    client: "Haramaya University",
    value: "1,960,447,567 ETB",
    description_en: "Preparing complete Architectural and Engineering Drawings, Preparing Bid Document. Contract Administration and supervision services."
  },
  {
    id: 1.6,
    title_en: "TESKARO BEHAME G+12",
    title_am: "ተስካሮ በሀመ G+12",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/teskaroBehameGPlus12.jpg",
    location: "Addis Ababa, Ethiopia",
    client: "Teskaro Behame PLC",
    value: "780,010,894 ETB",
    description_en: "Preparing complete Architectural and Engineering Drawings, Preparing Bid Document. Contract Administration and supervision services."
  },
  {
    id: 1.7,
    title_en: "TSEHAY 36 APARTMENT",
    title_am: "ፀሐይ 36 አፓርታማ",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/tsehay36Apartement.jpg",
    location: "Addis Ababa, Ethiopia",
    client: "TSEHAY 36 HOUSING COOPERATIVE",
    value: "888,000,000 ETB",
    description_en: "Preparing complete Architectural and Engineering Drawings, Preparing Bid Document. Contract Administration and supervision services."
  },
  {
    id: 1.8,
    title_en: "HARAMAYA UNIVERISTY",
    title_am: "ሐረማያ ዩኒቨርሲቲ",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/haramayaUniversity.png",
    location: "Haramaya, Ethiopia",
    client: "Haramaya University",
    value: "1,400,000.00 ETB (Services)",
    description_en: "Consultancy services for building design and supervision."
  },
  {
    id: 1.9,
    title_en: "ECOLE DES LUMIERES SCHOOL",
    title_am: "የኤኮል ዴ ሉሚየርስ ትምህርት ቤት",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/ecoleDesLumieresShool.png",
    location: "Rep de Djibouti",
    client: "Ecole des Lumieres",
    value: "USD 25,000 (Services)",
    description_en: "Architectural and Engineering consultancy services."
  },
  {
    id: 1.10,
    title_en: "NISS BUILDING",
    title_am: "ኒስ ህንፃ",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/nissBuildings.png",
    location: "Addis Ababa, Ethiopia",
    client: "Ethiopian Airline Group",
    value: "7,903,831.19 ETB (Services)",
    description_en: "Architectural and Engineering consultancy services for airline group facility."
  },
  {
    id: 1.11,
    title_en: "CITY LIGHT REAL STATE",
    title_am: "ሲቲ ላይት ሪል ስቴት",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/cityLightRealEstate.png",
    location: "Addis Ababa, Around Jemo, Ethiopia",
    client: "CITY LIGHT",
    value: "ONE BILLION ETB",
    description_en: "Preparing Architectural and Landscape for the building, fence design for boundary, and Engineering Drawings."
  },
  {
    id: 1.12,
    title_en: "GREENLAND AND TOUR HOTEL PLC.",
    title_am: "ግሪንላንድ እና ቱር ሆቴል ኃ/የተ/የግ/ማ",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/greenLandAndTourHotelPlc.png",
    location: "Addis Ababa, Ethiopia",
    client: "greenland and tour and hotel plc.",
    value: "19,000,000 ETB",
    description_en: "Preparing architectural landscape, fence design, and engineering drawings."
  },
  {
    id: 1.13,
    title_en: "BULE HORA UNIVERSITY INT. STADIUM",
    title_am: "የቡሌ ሆራ ዩኒቨርሲቲ ዓለም አቀፍ ስታዲየም",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/buleHoraUniversityStadium.png",
    location: "Oromia, Bulehora, Ethiopia",
    client: "Bule Hora University",
    value: "4 Billion ETB",
    description_en: "Design of a 60,000 seat stadium for Bule Hora University.",
    featured: true
  },
  {
    id: 1.14,
    title_en: "BULE HORA UNIVERSITY",
    title_am: "ቡሌ ሆራ ዩኒቨርሲቲ",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/buleHoraUniversity.png",
    location: "Bulehora, Ethiopia",
    client: "Bule Hora University",
    value: "7 Billion ETB",
    description_en: "Major university facility design and engineering services."
  },
  {
    id: 1.15,
    title_en: "BIRHANU AMARE MIXED-USE",
    title_am: "ብርሃኑ አማረ ድብልቅ አገልግሎት ህንፃ",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/birhanuAmareMixedUse.png",
    location: "Addis Ababa, Ethiopia",
    client: "Birhanu Amare",
    value: "520,020,080 ETB",
    description_en: "Preparing Architectural Landscape, fence design, and Engineering Drawings."
  },
  {
    id: 1.16,
    title_en: "BM HOUSING CORPORATION",
    title_am: "ቢ ኤም መኖሪያ ቤቶች ኮርፖሬሽን",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/bmHousingCorporation.png",
    location: "Addis Abeba, Ethiopia",
    client: "BM Housing Corporation 3B+G+12",
    value: "10,000,000 ETB (Services)",
    description_en: "Preparing Architectural Landscape, fence design, and Engineering Drawings."
  },
  {
    id: 1.17,
    title_en: "HOTEL APARTMENT",
    title_am: "ሆቴል አፓርታማ",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/holtelApartement.png",
    location: "Addis Ababa, Ethiopia",
    client: "Ato Asebe",
    value: "N/A",
    description_en: "Hotel apartment design 2B+G+18."
  },
  {
    id: 1.18,
    title_en: "MERKATO MIXED-USE",
    title_am: "መርካቶ ድብልቅ አገልግሎት ህንፃ",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/merkatoMixedUse.png",
    location: "Addis Ababa, Addis Ketema, Ethiopia",
    client: "Merkato Ye Biloket Betoch Pl.c",
    value: "500 Million ETB",
    description_en: "Contract Administration and supervision services."
  },
  {
    id: 1.19,
    title_en: "HAZAL REAL STATE",
    title_am: "ሀዛል ሪል ስቴት",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/hazalRealEstate.png",
    location: "Addis Abeba, Ethiopia",
    client: "Hazal Real Esteat",
    value: "19,000,000 ETB",
    description_en: "Preparing Architectural Landscape, fence design, and Engineering Drawings."
  },
  {
    id: 1.20,
    title_en: "BM HOUSING PLC",
    title_am: "ቢ ኤም መኖሪያ ቤቶች ኃ/የተ/የግ/ማ",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/bmHousingPlc.png",
    location: "Addis Abeba, Ethiopia",
    client: "ASBATE PLC",
    value: "189,000,000 ETB",
    description_en: "Preparing Architectural Landscape, fence design, and Engineering Drawings."
  },
  {
    id: 1.21,
    title_en: "MERKATO COMMERCIAL",
    title_am: "መርካቶ የንግድ ማዕከል",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/merkatoCommercial.png",
    location: "Addis Ababa, Addis Ketema, Ethiopia",
    client: "Tsega Andinet P.L.C",
    value: "400 Million ETB",
    description_en: "Commercial building design and supervision."
  },
  {
    id: 1.22,
    title_en: "MIXED COMMERCIAL",
    title_am: "ድብልቅ የንግድ ማዕከል",
    category: "Building Design",
    category_am: "የህንፃ ዲዛይን",
    image: "/src/assets/images/projects/buildingDesign/mixedCommercial.png",
    location: "Addis Ababa, Addis Ketema, Ethiopia",
    client: "Akebabi Malmat P.L.C",
    value: "N/A",
    description_en: "Contract Administration and supervision services."
  },

  // 2. Infrastructure
  {
    id: 2.1,
    title_en: "TIYA-SUTEN HERITAGE PARK",
    title_am: "ቲያ-ሱተን ቅርስ ፓርክ",
    category: "Infrastructure",
    category_am: "መሠረተ ልማት",
    image: "/src/assets/images/projects/infrastructure/tiyaSutenHeritagePark.jpg",
    location: "Tiya Town, Ethiopia",
    client: "Central Ethiopia Regional Government",
    value: "N/A",
    description_en: "Tourism Development Project for Tiya-suten World Heritage Site. Architectural and Landscape Design.",
    featured: true
  },
  {
    id: 2.2,
    title_en: "HARAMAYA UNIVERSITY ADMIN BUILDING",
    title_am: "የሐረማያ ዩኒቨርሲቲ አስተዳደር ህንፃ",
    category: "Infrastructure",
    category_am: "መሠረተ ልማት",
    image: "/src/assets/images/projects/infrastructure/haramayUniversityAdminBuilding.png",
    location: "Haramaya, Ethiopia",
    client: "Haramaya University",
    value: "N/A",
    description_en: "Architectural and CAD services for Haramaya University admin building."
  },
  {
    id: 2.3,
    title_en: "EXPERIANCE CLOTHING",
    title_am: "ኤክስፒሪያንስ አልባሳት",
    category: "Infrastructure",
    category_am: "መሠረተ ልማት",
    image: "/src/assets/images/projects/infrastructure/experianceClothing.png",
    location: "Addis Ababa, Bole, Ethiopia",
    client: "Expriance Clothing Plc.",
    value: "223,000 ETB (Services)",
    description_en: "Industrial park architectural landscape and engineering drawings."
  },
  {
    id: 2.4,
    title_en: "SUKO INDUSTRIAL PLC",
    title_am: "ሱኮ ኢንዱስትሪያል ኃ/የተ/የግ/ማ",
    category: "Infrastructure",
    category_am: "መሠረተ ልማት",
    image: "/src/assets/images/projects/infrastructure/sukoIndustrialPlc.png",
    location: "Gelan, Ethiopia",
    client: "Suzo Industry Plc.",
    value: "190,020,000 ETB",
    description_en: "Architectural landscape and engineering drawings for industrial facility."
  },

  // 3. Terminal Design
  {
    id: 3.1,
    title_en: "JIMA INTERNATIONAL AIRPORT",
    title_am: "ጅማ ዓለም አቀፍ አውሮፕላን ማረፊያ",
    category: "Terminal Design",
    category_am: "የተርሚናል ዲዛይን",
    image: "/src/assets/images/projects/terminalDesign/jimaInternationalAirPort.png",
    location: "Jimma, Ethiopia",
    client: "Ethiopian Airlines Group",
    value: "269,752,753.03 ETB (Services)",
    description_en: "Airport facility design and engineering services.",
    featured: true
  },
  {
    id: 3.2,
    title_en: "AXUM INTERNATIONAL AIRPORT",
    title_am: "አክሱም ዓለም አቀፍ አውሮፕላን ማረፊያ",
    category: "Terminal Design",
    category_am: "የተርሚናል ዲዛይን",
    image: "/src/assets/images/projects/terminalDesign/axumInternationalAirPort.png",
    location: "Axum, Tigray, Ethiopia",
    client: "Ethiopian Airline Group",
    value: "290,000,000 ETB",
    description_en: "Design-build of Axum airport airfield, terminal, and facility building maintenance."
  },
  {
    id: 3.3,
    title_en: "GAMBELA INTERNATIONAL AIRPORT",
    title_am: "ጋምቤላ ዓለም አቀፍ አውሮፕላን ማረፊያ",
    category: "Terminal Design",
    category_am: "የተርሚናል ዲዛይን",
    image: "/src/assets/images/projects/terminalDesign/gambelaInternationalAirPort.png",
    location: "Gambela, Ethiopia",
    client: "Ethiopian Airline Group",
    value: "342,730,288.67 ETB",
    description_en: "Airport facility design and engineering services."
  },
  {
    id: 3.4,
    title_en: "BUS TERMINAL",
    title_am: "የአውቶቡስ ተርሚናል",
    category: "Terminal Design",
    category_am: "የተርሚናል ዲዛይን",
    image: "/src/assets/images/projects/terminalDesign/busTerminal.png",
    location: "Haramaya, Ethiopia",
    client: "Haramaya University",
    value: "N/A",
    description_en: "Construction of modern garage, bus terminal, access road, and fuel station."
  },

  // 4. Road Construction
  {
    id: 4.1,
    title_en: "ROAD CONSTRUCTION A",
    title_am: "የመንገድ ግንባታ ሀ",
    category: "Road Construction",
    category_am: "የመንገድ ግንባታ",
    image: "/src/assets/images/projects/roadConstruction/roadConstructionA.png",
    location: "Bulehora, Ethiopia",
    client: "Bulehora University",
    value: "N/A",
    description_en: "Curb stone work, asphalt work for university campus roads."
  },
  {
    id: 4.2,
    title_en: "ROAD CONSTRUCTION B",
    title_am: "የመንገድ ግንባታ ለ",
    category: "Road Construction",
    category_am: "የመንገድ ግንባታ",
    image: "/src/assets/images/projects/roadConstruction/roadConstructionB.png",
    location: "Bulehora, Ethiopia",
    client: "Bulehora University",
    value: "N/A",
    description_en: "Curb stone work, asphalt work for university campus roads."
  },

  // 5. Irrigation
  {
    id: 5.1,
    title_en: "IRRIGATION WORK",
    title_am: "የመስኖ ስራ",
    category: "Irrigation",
    category_am: "መስኖ",
    image: "/src/assets/images/projects/irrigation/irrigationWork.png",
    images: [
      "/src/assets/images/projects/irrigation/irrigationWork.png",
      "/src/assets/images/projects/irrigation/irrigationWorksameImage.png"
    ],
    location: "Ethiopia",
    client: "N/A",
    value: "N/A",
    description_en: "Hydraulic engineering and irrigation system design."
  },

  // 6. Bridge Design
  {
    id: 6.1,
    title_en: "BRIDGE PROJECT",
    title_am: "የድልድይ ፕሮጀክት",
    category: "Bridge Design",
    category_am: "የድልድይ ዲዛይን",
    image: "/src/assets/images/projects/bridgeDesign/bridgeDesign.png",
    images: [
      "/src/assets/images/projects/bridgeDesign/bridgeDesign.png",
      "/src/assets/images/projects/bridgeDesign/bridgeDesignsameImage.png"
    ],
    location: "Sidama, Ethiopia",
    client: "Sidama Roads Authority",
    value: "N/A",
    description_en: "Supplementary detail engineering of package-1 bridge projects: Sherero, Burure, Aredo, and Boreshebele bridges."
  },

  // 7. Feasibility Study
  {
    id: 7.1,
    title_en: "HABESHA STEEL PLC.",
    title_am: "ሐበሻ ስቲል ኃ/የተ/የግ/ማ",
    category: "Feasibility Study",
    category_am: "የአዋጭነት ጥናት",
    image: "/src/assets/images/projects/feasibilityStudy/habeshaSteelPlc.png",
    location: "Dukem, Ethiopia",
    client: "HABESHA STEEL PLC",
    value: "300,115,000 ETB",
    description_en: "Feasibility study and design for steel manufacturing facility."
  },
  {
    id: 7.2,
    title_en: "TOMATO FACTORY",
    title_am: "የቲማቲም ፋብሪካ",
    category: "Feasibility Study",
    category_am: "የአዋጭነት ጥናት",
    image: "/src/assets/images/projects/feasibilityStudy/tomatoFactory.png",
    location: "Kombolcha, Ethiopia",
    client: "Nur Belay Business Plc.",
    value: "130,000,000 ETB",
    description_en: "Preparing architectural and landscape design, and engineering drawings for tomato factory."
  },

  // 8. Environmental Assessment
  {
    id: 8.1,
    title_en: "ERSIDO LEMENGO FOOD COMPLEX",
    title_am: "የእርሲዶ ለመንጎ የምግብ ኮምፕሌክስ",
    category: "Environmental Assessment",
    category_am: "የአካባቢ ተፅዕኖ ግምገማ",
    image: "/src/assets/images/projects/environmentalAssesment/ersidoLemengoFoodComplex.png",
    location: "Doyogena Town, Ethiopia",
    client: "Ersido Lemengo Food Complex",
    value: "30,000,000 ETB",
    description_en: "Environmental impact assessment and architectural landscape design."
  },
  {
    id: 8.2,
    title_en: "INSTITUTE OF AFRICA DE DJIBOUTI",
    title_am: "የአፍሪካ ኢንስቲትዩት ጅቡቲ",
    category: "Environmental Assessment",
    category_am: "የአካባቢ ተፅዕኖ ግምገማ",
    image: "/src/assets/images/projects/environmentalAssesment/instituteOfAfricaDeDjbouti.png",
    location: "Rep de Djibouti",
    client: "Institut Africain de Djibouti",
    value: "USD 25,000 (Services)",
    description_en: "Consultancy services for complete architectural master plan and engineering design."
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "HAILEMICHAEL SOLOMON",
    role_en: "GENERAL MANAGER",
    role_am: "ዋና ሥራ አስኪያጅ",
    bio_en: "Leading HH Consulting with over 20 years of expertise in architectural engineering and project management.",
    bio_am: "ኤች ኤች ኮንሰልቲንግን ከ20 ዓመታት በላይ በአርክቴክቸር ኢንጂነሪንግ እና በፕሮጀክት አስተዳደር ልምድ መምራት።",
    photo: hailemichaelSolomonPhoto
  },
  {
    id: 2,
    name: "FEVEN GIRMA",
    role_en: "DEPUTY GENERAL MANAGER",
    role_am: "ምክትል ዋና ሥራ አስኪያጅ",
    bio_en: "Strategic operations leader focused on excellence in project delivery and corporate management.",
    bio_am: "በፕሮጀክት አቅርቦት እና በድርጅት አስተዳደር ላይ ያተኮረ ስልታዊ የሥራ መሪ።",
    photo: fevenGirmaPhoto
  },
  {
    id: 3,
    name: "HELEN",
    role_en: "RECEPTIONIST",
    role_am: "ሪሴፕሽን",
    bio_en: "Ensuring professional communication and welcoming environment for all our clients.",
    bio_am: "ለሁሉም ደንበኞቻችን ሙያዊ ግንኙነትን እና የእንኳን ደህና መጡ አካባቢን ማረጋገጥ።",
    photo: helenPhoto
  },
  {
    id: 4,
    name: "MEKDES GEBRU",
    role_en: "RECEPTIONIST",
    role_am: "ሪሴፕሽን",
    bio_en: "Dedicated to providing top-tier front office support and client coordination.",
    bio_am: "ከፍተኛ ደረጃ የፊት ቢሮ ድጋፍ እና የደንበኛ ቅንጅት ለመስጠት ቁርጠኛ።",
    photo: mekdesGebruPhoto
  },
  {
    id: 5,
    name: "YITBAREK TEKLE",
    role_en: "HUMAN RESOURCE DEPARTMENT",
    role_am: "የሰው ኃይል ክፍል",
    bio_en: "Managing talent and fostering a productive professional culture within the organization.",
    bio_am: "ችሎታን ማስተዳደር እና በድርጅቱ ውስጥ ውጤታማ የባለሙያ ባህልን ማሳደግ።",
    photo: yitbarekTeklePhoto
  },
  {
    id: 6,
    name: "DIBORA MESFIN",
    role_en: "BID DEPARTMENT HEAD",
    role_am: "የጨረታ ክፍል ኃላፊ",
    bio_en: "Expert in bid preparation, analysis, and strategic contract procurement.",
    bio_am: "በጨረታ ዝግጅት፣ ትንተና እና ስልታዊ የኮንትራት ግዥ ባለሙያ።",
    photo: diboraMesfinPhoto,
    imageFit: "contain",
    cardVariant: "wide"
  },
  {
    id: 7,
    name: "HAILEGIORGIS SOLOMON",
    role_en: "IT DEPARTMENT",
    role_am: "የአይቲ ክፍል",
    bio_en: "Driving technological innovation and maintaining robust digital infrastructure.",
    bio_am: "የቴክኖሎጂ ፈጠራን ማሽከርከር እና ጠንካራ የዲጂታል መሠረተ ልማትን መጠበቅ።",
    photo: hailegiorgisSolomonPhoto
  },
  {
    id: 8,
    name: "SUPERVISION & SCAD",
    role_en: "SUPERVISION & CONTRACT ADMINISTRATION",
    role_am: "የሱፐርቪዥን እና ኮንትራት አስተዳደር",
    bio_en: "Ensuring rigorous quality control and professional standards across all construction phases.",
    bio_am: "በሁሉም የግንባታ ደረጃዎች ውስጥ ጥብቅ የጥራት ቁጥጥር እና ሙያዊ ደረጃዎችን ማረጋገጥ።",
    photo: supervisionDepartmentPhoto,
    imageFit: "contain",
    cardVariant: "wide"
  },
  {
    id: 9,
    name: "DESIGN DEPARTMENT",
    role_en: "ARCHITECTURAL & ENGINEERING DESIGN",
    role_am: "የዲዛይን ክፍል",
    bio_en: "A multidisciplinary team of experts delivering innovative and sustainable design solutions.",
    bio_am: "አዳዲስ እና ዘላቂ የዲዛይን መፍትሄዎችን የሚያቀርቡ የባለሙያዎች ቡድን።",
    photo: designDepartmentPhoto
  },
  {
    id: 10,
    name: "PAYMENT DEPARTMENT",
    role_en: "FINANCIAL SERVICES",
    role_am: "የክፍያ ክፍል",
    bio_en: "Managing financial integrity, budgeting, and transaction excellence.",
    bio_am: "የፋይናንስ ታማኝነትን፣ በጀት ማውጣትን እና የግብይት ጥራትን ማስተዳደር።",
    photo: paymentDepartmentPhoto
  }
];

