export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface Course {
  id: number;
  name: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  description: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  priceCategory: '$' | '$$' | '$$$';
  phone: string;
  website: string | null;
  hours: string;
  features: string[];
  amenities: string[];
  image: string;
  photos: string[];
  reviews: Review[];
  coordinates?: { lat: number; lng: number };
  businessStatus: 'open' | 'closed' | 'permanently_closed';
  established?: number;
  holeCount: number;
}

export interface FilterOptions {
  query?: string;
  state?: string;
  priceCategory?: '$' | '$$' | '$$$';
  minRating?: number;
  amenities?: string[];
}

export type SortOption = 'featured' | 'rating' | 'price-low' | 'price-high' | 'name' | 'newest';

export const courses: Course[] = [
  {
    id: 1,
    name: "Adventure Golf Paradise",
    slug: "adventure-golf-paradise",
    address: "8543 International Drive",
    city: "Orlando",
    state: "FL",
    zipCode: "32819",
    description: "A tropical-themed mini golf course featuring waterfalls, caves, and exotic plants. Perfect for families looking for an exciting adventure through 18 challenging holes.",
    rating: 4.8,
    reviewCount: 342,
    priceRange: "$12-15",
    priceCategory: "$$",
    phone: "(407) 555-0123",
    website: "https://adventuregolfparadise.com",
    hours: "Mon-Thu: 10am-9pm, Fri-Sun: 10am-11pm",
    features: ["Waterfalls", "Cave Holes", "Tropical Theme", "Family Friendly", "Parking Available"],
    amenities: ["Parking", "Restrooms", "Snack Bar", "Gift Shop", "Air Conditioning"],
    image: "/images/adventure-golf.jpg",
    photos: ["/images/adventure-golf.jpg", "/images/adventure-golf-2.jpg", "/images/adventure-golf-3.jpg"],
    reviews: [
      {
        id: 1,
        author: "Sarah M.",
        rating: 5,
        comment: "Amazing course! The waterfall hole was incredible and the kids loved the tropical theme. Well-maintained and great value for money.",
        date: "2024-08-15",
        helpful: 12
      },
      {
        id: 2,
        author: "Mike R.",
        rating: 4,
        comment: "Really enjoyed this course. The cave holes were challenging and fun. Only wish it wasn't so crowded on weekends.",
        date: "2024-08-08",
        helpful: 8
      }
    ],
    coordinates: { lat: 28.4707, lng: -81.4678 },
    businessStatus: "open",
    established: 2018,
    holeCount: 18
  },
  {
    id: 2,
    name: "Pirate's Cove Mini Golf",
    slug: "pirates-cove-mini-golf",
    address: "2001 21st Avenue North",
    city: "Myrtle Beach",
    state: "SC",
    zipCode: "29577",
    description: "Ahoy mateys! Navigate through pirate ships, treasure caves, and sea battles in this swashbuckling adventure. Features two 18-hole courses with different difficulty levels.",
    rating: 4.6,
    reviewCount: 287,
    priceRange: "$10-13",
    priceCategory: "$",
    phone: "(843) 555-0456",
    website: "https://piratescovegolf.com",
    hours: "Daily: 9am-10pm",
    features: ["Pirate Theme", "Two Courses", "Treasure Caves", "Photo Opportunities", "Gift Shop"],
    amenities: ["Parking", "Restrooms", "Gift Shop", "Arcade", "Party Packages"],
    image: "/images/pirates-cove.jpg",
    photos: ["/images/pirates-cove.jpg", "/images/pirates-cove-2.jpg", "/images/pirates-cove-3.jpg"],
    reviews: [
      {
        id: 3,
        author: "Jessica T.",
        rating: 5,
        comment: "Both courses were fantastic! The pirate theme is so detailed and fun. Great for the whole family.",
        date: "2024-08-12",
        helpful: 15
      }
    ],
    coordinates: { lat: 33.7174, lng: -78.8792 },
    businessStatus: "open",
    established: 1995,
    holeCount: 36
  },
  {
    id: 3,
    name: "Glow-in-the-Dark Galaxy Golf",
    slug: "galaxy-golf",
    address: "3200 Las Vegas Boulevard South",
    city: "Las Vegas",
    state: "NV",
    zipCode: "89109",
    description: "An otherworldly experience with glow-in-the-dark obstacles and cosmic themes. Play among planets, stars, and aliens in this unique indoor mini golf adventure.",
    rating: 4.9,
    reviewCount: 451,
    priceRange: "$15-18",
    priceCategory: "$$$",
    phone: "(702) 555-0789",
    website: "https://galaxygolf.com",
    hours: "Sun-Thu: 12pm-10pm, Fri-Sat: 12pm-12am",
    features: ["Glow-in-the-Dark", "Indoor Course", "Space Theme", "UV Lighting", "Air Conditioned"],
    amenities: ["Air Conditioning", "Restrooms", "Party Packages", "Group Discounts", "Arcade"],
    image: "/images/galaxy-golf.jpg",
    photos: ["/images/galaxy-golf.jpg", "/images/galaxy-golf-2.jpg", "/images/galaxy-golf-3.jpg"],
    reviews: [
      {
        id: 4,
        author: "Carlos D.",
        rating: 5,
        comment: "Mind-blowing experience! The glow effects were incredible and the space theme was perfectly executed. Highly recommend!",
        date: "2024-08-10",
        helpful: 23
      }
    ],
    coordinates: { lat: 36.1015, lng: -115.1739 },
    businessStatus: "open",
    established: 2019,
    holeCount: 18
  },
  {
    id: 4,
    name: "Windmill Gardens Golf",
    slug: "windmill-gardens-golf",
    address: "2210 W Highway 76",
    city: "Branson",
    state: "MO",
    zipCode: "65616",
    description: "A classic mini golf experience with beautiful gardens, traditional windmills, and peaceful water features. Perfect for a relaxing round with friends and family.",
    rating: 4.4,
    reviewCount: 189,
    priceRange: "$8-12",
    priceCategory: "$",
    phone: "(417) 555-0321",
    website: "https://windmillgardens.com",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-8pm",
    features: ["Garden Setting", "Windmills", "Water Features", "Classic Design", "Scenic Views"],
    amenities: ["Parking", "Restrooms", "Snack Bar", "Picnic Area", "Garden Views"],
    image: "/images/windmill-gardens.jpg",
    photos: ["/images/windmill-gardens.jpg", "/images/windmill-gardens-2.jpg"],
    reviews: [
      {
        id: 5,
        author: "Linda P.",
        rating: 4,
        comment: "Beautiful peaceful course with lovely landscaping. Great for a relaxing afternoon with the family.",
        date: "2024-08-05",
        helpful: 7
      }
    ],
    coordinates: { lat: 36.6437, lng: -93.2982 },
    businessStatus: "open",
    established: 2001,
    holeCount: 18
  },
  {
    id: 5,
    name: "Dinosaur Adventure Golf",
    slug: "dinosaur-adventure-golf",
    address: "903 Parkway",
    city: "Gatlinburg",
    state: "TN",
    zipCode: "37738",
    description: "Step back in time to the age of dinosaurs! Navigate around life-sized T-Rex, Triceratops, and other prehistoric creatures on this Jurassic-themed course.",
    rating: 4.7,
    reviewCount: 298,
    priceRange: "$11-14",
    priceCategory: "$$",
    phone: "(865) 555-0654",
    website: "https://dinoadventure.com",
    hours: "Daily: 9am-9pm (seasonal hours may vary)",
    features: ["Dinosaur Theme", "Life-sized Models", "Educational", "Family Fun", "Mountain Views"],
    amenities: ["Parking", "Restrooms", "Gift Shop", "Photo Opportunities", "Educational Info"],
    image: "/images/dinosaur-golf.jpg",
    photos: ["/images/dinosaur-golf.jpg", "/images/dinosaur-golf-2.jpg", "/images/dinosaur-golf-3.jpg"],
    reviews: [
      {
        id: 6,
        author: "David W.",
        rating: 5,
        comment: "Kids absolutely loved the dinosaurs! Very realistic models and educational too. Great family fun.",
        date: "2024-08-14",
        helpful: 18
      }
    ],
    coordinates: { lat: 35.7143, lng: -83.5102 },
    businessStatus: "open",
    established: 2005,
    holeCount: 18
  },
  {
    id: 6,
    name: "Castle Kingdom Mini Golf",
    slug: "castle-kingdom-mini-golf",
    address: "5005 Williamsburg Landing Drive",
    city: "Williamsburg",
    state: "VA",
    zipCode: "23185",
    description: "Enter a medieval kingdom complete with castles, dragons, and knights. This enchanting course features elaborate castle structures and fairy tale elements.",
    rating: 4.5,
    reviewCount: 234,
    priceRange: "$13-16",
    priceCategory: "$$",
    phone: "(757) 555-0987",
    website: "https://castlekingdom.com",
    hours: "Tue-Sun: 11am-9pm, Mon: Closed",
    features: ["Medieval Theme", "Castle Structures", "Dragon Obstacles", "Fairy Tale Setting", "Historic Area"],
    amenities: ["Parking", "Restrooms", "Gift Shop", "Party Packages", "Historic Tours"],
    image: "/images/castle-kingdom.jpg",
    photos: ["/images/castle-kingdom.jpg", "/images/castle-kingdom-2.jpg"],
    reviews: [
      {
        id: 7,
        author: "Emily S.",
        rating: 4,
        comment: "Magical medieval atmosphere! The castle holes were challenging and beautifully designed.",
        date: "2024-08-09",
        helpful: 11
      }
    ],
    coordinates: { lat: 37.2707, lng: -76.7075 },
    businessStatus: "open",
    established: 1998,
    holeCount: 18
  },
  {
    id: 7,
    name: "Tropical Lagoon Golf",
    slug: "tropical-lagoon-golf",
    address: "6000 Overseas Highway",
    city: "Key West",
    state: "FL",
    zipCode: "33040",
    description: "Experience paradise with this tropical lagoon-themed course featuring tiki huts, palm trees, and crystal blue water features. A slice of the Caribbean in mini golf form.",
    rating: 4.3,
    reviewCount: 156,
    priceRange: "$14-17",
    priceCategory: "$$",
    phone: "(305) 555-0147",
    website: "https://tropicallagoongolf.com",
    hours: "Daily: 10am-11pm",
    features: ["Tropical Theme", "Tiki Huts", "Water Lagoons", "Palm Trees", "Ocean Breeze"],
    amenities: ["Parking", "Restrooms", "Tiki Bar", "Ocean Views", "Tropical Drinks"],
    image: "/images/tropical-lagoon.jpg",
    photos: ["/images/tropical-lagoon.jpg", "/images/tropical-lagoon-2.jpg"],
    reviews: [
      {
        id: 8,
        author: "Maria L.",
        rating: 4,
        comment: "Beautiful tropical setting with great ocean views. A perfect way to spend an evening in Key West!",
        date: "2024-08-07",
        helpful: 9
      }
    ],
    coordinates: { lat: 24.5465, lng: -81.7884 },
    businessStatus: "open",
    established: 2010,
    holeCount: 18
  },
  {
    id: 8,
    name: "Wild West Shootout Golf",
    slug: "wild-west-shootout-golf",
    address: "677 Main Street",
    city: "Deadwood",
    state: "SD",
    zipCode: "57732",
    description: "Partner, saddle up for an Old West adventure! Complete with saloons, gold mines, and shootout scenes. This course brings the frontier spirit to mini golf.",
    rating: 4.2,
    reviewCount: 98,
    priceRange: "$9-12",
    priceCategory: "$",
    phone: "(605) 555-0258",
    website: "https://wildwestgolf.com",
    hours: "May-Oct: Daily 10am-8pm, Nov-Apr: Weekends only",
    features: ["Wild West Theme", "Saloon Holes", "Gold Mine", "Historic Setting", "Seasonal Operation"],
    amenities: ["Parking", "Restrooms", "Gift Shop", "Historic Tours", "Mining Simulator"],
    image: "/images/wild-west.jpg",
    photos: ["/images/wild-west.jpg", "/images/wild-west-2.jpg"],
    reviews: [
      {
        id: 9,
        author: "Robert K.",
        rating: 4,
        comment: "Authentic Wild West theme in historic Deadwood. Fun course with great attention to detail!",
        date: "2024-07-28",
        helpful: 6
      }
    ],
    coordinates: { lat: 44.3766, lng: -103.7296 },
    businessStatus: "open",
    established: 1992,
    holeCount: 18
  },
  {
    id: 9,
    name: "Atlantis Adventure Mini Golf",
    slug: "atlantis-adventure-mini-golf",
    address: "1255 North Highland Avenue",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90038",
    description: "Dive into the lost city of Atlantis with underwater-themed holes, sea creatures, and ancient ruins. This course features elaborate water effects and mythical sea adventures.",
    rating: 4.6,
    reviewCount: 378,
    priceRange: "$16-20",
    priceCategory: "$$$",
    phone: "(323) 555-0901",
    website: "https://atlantisadventuregolf.com",
    hours: "Daily: 10am-10pm",
    features: ["Underwater Theme", "Water Effects", "Sea Creatures", "Ancient Ruins", "Sound Effects"],
    amenities: ["Parking", "Restrooms", "Snack Bar", "Gift Shop", "Group Packages"],
    image: "/images/atlantis-golf.jpg",
    photos: ["/images/atlantis-golf.jpg", "/images/atlantis-golf-2.jpg", "/images/atlantis-golf-3.jpg"],
    reviews: [
      {
        id: 10,
        author: "Jennifer H.",
        rating: 5,
        comment: "Incredible underwater theme with amazing water features! The kids were mesmerized by the sea creatures.",
        date: "2024-08-16",
        helpful: 21
      }
    ],
    coordinates: { lat: 34.0928, lng: -118.3287 },
    businessStatus: "open",
    established: 2020,
    holeCount: 18
  },
  {
    id: 10,
    name: "Mountain Peak Adventure Golf",
    slug: "mountain-peak-adventure-golf",
    address: "4501 Dollywood Parks Boulevard",
    city: "Pigeon Forge",
    state: "TN",
    zipCode: "37863",
    description: "Experience the thrill of mountain adventures with elevation changes, log cabins, and wildlife themes. This challenging course winds through a miniature Smoky Mountain landscape.",
    rating: 4.5,
    reviewCount: 267,
    priceRange: "$12-16",
    priceCategory: "$$",
    phone: "(865) 555-1001",
    website: "https://mountainpeakgolf.com",
    hours: "Daily: 9am-9pm (weather permitting)",
    features: ["Mountain Theme", "Elevation Changes", "Log Cabins", "Wildlife", "Scenic Views"],
    amenities: ["Parking", "Restrooms", "Mountain Views", "Photo Opportunities", "Weather Shelter"],
    image: "/images/mountain-peak.jpg",
    photos: ["/images/mountain-peak.jpg", "/images/mountain-peak-2.jpg"],
    reviews: [
      {
        id: 11,
        author: "Mark T.",
        rating: 4,
        comment: "Great mountain-themed course with beautiful views. Some holes are quite challenging with the elevation changes!",
        date: "2024-08-13",
        helpful: 14
      }
    ],
    coordinates: { lat: 35.7888, lng: -83.5532 },
    businessStatus: "open",
    established: 2003,
    holeCount: 18
  },
  {
    id: 11,
    name: "Neon Nights Mini Golf",
    slug: "neon-nights-mini-golf",
    address: "2930 West Sahara Avenue",
    city: "Las Vegas",
    state: "NV",
    zipCode: "89102",
    description: "A vibrant neon-lit course that comes alive at night with blacklight effects, disco music, and retro 80s themes. Dance your way through 18 electrifying holes.",
    rating: 4.4,
    reviewCount: 189,
    priceRange: "$18-22",
    priceCategory: "$$$",
    phone: "(702) 555-1102",
    website: "https://neonnightsgolf.com",
    hours: "Wed-Sun: 6pm-2am (21+ after 10pm)",
    features: ["Neon Lights", "80s Theme", "Blacklight", "Dance Music", "Adult Hours"],
    amenities: ["Bar", "Restrooms", "Dance Floor", "Photo Booth", "Group Reservations"],
    image: "/images/neon-nights.jpg",
    photos: ["/images/neon-nights.jpg", "/images/neon-nights-2.jpg"],
    reviews: [
      {
        id: 12,
        author: "Ashley R.",
        rating: 5,
        comment: "So much fun! Perfect for a night out with friends. The neon effects and music create an amazing atmosphere.",
        date: "2024-08-11",
        helpful: 19
      }
    ],
    coordinates: { lat: 36.1447, lng: -115.2037 },
    businessStatus: "open",
    established: 2021,
    holeCount: 18
  },
  {
    id: 12,
    name: "Boardwalk Mini Golf & Ice Cream",
    slug: "boardwalk-mini-golf-ice-cream",
    address: "1000 Boardwalk",
    city: "Ocean City",
    state: "NJ",
    zipCode: "08226",
    description: "Classic boardwalk mini golf with ocean views and traditional seaside charm. Enjoy ice cream after your round while watching the sunset over the Atlantic.",
    rating: 4.1,
    reviewCount: 412,
    priceRange: "$10-14",
    priceCategory: "$$",
    phone: "(609) 555-1203",
    website: "https://boardwalkminigolf.com",
    hours: "Daily: 10am-11pm (seasonal)",
    features: ["Boardwalk Setting", "Ocean Views", "Classic Design", "Ice Cream Shop", "Sunset Views"],
    amenities: ["Ocean Views", "Ice Cream", "Restrooms", "Arcade", "Souvenir Shop"],
    image: "/images/boardwalk-golf.jpg",
    photos: ["/images/boardwalk-golf.jpg", "/images/boardwalk-golf-2.jpg"],
    reviews: [
      {
        id: 13,
        author: "Tom B.",
        rating: 4,
        comment: "Classic boardwalk experience! Great ocean views and the ice cream is delicious. Perfect family fun.",
        date: "2024-08-09",
        helpful: 16
      }
    ],
    coordinates: { lat: 38.9351, lng: -74.4555 },
    businessStatus: "open",
    established: 1988,
    holeCount: 18
  },
  {
    id: 13,
    name: "Space Station Alpha Golf",
    slug: "space-station-alpha-golf",
    address: "6000 Universal Boulevard",
    city: "Orlando",
    state: "FL",
    zipCode: "32819",
    description: "Board a space station for an intergalactic mini golf adventure. Navigate through zero-gravity simulators, alien worlds, and futuristic space technology.",
    rating: 4.8,
    reviewCount: 523,
    priceRange: "$18-24",
    priceCategory: "$$$",
    phone: "(407) 555-1304",
    website: "https://spacestationalpha.com",
    hours: "Daily: 9am-11pm",
    features: ["Space Station Theme", "Zero Gravity Effects", "Alien Worlds", "Interactive Technology", "Futuristic Design"],
    amenities: ["Air Conditioning", "Restrooms", "Space Gift Shop", "Photo Opportunities", "Educational Exhibits"],
    image: "/images/space-station.jpg",
    photos: ["/images/space-station.jpg", "/images/space-station-2.jpg", "/images/space-station-3.jpg"],
    reviews: [
      {
        id: 14,
        author: "Alex P.",
        rating: 5,
        comment: "Mind-blowing space experience! The technology and effects are incredible. Felt like we were really in space!",
        date: "2024-08-17",
        helpful: 31
      }
    ],
    coordinates: { lat: 28.4743, lng: -81.4679 },
    businessStatus: "open",
    established: 2022,
    holeCount: 20
  },
  {
    id: 14,
    name: "Enchanted Forest Golf",
    slug: "enchanted-forest-golf",
    address: "8901 Forest Road",
    city: "Asheville",
    state: "NC",
    zipCode: "28803",
    description: "Journey through a magical forest filled with fairy houses, talking trees, and mythical creatures. This whimsical course blends seamlessly with the natural mountain forest.",
    rating: 4.7,
    reviewCount: 298,
    priceRange: "$14-18",
    priceCategory: "$$",
    phone: "(828) 555-1405",
    website: "https://enchantedforestgolf.com",
    hours: "Daily: 10am-8pm (extended summer hours)",
    features: ["Forest Setting", "Fairy Houses", "Talking Trees", "Mythical Creatures", "Natural Integration"],
    amenities: ["Nature Trails", "Restrooms", "Picnic Area", "Gift Shop", "Educational Info"],
    image: "/images/enchanted-forest.jpg",
    photos: ["/images/enchanted-forest.jpg", "/images/enchanted-forest-2.jpg"],
    reviews: [
      {
        id: 15,
        author: "Rachel M.",
        rating: 5,
        comment: "Absolutely magical! The fairy houses and talking trees delighted our kids. Beautiful natural setting in the mountains.",
        date: "2024-08-06",
        helpful: 25
      }
    ],
    coordinates: { lat: 35.5951, lng: -82.5515 },
    businessStatus: "open",
    established: 2007,
    holeCount: 18
  },
  {
    id: 15,
    name: "Retro Arcade Mini Golf",
    slug: "retro-arcade-mini-golf",
    address: "4455 East Tropicana Avenue",
    city: "Las Vegas",
    state: "NV",
    zipCode: "89121",
    description: "Step back into the golden age of video games with arcade-themed mini golf. Each hole represents classic games like Pac-Man, Space Invaders, and Donkey Kong.",
    rating: 4.3,
    reviewCount: 167,
    priceRange: "$15-19",
    priceCategory: "$$$",
    phone: "(702) 555-1506",
    website: "https://retroarcadegolf.com",
    hours: "Daily: 11am-12am",
    features: ["Arcade Theme", "Video Game Holes", "Retro Music", "Interactive Elements", "High Score Board"],
    amenities: ["Arcade Games", "Restrooms", "Snack Bar", "Prize Counter", "Party Packages"],
    image: "/images/retro-arcade.jpg",
    photos: ["/images/retro-arcade.jpg", "/images/retro-arcade-2.jpg"],
    reviews: [
      {
        id: 16,
        author: "Kevin L.",
        rating: 4,
        comment: "Nostalgic fun! Loved seeing all the classic video game references. Great for anyone who grew up in the arcade era.",
        date: "2024-08-04",
        helpful: 13
      }
    ],
    coordinates: { lat: 36.0997, lng: -115.1181 },
    businessStatus: "open",
    established: 2019,
    holeCount: 18
  },
  {
    id: 16,
    name: "Lighthouse Point Golf",
    slug: "lighthouse-point-golf",
    address: "2200 Lighthouse Drive",
    city: "Cape Cod",
    state: "MA",
    zipCode: "02633",
    description: "Navigate coastal challenges around a historic lighthouse with ocean views, rocky shores, and maritime themes. Features authentic New England seaside charm.",
    rating: 4.4,
    reviewCount: 203,
    priceRange: "$13-17",
    priceCategory: "$$",
    phone: "(508) 555-1607",
    website: "https://lighthousepointgolf.com",
    hours: "May-Oct: Daily 9am-9pm, Nov-Apr: Weekends only",
    features: ["Lighthouse Theme", "Ocean Views", "Maritime Decor", "Rocky Shores", "Historic Charm"],
    amenities: ["Ocean Views", "Restrooms", "Gift Shop", "Lighthouse Tours", "Scenic Walkway"],
    image: "/images/lighthouse-point.jpg",
    photos: ["/images/lighthouse-point.jpg", "/images/lighthouse-point-2.jpg"],
    reviews: [
      {
        id: 17,
        author: "Nancy W.",
        rating: 4,
        comment: "Beautiful seaside location with stunning ocean views. The lighthouse is a perfect backdrop for photos!",
        date: "2024-08-02",
        helpful: 18
      }
    ],
    coordinates: { lat: 41.6688, lng: -70.2962 },
    businessStatus: "open",
    established: 1985,
    holeCount: 18
  },
  {
    id: 17,
    name: "Wild Safari Adventure",
    slug: "wild-safari-adventure",
    address: "7890 Safari Boulevard",
    city: "San Diego",
    state: "CA",
    zipCode: "92108",
    description: "Embark on an African safari without leaving California! Navigate through jungles, around elephants, and past roaring lions on this wildlife-themed adventure course.",
    rating: 4.6,
    reviewCount: 331,
    priceRange: "$16-20",
    priceCategory: "$$$",
    phone: "(619) 555-1708",
    website: "https://wildsafarigolf.com",
    hours: "Daily: 9am-10pm",
    features: ["Safari Theme", "Animal Models", "Jungle Setting", "Sound Effects", "Educational Info"],
    amenities: ["Parking", "Restrooms", "Safari Gift Shop", "Photo Opportunities", "Educational Exhibits"],
    image: "/images/safari-golf.jpg",
    photos: ["/images/safari-golf.jpg", "/images/safari-golf-2.jpg", "/images/safari-golf-3.jpg"],
    reviews: [
      {
        id: 18,
        author: "Marcus S.",
        rating: 5,
        comment: "Amazing safari experience! The animal models are so realistic and the jungle setting is incredibly detailed.",
        date: "2024-08-15",
        helpful: 27
      }
    ],
    coordinates: { lat: 32.7338, lng: -117.1933 },
    businessStatus: "open",
    established: 2015,
    holeCount: 18
  },
  {
    id: 18,
    name: "Candy Land Mini Golf",
    slug: "candy-land-mini-golf",
    address: "1234 Sweet Street",
    city: "Hershey",
    state: "PA",
    zipCode: "17033",
    description: "A sweet adventure through a candy-themed wonderland! Navigate past giant lollipops, chocolate rivers, and gummy bear obstacles in this sugary paradise.",
    rating: 4.2,
    reviewCount: 445,
    priceRange: "$11-15",
    priceCategory: "$$",
    phone: "(717) 555-1809",
    website: "https://candylandminigolf.com",
    hours: "Daily: 10am-9pm",
    features: ["Candy Theme", "Sweet Decorations", "Colorful Design", "Photo Opportunities", "Family Fun"],
    amenities: ["Candy Shop", "Restrooms", "Party Packages", "Birthday Specials", "Sweet Treats"],
    image: "/images/candy-land.jpg",
    photos: ["/images/candy-land.jpg", "/images/candy-land-2.jpg"],
    reviews: [
      {
        id: 19,
        author: "Lisa K.",
        rating: 4,
        comment: "Perfect for kids! The candy theme is adorable and the course is well-maintained. Don't miss the candy shop!",
        date: "2024-08-08",
        helpful: 22
      }
    ],
    coordinates: { lat: 40.2732, lng: -76.6505 },
    businessStatus: "open",
    established: 2012,
    holeCount: 18
  },
  {
    id: 19,
    name: "Volcano Island Adventure",
    slug: "volcano-island-adventure",
    address: "5555 Volcanic Way",
    city: "Honolulu",
    state: "HI",
    zipCode: "96815",
    description: "Experience the power of an active volcano on this tropical island-themed course. Navigate lava flows, tropical plants, and tiki statues in paradise.",
    rating: 4.9,
    reviewCount: 387,
    priceRange: "$20-25",
    priceCategory: "$$$",
    phone: "(808) 555-1910",
    website: "https://volcanoislandgolf.com",
    hours: "Daily: 9am-10pm",
    features: ["Volcano Theme", "Tropical Setting", "Lava Effects", "Tiki Statues", "Island Music"],
    amenities: ["Ocean Breeze", "Restrooms", "Tropical Drinks", "Hawaiian Gift Shop", "Luau Packages"],
    image: "/images/volcano-island.jpg",
    photos: ["/images/volcano-island.jpg", "/images/volcano-island-2.jpg", "/images/volcano-island-3.jpg"],
    reviews: [
      {
        id: 20,
        author: "Brian H.",
        rating: 5,
        comment: "Absolutely incredible! The volcano effects and tropical atmosphere make you feel like you're in paradise. A must-do in Hawaii!",
        date: "2024-08-14",
        helpful: 35
      }
    ],
    coordinates: { lat: 21.2777, lng: -157.8639 },
    businessStatus: "open",
    established: 2018,
    holeCount: 18
  },
  {
    id: 20,
    name: "Steampunk Factory Golf",
    slug: "steampunk-factory-golf",
    address: "3000 Industrial Parkway",
    city: "Detroit",
    state: "MI",
    zipCode: "48201",
    description: "Enter a Victorian-era industrial wonderland with steam-powered obstacles, copper pipes, and mechanical contraptions. This unique course celebrates Detroit's industrial heritage.",
    rating: 4.5,
    reviewCount: 176,
    priceRange: "$14-18",
    priceCategory: "$$",
    phone: "(313) 555-2011",
    website: "https://steampunkgolf.com",
    hours: "Thu-Sun: 12pm-10pm",
    features: ["Steampunk Theme", "Industrial Design", "Steam Effects", "Mechanical Obstacles", "Victorian Era"],
    amenities: ["Indoor Climate", "Restrooms", "Gear Shop", "Educational Exhibits", "Group Tours"],
    image: "/images/steampunk-factory.jpg",
    photos: ["/images/steampunk-factory.jpg", "/images/steampunk-factory-2.jpg"],
    reviews: [
      {
        id: 21,
        author: "Michelle D.",
        rating: 4,
        comment: "Unique and creative theme! The steampunk aesthetic is perfectly executed. Great for adults who want something different.",
        date: "2024-08-01",
        helpful: 14
      }
    ],
    coordinates: { lat: 42.3301, lng: -83.0458 },
    businessStatus: "open",
    established: 2020,
    holeCount: 18
  },
  {
    id: 21,
    name: "Ancient Egypt Mystery Golf",
    slug: "ancient-egypt-mystery-golf",
    address: "7777 Pyramid Drive",
    city: "Phoenix",
    state: "AZ",
    zipCode: "85016",
    description: "Uncover the mysteries of ancient Egypt as you putt through pyramids, sphinx statues, and pharaoh tombs. This archaeological adventure brings history to life.",
    rating: 4.8,
    reviewCount: 289,
    priceRange: "$15-19",
    priceCategory: "$$$",
    phone: "(602) 555-2112",
    website: "https://egyptmysterygolf.com",
    hours: "Daily: 10am-9pm (extended summer hours)",
    features: ["Egyptian Theme", "Pyramid Obstacles", "Sphinx Statues", "Hieroglyphics", "Archaeological Elements"],
    amenities: ["Air Conditioning", "Restrooms", "Egyptian Gift Shop", "Educational Info", "Photo Opportunities"],
    image: "/images/egypt-golf.jpg",
    photos: ["/images/egypt-golf.jpg", "/images/egypt-golf-2.jpg", "/images/egypt-golf-3.jpg"],
    reviews: [
      {
        id: 22,
        author: "Steven R.",
        rating: 5,
        comment: "Fascinating Egyptian theme with incredible attention to historical detail. Educational and fun for the whole family!",
        date: "2024-08-12",
        helpful: 28
      }
    ],
    coordinates: { lat: 33.4734, lng: -112.0740 },
    businessStatus: "open",
    established: 2016,
    holeCount: 18
  },
  {
    id: 22,
    name: "Cosmic Bowling & Mini Golf",
    slug: "cosmic-bowling-mini-golf",
    address: "8888 Cosmic Lane",
    city: "Austin",
    state: "TX",
    zipCode: "78704",
    description: "A unique combination of cosmic bowling and space-themed mini golf. Features glow-in-the-dark elements, cosmic music, and an otherworldly atmosphere.",
    rating: 4.1,
    reviewCount: 234,
    priceRange: "$12-16",
    priceCategory: "$$",
    phone: "(512) 555-2213",
    website: "https://cosmicbowlinggolf.com",
    hours: "Sun-Thu: 4pm-11pm, Fri-Sat: 4pm-1am",
    features: ["Cosmic Theme", "Glow Effects", "Bowling Combo", "Space Music", "Black Lights"],
    amenities: ["Bowling Alley", "Restrooms", "Snack Bar", "Arcade", "Party Packages"],
    image: "/images/cosmic-bowling.jpg",
    photos: ["/images/cosmic-bowling.jpg", "/images/cosmic-bowling-2.jpg"],
    reviews: [
      {
        id: 23,
        author: "Jordan T.",
        rating: 4,
        comment: "Great combo venue! Mini golf was fun and the cosmic bowling afterward was a blast. Perfect for date night!",
        date: "2024-08-05",
        helpful: 17
      }
    ],
    coordinates: { lat: 30.2500, lng: -97.7500 },
    businessStatus: "open",
    established: 2014,
    holeCount: 18
  },
  {
    id: 23,
    name: "Haunted Mansion Golf",
    slug: "haunted-mansion-golf",
    address: "1313 Spooky Street",
    city: "Salem",
    state: "MA",
    zipCode: "01970",
    description: "Dare to enter this spooky Victorian mansion filled with ghosts, goblins, and supernatural surprises. This haunted course is perfect for thrill-seekers year-round.",
    rating: 4.4,
    reviewCount: 198,
    priceRange: "$16-20",
    priceCategory: "$$$",
    phone: "(978) 555-2314",
    website: "https://hauntedmansiongolf.com",
    hours: "Daily: 12pm-10pm (extended Halloween hours)",
    features: ["Haunted Theme", "Victorian Mansion", "Spooky Effects", "Supernatural Elements", "Year-Round Scares"],
    amenities: ["Indoor Course", "Restrooms", "Horror Gift Shop", "Photo Opportunities", "Halloween Events"],
    image: "/images/haunted-mansion.jpg",
    photos: ["/images/haunted-mansion.jpg", "/images/haunted-mansion-2.jpg"],
    reviews: [
      {
        id: 24,
        author: "Amanda G.",
        rating: 4,
        comment: "Perfectly spooky atmosphere! Not too scary for kids but still thrilling for adults. Great Halloween vibes year-round.",
        date: "2024-07-30",
        helpful: 21
      }
    ],
    coordinates: { lat: 42.5195, lng: -70.8967 },
    businessStatus: "open",
    established: 2008,
    holeCount: 18
  },
  {
    id: 24,
    name: "Wild West Train Robbery Golf",
    slug: "wild-west-train-robbery-golf",
    address: "9999 Railroad Avenue",
    city: "Dodge City",
    state: "KS",
    zipCode: "67801",
    description: "All aboard for a Wild West adventure! Navigate train cars, stop a bank robbery, and escape through the desert in this action-packed western experience.",
    rating: 4.3,
    reviewCount: 145,
    priceRange: "$10-14",
    priceCategory: "$$",
    phone: "(620) 555-2415",
    website: "https://trainrobberygolf.com",
    hours: "Apr-Oct: Daily 10am-8pm, Nov-Mar: Weekends only",
    features: ["Train Theme", "Western Setting", "Bank Robbery Story", "Desert Landscape", "Historical Elements"],
    amenities: ["Parking", "Restrooms", "Western Gift Shop", "Photo Opportunities", "Historical Tours"],
    image: "/images/train-robbery.jpg",
    photos: ["/images/train-robbery.jpg", "/images/train-robbery-2.jpg"],
    reviews: [
      {
        id: 25,
        author: "William C.",
        rating: 4,
        comment: "Great western theme with fun storyline! Feels like you're in an old western movie. Kids loved the train cars!",
        date: "2024-07-25",
        helpful: 12
      }
    ],
    coordinates: { lat: 37.7528, lng: -100.0171 },
    businessStatus: "open",
    established: 2000,
    holeCount: 18
  },
  {
    id: 25,
    name: "Underwater Shipwreck Adventure",
    slug: "underwater-shipwreck-adventure",
    address: "4000 Ocean Drive",
    city: "Virginia Beach",
    state: "VA",
    zipCode: "23451",
    description: "Dive deep into an underwater adventure exploring sunken ships, coral reefs, and sea treasures. This aquatic course features realistic underwater lighting and sound effects.",
    rating: 4.7,
    reviewCount: 312,
    priceRange: "$17-21",
    priceCategory: "$$$",
    phone: "(757) 555-2516",
    website: "https://shipwreckgolf.com",
    hours: "Daily: 10am-11pm (seasonal variations)",
    features: ["Underwater Theme", "Shipwreck Setting", "Coral Reefs", "Sea Treasures", "Aquatic Sound Effects"],
    amenities: ["Ocean Views", "Restrooms", "Maritime Gift Shop", "Aquarium Exhibit", "Beach Access"],
    image: "/images/shipwreck-golf.jpg",
    photos: ["/images/shipwreck-golf.jpg", "/images/shipwreck-golf-2.jpg", "/images/shipwreck-golf-3.jpg"],
    reviews: [
      {
        id: 26,
        author: "Patricia L.",
        rating: 5,
        comment: "Incredible underwater experience! The lighting and sound effects make you feel like you're really diving. Amazing attention to detail!",
        date: "2024-08-13",
        helpful: 29
      }
    ],
    coordinates: { lat: 36.8529, lng: -75.9780 },
    businessStatus: "open",
    established: 2017,
    holeCount: 20
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter(course => course.rating >= 4.5);
}

export function searchCourses(query: string): Course[] {
  const searchTerm = query.toLowerCase();
  return courses.filter(course => 
    course.name.toLowerCase().includes(searchTerm) ||
    course.city.toLowerCase().includes(searchTerm) ||
    course.state.toLowerCase().includes(searchTerm) ||
    course.description.toLowerCase().includes(searchTerm) ||
    course.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
    course.amenities.some(amenity => amenity.toLowerCase().includes(searchTerm))
  );
}

export function filterCourses(options: FilterOptions): Course[] {
  let filtered = courses;

  if (options.query) {
    filtered = searchCourses(options.query);
  }

  if (options.state) {
    filtered = filtered.filter(course => course.state === options.state);
  }

  if (options.priceCategory) {
    filtered = filtered.filter(course => course.priceCategory === options.priceCategory);
  }

  if (options.minRating) {
    filtered = filtered.filter(course => course.rating >= options.minRating);
  }

  if (options.amenities && options.amenities.length > 0) {
    filtered = filtered.filter(course =>
      options.amenities!.some(amenity =>
        course.amenities.some(courseAmenity =>
          courseAmenity.toLowerCase().includes(amenity.toLowerCase())
        )
      )
    );
  }

  return filtered;
}

export function sortCourses(courses: Course[], sortBy: SortOption): Course[] {
  const sorted = [...courses];
  
  switch (sortBy) {
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'price-low':
      return sorted.sort((a, b) => {
        const aPrice = parseInt(a.priceRange.split('-')[0].replace('$', ''));
        const bPrice = parseInt(b.priceRange.split('-')[0].replace('$', ''));
        return aPrice - bPrice;
      });
    case 'price-high':
      return sorted.sort((a, b) => {
        const aPrice = parseInt(a.priceRange.split('-')[1].replace('$', ''));
        const bPrice = parseInt(b.priceRange.split('-')[1].replace('$', ''));
        return bPrice - aPrice;
      });
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'newest':
      return sorted.sort((a, b) => (b.established || 0) - (a.established || 0));
    case 'featured':
    default:
      return sorted.sort((a, b) => b.rating - a.rating);
  }
}

export function getUniqueStates(): string[] {
  return [...new Set(courses.map(course => course.state))].sort();
}

export function getUniqueAmenities(): string[] {
  const allAmenities = courses.flatMap(course => course.amenities);
  return [...new Set(allAmenities)].sort();
}

export function getRelatedCourses(courseId: number, limit: number = 3): Course[] {
  const course = courses.find(c => c.id === courseId);
  if (!course) return [];

  return courses
    .filter(c => c.id !== courseId)
    .filter(c => 
      c.state === course.state || 
      c.features.some(feature => course.features.includes(feature)) ||
      c.amenities.some(amenity => course.amenities.includes(amenity))
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}