export const charterCategories = [
  "Light Jets",
  "Midsize Jets",
  "Super Midsize Jets",
  "Large Jets",
  "Turboprops",
  "Helicopters",
] as const;

export type CharterCategory = (typeof charterCategories)[number];

export type CharterGalleryImage = {
  src: string | null;
  alt: string;
  label: string;
  placeholderText?: string;
};

export type CharterImageCredit = {
  creator: string;
  sourcePage: string;
  license: string;
  licenseUrl: string;
};

export type CharterAircraft = {
  name: string;
  category: CharterCategory;
  passengers: string;
  passengerMaximum: number;
  speed: string;
  range: string;
  baggage: string;
  base: string;
  cabinCrew: string;
  cabin: string;
  heroImage: string | null;
  thumbnail: string | null;
  gallery: CharterGalleryImage[];
  availability: string;
  description: string;
  source: string;
  imageCredit: CharterImageCredit;
  slug: string;
};

const source = "https://jetsetgo.in/fleets";
const availability = "Subject to operator confirmation.";
const cabin = "Luxury cabin; exact layout and amenities vary by aircraft.";

export const charterAircraft: CharterAircraft[] = [
  {
    name: "Cessna Citation CJ2",
    category: "Light Jets",
    passengers: "6-7 passengers",
    passengerMaximum: 7,
    speed: "400 KTS",
    range: "1,450 NM",
    baggage: "74 CUFT",
    base: "New Delhi",
    cabinCrew: "No flight attendant listed",
    cabin,
    heroImage: "/images/aircraft/cessna-citation-cj2/hero.webp",
    thumbnail: "/images/aircraft/cessna-citation-cj2/hero.webp",
    gallery: [
      { src: "/images/aircraft/cessna-citation-cj2/exterior.webp", alt: "Cessna CitationJet CJ2 D-ITMA exterior at Orio al Serio Airport", label: "Exterior" },
      { src: null, alt: "Cessna Citation CJ2 cabin photo unavailable", label: "Cabin", placeholderText: "Model-specific interior photography is not yet licensed" },
    ],
    availability,
    description: "A light-jet option for shorter journeys, arranged around your route and schedule.",
    source: `${source}/572`,
    imageCredit: { creator: "Raimond Spekking", sourcePage: "https://commons.wikimedia.org/wiki/File:Cessna_CitationJet_CJ2_-_D-ITMA_-_Orio_al_Serio_International_Airport-7868.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
    slug: "cessna-citation-cj2",
  },
  {
    name: "Hawker Beechcraft 750",
    category: "Midsize Jets",
    passengers: "Up to 8 passengers",
    passengerMaximum: 8,
    speed: "430 KTS",
    range: "1,970 NM",
    baggage: "79 CUFT",
    base: "New Delhi",
    cabinCrew: "Cabin crew listed",
    cabin,
    heroImage: "/images/aircraft/hawker-beechcraft-750/hero.webp",
    thumbnail: "/images/aircraft/hawker-beechcraft-750/hero.webp",
    gallery: [
      { src: "/images/aircraft/hawker-beechcraft-750/exterior.webp", alt: "Hawker Beechcraft 750 CS-DUB taxiing at Vigo Airport", label: "Exterior" },
      { src: null, alt: "Hawker Beechcraft 750 cabin photo unavailable", label: "Cabin", placeholderText: "Model-specific interior photography is not yet licensed" },
    ],
    availability,
    description: "A midsize cabin option for business and leisure itineraries.",
    source: `${source}/22`,
    imageCredit: { creator: "Bene Riobó", sourcePage: "https://commons.wikimedia.org/wiki/File:CS-DUB_Hawker_750_VGO.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
    slug: "hawker-beechcraft-750",
  },
  {
    name: "Hawker Beechcraft 800XP",
    category: "Midsize Jets",
    passengers: "6-8 passengers, depending on configuration",
    passengerMaximum: 8,
    speed: "430 KTS",
    range: "2,470 NM",
    baggage: "48 CUFT",
    base: "Partner listings include Begumpet, New Delhi and Bengaluru; confirm the assigned aircraft.",
    cabinCrew: "Cabin crew listed",
    cabin,
    heroImage: "/images/aircraft/hawker-beechcraft-800xp/hero.webp",
    thumbnail: "/images/aircraft/hawker-beechcraft-800xp/hero.webp",
    gallery: [
      { src: "/images/aircraft/hawker-beechcraft-800xp/exterior.webp", alt: "Hawker 800XP N800TH at Frederick Municipal Airport", label: "Exterior" },
      { src: null, alt: "Hawker Beechcraft 800XP cabin photo unavailable", label: "Cabin", placeholderText: "Model-specific interior photography is not yet licensed" },
    ],
    availability,
    description: "A midsize aircraft option with capacity varying by configuration.",
    source: `${source}/1357, ${source}/1358, ${source}/1361`,
    imageCredit: { creator: "Acroterion", sourcePage: "https://commons.wikimedia.org/wiki/File:Hawker_800XP_N800TH_FDK_MD1.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
    slug: "hawker-beechcraft-800xp",
  },
  {
    name: "Hawker Beechcraft 900XP",
    category: "Midsize Jets",
    passengers: "Up to 8 passengers",
    passengerMaximum: 8,
    speed: "430 KTS",
    range: "2,700 NM",
    baggage: "50 CUFT",
    base: "New Delhi",
    cabinCrew: "Cabin crew listed",
    cabin,
    heroImage: "/images/aircraft/hawker-beechcraft-900xp/hero.webp",
    thumbnail: "/images/aircraft/hawker-beechcraft-900xp/hero.webp",
    gallery: [
      { src: "/images/aircraft/hawker-beechcraft-900xp/exterior.webp", alt: "Hawker 900XP N799AG at Daytona Beach International Airport", label: "Exterior" },
      { src: null, alt: "Hawker Beechcraft 900XP cabin photo unavailable", label: "Cabin", placeholderText: "Model-specific interior photography is not yet licensed" },
    ],
    availability,
    description: "A midsize jet option for domestic and regional travel, with final range and configuration confirmed for each journey.",
    source: `${source}/1365`,
    imageCredit: { creator: "ZLEA", sourcePage: "https://commons.wikimedia.org/wiki/File:Hawker_900XP_(N799AG,_cn_HA-0027)_(2-17-2023).jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
    slug: "hawker-beechcraft-900xp",
  },
  {
    name: "Gulfstream G200",
    category: "Super Midsize Jets",
    passengers: "8-10 passengers, depending on configuration",
    passengerMaximum: 10,
    speed: "400 KTS",
    range: "3,130 NM",
    baggage: "150 CUFT",
    base: "Chennai",
    cabinCrew: "Cabin crew listed",
    cabin,
    heroImage: "/images/aircraft/gulfstream-g200/hero.webp",
    thumbnail: "/images/aircraft/gulfstream-g200/hero.webp",
    gallery: [
      { src: "/images/aircraft/gulfstream-g200/exterior.webp", alt: "Gulfstream G200 exterior", label: "Exterior" },
      { src: null, alt: "Gulfstream G200 cabin photo unavailable", label: "Cabin", placeholderText: "Model-specific interior photography is not yet licensed" },
    ],
    availability,
    description: "A super-midsize option for longer itineraries and groups needing additional cabin and baggage capacity.",
    source: `${source}/1363`,
    imageCredit: { creator: "The.rud", sourcePage: "https://commons.wikimedia.org/wiki/File:Gulfstream_G200_exterior.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
    slug: "gulfstream-g200",
  },
  {
    name: "Falcon 2000 Easy",
    category: "Large Jets",
    passengers: "Up to 9 passengers",
    passengerMaximum: 9,
    speed: "400 KTS",
    range: "3,800 NM",
    baggage: "134 CUFT",
    base: "New Delhi",
    cabinCrew: "1 cabin crew member listed",
    cabin,
    heroImage: "/images/aircraft/falcon-2000-easy/hero.webp",
    thumbnail: "/images/aircraft/falcon-2000-easy/hero.webp",
    gallery: [
      { src: "/images/aircraft/falcon-2000-easy/exterior.webp", alt: "Dassault Falcon 2000EX EASy M-YJET exterior", label: "Exterior" },
      { src: null, alt: "Falcon 2000 cabin photo unavailable", label: "Cabin", placeholderText: "Model-specific interior photography is not yet licensed" },
    ],
    availability,
    description: "A large-cabin jet option for longer journeys, arranged against the needs of your itinerary.",
    source: `${source}/832`,
    imageCredit: { creator: "Alan Wilson", sourcePage: "https://commons.wikimedia.org/wiki/File:Dassault_Falcon_2000EX_EASy_M-YJET_(7382736666).jpg", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/" },
    slug: "falcon-2000-easy",
  },
  {
    name: "Legacy 600",
    category: "Large Jets",
    passengers: "Up to 13 passengers",
    passengerMaximum: 13,
    speed: "455 KTS",
    range: "3,091 NM",
    baggage: "286 CUFT",
    base: "New Delhi",
    cabinCrew: "1 cabin crew member listed",
    cabin,
    heroImage: "/images/aircraft/legacy-600/hero.webp",
    thumbnail: "/images/aircraft/legacy-600/hero.webp",
    gallery: [
      { src: "/images/aircraft/legacy-600/exterior.webp", alt: "Embraer Legacy 600 at Boryspil International Airport", label: "Exterior" },
      { src: null, alt: "Embraer Legacy 600 cabin photo unavailable", label: "Cabin", placeholderText: "Model-specific interior photography is not yet licensed" },
    ],
    availability,
    description: "A large-jet option for larger groups, with aircraft layout confirmed for each journey.",
    source: `${source}/1356`,
    imageCredit: { creator: "My another account", sourcePage: "https://commons.wikimedia.org/wiki/File:Embraer_Legacy_600.JPG", license: "CC0 1.0 / Public domain", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/" },
    slug: "legacy-600",
  },
  {
    name: "Agusta A109 S",
    category: "Helicopters",
    passengers: "Up to 6 passengers",
    passengerMaximum: 6,
    speed: "155 KTS",
    range: "432 NM",
    baggage: "44 CUFT",
    base: "Mumbai",
    cabinCrew: "No flight attendant listed",
    cabin,
    heroImage: "/images/aircraft/agusta-a109-s/hero.webp",
    thumbnail: "/images/aircraft/agusta-a109-s/hero.webp",
    gallery: [
      { src: "/images/aircraft/agusta-a109-s/exterior.webp", alt: "Agusta A109S VH-XUM taxiing at Wagga Wagga Airport", label: "Exterior" },
      { src: null, alt: "Agusta A109 S cabin photo unavailable", label: "Cabin", placeholderText: "Model-specific interior photography is not yet licensed" },
    ],
    availability,
    description: "A twin-engine helicopter option for direct access, regional movement and tailored aerial journeys.",
    source: `${source}/1370`,
    imageCredit: { creator: "Bidgee", sourcePage: "https://commons.wikimedia.org/wiki/File:Agusta_A109S_(VH-XUM)_taxiing_at_Wagga_Wagga_Airport.jpg", license: "CC BY-SA 3.0 AU", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/au/deed.en" },
    slug: "agusta-a109-s",
  },
];

export const helicopterServices = [
  "Business travel",
  "Airport transfers",
  "Corporate events",
  "Leisure journeys",
  "City tours",
  "Special occasions",
  "Surveys and aerial filming or photography",
] as const;