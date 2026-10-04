export const company = {
  name: "RENT RUN LUXURY",
  parent: "RentRun Travel Company",
  tagline: "Luxury Mobility. Private Journeys. Exceptional Experiences.",
  phonePrimary: "7703956880",
  phoneSecondary: "8178575212",
  whatsapp: "7703956880",
  emailPrimary: "info@rentrun.in",
  emailSecondary: "rentrun2022@gmail.com",
  website: "https://www.rentrun.in/",
  luxuryUrl: "https://luxury.rentrun.in",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Luxury Cars", href: "/luxury-cars" },
  { label: "Private Charter", href: "/private-charter" },
  { label: "Luxury Cruises", href: "/luxury-cruises" },
  { label: "Corporate", href: "/corporate" },
  { label: "Weddings", href: "/weddings" },
  { label: "Concierge", href: "/concierge" },
  { label: "Contact", href: "/contact" },
];

export const experienceCards = [
  {
    title: "Luxury Cars",
    href: "/luxury-cars",
    description: "Chauffeur-driven luxury vehicles for executive travel, VIP movement, airport transfers and private journeys.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Private Charter",
    href: "/private-charter",
    description: "Private aviation and helicopter charter arranged through our verified partner network.",
    image: "/images/aircraft/cessna-citation-cj2/hero.webp",
  },
  {
    title: "Luxury Cruises",
    href: "/luxury-cruises",
    description: "Exceptional voyages aboard leading luxury cruise lines and private yacht experiences.",
    image: "/images/cruises/cordelia-empress-exterior.jpg",
  },
];

export const services = [
  "Luxury Airport Transfers",
  "Corporate Executive Transportation",
  "VIP Transportation",
  "Chauffeur Services",
  "Wedding Luxury Transportation",
  "Celebrity / VIP Movement",
  "Private Road Journeys",
  "Private Jet Charter",
  "Helicopter Charter",
  "Luxury Cruise Experiences",
  "Luxury Concierge",
];

export const destinationList = [
  "Delhi NCR",
  "Jaipur",
  "Udaipur",
  "Agra",
  "Goa",
  "Mumbai",
  "Dubai",
  "UAE",
  "Rajasthan",
  "Himachal Pradesh",
  "Uttarakhand",
  "Kerala",
];

export const luxuryFleet = [
  {
    category: "Luxury Sedan",
    seating: "Up to 3 passengers",
    chauffeur: "Chauffeur-driven",
    luggage: "2 to 3 bags",
    features: ["Complimentary water", "Leather interiors", "Airport assist"],
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Premium SUV",
    seating: "Up to 5 passengers",
    chauffeur: "Available on request",
    luggage: "4 to 5 bags",
    features: ["Power doors", "Extra legroom", "Privacy tint"],
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Executive MPV",
    seating: "Up to 7 passengers",
    chauffeur: "Professional chauffeur",
    luggage: "6 to 8 bags",
    features: ["Group comfort", "Business-ready cabin", "On-time transfers"],
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Luxury Van",
    seating: "Up to 8 passengers",
    chauffeur: "Driver service available",
    luggage: "Multiple bags",
    features: ["Executive seating", "Premium route planning", "Family comfort"],
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
  },
];

export const cruiseOptions = [
  {
    title: "Luxury Cruises",
    destination: "Mediterranean / Arabian Coast",
    duration: "3 to 7 nights",
    guests: "Up to 12 guests",
    highlights: ["Curated experiences", "Luxury cabin selections", "Private transfers"],
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Private Yacht",
    destination: "Coastal escapes",
    duration: "Half day to multi-day",
    guests: "Flexible guest capacity",
    highlights: ["Private hospitality", "Sunset itineraries", "Tailored dining"],
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Celebration Cruises",
    destination: "Destination celebrations",
    duration: "Evening or day charter",
    guests: "Private groups",
    highlights: ["Anniversary moments", "Corporate events", "Curated onboard service"],
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
  },
];

export const processSteps = [
  "Tell Us Your Journey",
  "Our Luxury Concierge Curates Options",
  "Review Vehicle / Charter / Cruise",
  "Confirm Your Experience",
];

export const pageSchema = {
  logo: company.name,
  baseUrl: "https://luxury.rentrun.in",
};

const carImageRoot = "/images/luxury-cars";
const carAvailability = "Availability subject to city, date and vehicle confirmation.";
const requestPrice = "Price on Request";
const carFeatures = ["Chauffeur Driven", "Executive Cabin", "Premium Comfort"];
const carUseCases = ["Business travel", "Airport transfers", "Private city journeys"];

export const luxuryVehicles = [
  {
    name: "Mercedes-Benz E-Class", category: "FLAGSHIP", slug: "mercedes-e-class", seatingCapacity: "Up to 3 passengers", luggage: "Luggage capacity confirmed for the assigned vehicle.",
    features: carFeatures, useCases: carUseCases, heroImage: `${carImageRoot}/mercedes-e-class/hero.webp`, exteriorImage: `${carImageRoot}/mercedes-e-class/exterior.webp`, interiorImage: `${carImageRoot}/mercedes-e-class/interior.webp`, interiorPhotoVerified: false,
  },
  {
    name: "BMW 5 Series", category: "FLAGSHIP", slug: "bmw-5-series", seatingCapacity: "Up to 3 passengers", luggage: "Luggage capacity confirmed for the assigned vehicle.",
    features: carFeatures, useCases: carUseCases, heroImage: `${carImageRoot}/bmw-5-series/hero.webp`, exteriorImage: `${carImageRoot}/bmw-5-series/exterior.webp`, interiorImage: `${carImageRoot}/bmw-5-series/interior.webp`, interiorPhotoVerified: false,
  },
  {
    name: "Audi A6", category: "FLAGSHIP", slug: "audi-a6", seatingCapacity: "Up to 3 passengers", luggage: "Luggage capacity confirmed for the assigned vehicle.",
    features: carFeatures, useCases: carUseCases, heroImage: `${carImageRoot}/audi-a6/hero.webp`, exteriorImage: `${carImageRoot}/audi-a6/exterior.webp`, interiorImage: `${carImageRoot}/audi-a6/interior.webp`, interiorPhotoVerified: false,
  },
  {
    name: "Mercedes-Benz C-Class", category: "BUSINESS CLASS", slug: "mercedes-c-class", seatingCapacity: "Up to 3 passengers", luggage: "Luggage capacity confirmed for the assigned vehicle.",
    features: carFeatures, useCases: carUseCases, heroImage: `${carImageRoot}/mercedes-c-class/hero.webp`, exteriorImage: `${carImageRoot}/mercedes-c-class/exterior.webp`, interiorImage: `${carImageRoot}/mercedes-c-class/interior.webp`, interiorPhotoVerified: false,
  },
  {
    name: "BMW 330Li LWB", category: "BUSINESS CLASS", slug: "bmw-330li-lwb", seatingCapacity: "Up to 3 passengers", luggage: "Luggage capacity confirmed for the assigned vehicle.",
    features: carFeatures, useCases: carUseCases, heroImage: `${carImageRoot}/bmw-330li-lwb/hero.webp`, exteriorImage: `${carImageRoot}/bmw-330li-lwb/exterior.webp`, interiorImage: `${carImageRoot}/bmw-330li-lwb/interior.webp`, interiorPhotoVerified: false,
  },
  {
    name: "Audi A4", category: "BUSINESS CLASS", slug: "audi-a4", seatingCapacity: "Up to 3 passengers", luggage: "Luggage capacity confirmed for the assigned vehicle.",
    features: carFeatures, useCases: carUseCases, heroImage: `${carImageRoot}/audi-a4/hero.webp`, exteriorImage: `${carImageRoot}/audi-a4/exterior.webp`, interiorImage: `${carImageRoot}/audi-a4/interior.webp`, interiorPhotoVerified: true,
  },
  {
    name: "BMW iX1 LWB", category: "SUV COMFORT", slug: "bmw-ix1-lwb", seatingCapacity: "Up to 3 passengers", luggage: "Luggage capacity confirmed for the assigned vehicle.",
    features: carFeatures, useCases: carUseCases, heroImage: `${carImageRoot}/bmw-ix1-lwb/hero.webp`, exteriorImage: `${carImageRoot}/bmw-ix1-lwb/exterior.webp`, interiorImage: `${carImageRoot}/bmw-ix1-lwb/interior.webp`, interiorPhotoVerified: true,
  },
  {
    name: "Audi Q3", category: "SUV COMFORT", slug: "audi-q3", seatingCapacity: "Up to 3 passengers", luggage: "Luggage capacity confirmed for the assigned vehicle.",
    features: carFeatures, useCases: carUseCases, heroImage: `${carImageRoot}/audi-q3/hero.webp`, exteriorImage: `${carImageRoot}/audi-q3/exterior.webp`, interiorImage: `${carImageRoot}/audi-q3/interior.webp`, interiorPhotoVerified: true,
  },
  {
    name: "Mercedes-Benz GLC", category: "SUV COMFORT", slug: "mercedes-glc", seatingCapacity: "Up to 3 passengers", luggage: "Luggage capacity confirmed for the assigned vehicle.",
    features: carFeatures, useCases: carUseCases, heroImage: `${carImageRoot}/mercedes-glc/hero.webp`, exteriorImage: `${carImageRoot}/mercedes-glc/exterior.webp`, interiorImage: `${carImageRoot}/mercedes-glc/interior.webp`, interiorPhotoVerified: true,
  },
  {
    name: "Mercedes-Benz V-Class", category: "LUXURY MPV / EXECUTIVE VAN", slug: "mercedes-v-class", seatingCapacity: "4-6 passengers, depending on configuration", luggage: "Luggage capacity confirmed for the assigned vehicle.",
    chauffeurStatus: "Available on request", cityAvailabilityLabel: "Available in selected cities", features: ["Chauffeur-driven", "Executive cabin", "Premium comfort"],
    useCases: ["VIP airport transfers", "Corporate executives", "Family luxury travel", "Wedding transportation", "Celebrity / VIP movement", "Business delegations", "Premium intercity travel", "Chauffeur-driven private travel"],
    heroImage: `${carImageRoot}/mercedes-v-class/hero.webp`, exteriorImage: `${carImageRoot}/mercedes-v-class/exterior.webp`, interiorImage: `${carImageRoot}/mercedes-v-class/interior.webp`, interiorPhotoVerified: true,
  },
  {
    name: "Toyota Vellfire", category: "LUXURY MPV / EXECUTIVE VAN", slug: "toyota-vellfire", seatingCapacity: "4-6 passengers, depending on configuration", luggage: "Luggage capacity confirmed for the assigned vehicle.",
    chauffeurStatus: "Available on request", cityAvailabilityLabel: "Available in selected cities", features: ["Chauffeur-driven", "Executive cabin", "Premium comfort"],
    useCases: ["VIP airport transfers", "Corporate executives", "Family luxury travel", "Wedding transportation", "Celebrity / VIP movement", "Business delegations", "Premium intercity travel", "Chauffeur-driven private travel"],
    heroImage: `${carImageRoot}/toyota-vellfire/hero.webp`, exteriorImage: `${carImageRoot}/toyota-vellfire/exterior.webp`, interiorImage: `${carImageRoot}/toyota-vellfire/interior.webp`, interiorPhotoVerified: false,
  },
  {
    name: "Lexus LM", category: "LUXURY MPV / EXECUTIVE VAN", slug: "lexus-lm", seatingCapacity: "4-6 passengers, depending on configuration", luggage: "Luggage capacity confirmed for the assigned vehicle.",
    chauffeurStatus: "Available on request", cityAvailabilityLabel: "Available in selected cities", features: ["Chauffeur-driven", "Executive cabin", "Premium comfort"],
    useCases: ["VIP airport transfers", "Corporate executives", "Family luxury travel", "Wedding transportation", "Celebrity / VIP movement", "Business delegations", "Premium intercity travel", "Chauffeur-driven private travel"],
    heroImage: `${carImageRoot}/lexus-lm/hero.webp`, exteriorImage: `${carImageRoot}/lexus-lm/exterior.webp`, interiorImage: `${carImageRoot}/lexus-lm/interior.webp`, interiorPhotoVerified: false,
  },
].map((vehicle) => ({
  ...vehicle,
  availability: carAvailability,
  chauffeurStatus: vehicle.chauffeurStatus ?? "Available on request",
  cityAvailabilityLabel: vehicle.cityAvailabilityLabel ?? carAvailability,
  priceType: requestPrice,
  gallery: [
    { src: vehicle.exteriorImage, alt: `${vehicle.name} exterior`, label: "Exterior" },
    { src: vehicle.interiorImage, alt: vehicle.interiorPhotoVerified ? `${vehicle.name} interior` : `${vehicle.name} interior photo placeholder`, label: vehicle.interiorPhotoVerified ? "Interior" : "Interior preview" },
  ],
  description: `${vehicle.name} with chauffeur service, refined comfort and travel arranged around your itinerary.`,
}));

const cordeliaOceanImage =
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=85";

export const cordeliaCruiseSource = "https://www.cordeliacruises.com/routes";

export const cordeliaShips = [
  {
    brand: "Cordelia Cruises",
    name: "Cordelia Empress",
    slug: "cordelia-empress",
    status: "Sailing Now",
    statusSource: cordeliaCruiseSource,
    heroImage: "/images/cruises/cordelia-empress-exterior.jpg",
    thumbnail: "/images/cruises/cordelia-empress-exterior.jpg",
    imageNote: "Cordelia Cruises photography licensed via Wikimedia Commons under CC BY-SA 4.0.",
    gallery: [
      { src: "/images/cruises/cordelia-empress-exterior.jpg", alt: "Luxury cruise ship exterior at sea", label: "Ship exterior" },
      { src: "/images/cruises/cordelia-empress-suite.jpg", alt: "Elegant cruise suite with ocean view", label: "Suite" },
      { src: "/images/cruises/cordelia-empress-dining.jpg", alt: "Cruise dining venue", label: "Dining" },
      { src: "/images/cruises/cordelia-empress-pool.jpg", alt: "Cruise pool deck at sunrise", label: "Pool deck" },
    ],
    destinations: [] as string[],
    cabinOptions: "Cabin options vary by sailing; confirm with the operator.",
  },
  {
    brand: "Cordelia Cruises",
    name: "Cordelia Sky",
    slug: "cordelia-sky",
    status: "Arriving / Sailing 2026",
    statusSource: cordeliaCruiseSource,
    heroImage: cordeliaOceanImage,
    thumbnail: cordeliaOceanImage,
    imageNote: "Open-ocean atmosphere image; not a depiction of the vessel.",
    gallery: [{ src: cordeliaOceanImage, alt: "Open ocean and a representative cruise atmosphere", label: "Ocean view" }],
    destinations: [] as string[],
    cabinOptions: "Cabin options and configurations to be confirmed by the operator.",
  },
  {
    brand: "Cordelia Cruises",
    name: "Cordelia Sun",
    slug: "cordelia-sun",
    status: "Sailing 2027",
    statusSource: cordeliaCruiseSource,
    heroImage: cordeliaOceanImage,
    thumbnail: cordeliaOceanImage,
    imageNote: "Open-ocean atmosphere image; not a depiction of the vessel.",
    gallery: [{ src: cordeliaOceanImage, alt: "Open ocean and a representative cruise atmosphere", label: "Ocean view" }],
    destinations: [] as string[],
    cabinOptions: "Cabin options and configurations to be confirmed by the operator.",
  },
] as const;

export const cordeliaDestinations = [
  "Mumbai",
  "Goa",
  "Kochi",
  "Lakshadweep",
  "Malé & Colombo",
  "Sri Lanka",
  "Southeast Asia",
  "Vizag",
  "Puducherry",
] as const;

export const cordeliaExperiences = [
  "Entertainment",
  "Accommodation",
  "Dining",
  "Bars & lounges",
  "Activities",
] as const;

export const cordeliaCruiseExperiences = [
  "Goa Cruises",
  "Mumbai Weekend Cruises",
  "Kochi Cruises",
  "Lakshadweep Cruises",
  "Malé & Colombo Cruises",
  "Sri Lanka Cruises",
  "Southeast Asia Cruises",
  "Special / Festival Cruises",
  "Corporate Cruises",
  "Wedding / Celebration Cruises",
] as const;

export type CordeliaSailing = {
  ship: string;
  shipSlug: string;
  cruiseName: string;
  departureDate?: string;
  returnDate?: string;
  departurePort: string;
  ports: string[];
  destinations: string[];
  nights?: number;
  duration?: string;
  availability: string;
  source: string;
  officialUrl: string;
};

export const cordeliaSailings: CordeliaSailing[] = [
  {
    ship: "Cordelia Empress",
    shipSlug: "cordelia-empress",
    cruiseName: "Mumbai Round-Trip Cruise",
    departurePort: "Mumbai",
    ports: ["Mumbai", "Mumbai"],
    destinations: ["Mumbai"],
    availability: "Check Availability",
    source: "Cordelia Cruises",
    officialUrl: cordeliaCruiseSource,
  },
  {
    ship: "Cordelia Empress",
    shipSlug: "cordelia-empress",
    cruiseName: "Mumbai to Goa Cruise",
    departurePort: "Mumbai",
    ports: ["Mumbai", "Goa"],
    destinations: ["Goa"],
    availability: "Check Availability",
    source: "Cordelia Cruises",
    officialUrl: cordeliaCruiseSource,
  },
  {
    ship: "Cordelia Empress",
    shipSlug: "cordelia-empress",
    cruiseName: "Mumbai to Goa Round-Trip Cruise",
    departurePort: "Mumbai",
    ports: ["Mumbai", "Goa", "Mumbai"],
    destinations: ["Goa"],
    availability: "Check Availability",
    source: "Cordelia Cruises",
    officialUrl: cordeliaCruiseSource,
  },
  {
    ship: "Cordelia Empress",
    shipSlug: "cordelia-empress",
    cruiseName: "Mumbai to Kochi Cruise",
    departurePort: "Mumbai",
    ports: ["Mumbai", "Kochi"],
    destinations: ["Kochi"],
    availability: "Check Availability",
    source: "Cordelia Cruises",
    officialUrl: cordeliaCruiseSource,
  },
  {
    ship: "Cordelia Empress",
    shipSlug: "cordelia-empress",
    cruiseName: "Mumbai to Kochi via Agatti Cruise",
    departurePort: "Mumbai",
    ports: ["Mumbai", "Kochi", "Agatti", "Mumbai"],
    destinations: ["Kochi", "Lakshadweep"],
    availability: "Check Availability",
    source: "Cordelia Cruises",
    officialUrl: cordeliaCruiseSource,
  },
  {
    ship: "Cordelia Empress",
    shipSlug: "cordelia-empress",
    cruiseName: "Kochi to Kavaratti Round-Trip Cruise",
    departurePort: "Kochi",
    ports: ["Kochi", "Kavaratti", "Kochi"],
    destinations: ["Kochi", "Lakshadweep"],
    availability: "Check Availability",
    source: "Cordelia Cruises",
    officialUrl: cordeliaCruiseSource,
  },
  {
    ship: "Cordelia Empress",
    shipSlug: "cordelia-empress",
    cruiseName: "Goa to Agatti Cruise",
    departurePort: "Goa",
    ports: ["Goa", "Agatti", "Mumbai"],
    destinations: ["Goa", "Lakshadweep"],
    availability: "Check Availability",
    source: "Cordelia Cruises",
    officialUrl: cordeliaCruiseSource,
  },
];

