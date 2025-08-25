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
  priceRange: string;
  phone: string;
  website: string;
  hours: string;
  features: string[];
  image: string;
}

export const courses: Course[] = [
  {
    id: 1,
    name: "Adventure Golf Paradise",
    slug: "adventure-golf-paradise",
    address: "123 Main Street",
    city: "Orlando",
    state: "FL",
    zipCode: "32801",
    description: "A tropical-themed mini golf course featuring waterfalls, caves, and exotic plants. Perfect for families looking for an exciting adventure through 18 challenging holes.",
    rating: 4.8,
    priceRange: "$12-15",
    phone: "(407) 555-0123",
    website: "https://adventuregolfparadise.com",
    hours: "Mon-Thu: 10am-9pm, Fri-Sun: 10am-11pm",
    features: ["Waterfalls", "Cave Holes", "Tropical Theme", "Family Friendly", "Parking Available"],
    image: "/images/adventure-golf.jpg"
  },
  {
    id: 2,
    name: "Pirate's Cove Mini Golf",
    slug: "pirates-cove-mini-golf",
    address: "456 Ocean Drive",
    city: "Myrtle Beach",
    state: "SC",
    zipCode: "29577",
    description: "Ahoy mateys! Navigate through pirate ships, treasure caves, and sea battles in this swashbuckling adventure. Features two 18-hole courses with different difficulty levels.",
    rating: 4.6,
    priceRange: "$10-13",
    phone: "(843) 555-0456",
    website: "https://piratescovegolf.com",
    hours: "Daily: 9am-10pm",
    features: ["Pirate Theme", "Two Courses", "Treasure Caves", "Photo Opportunities", "Gift Shop"],
    image: "/images/pirates-cove.jpg"
  },
  {
    id: 3,
    name: "Glow-in-the-Dark Galaxy Golf",
    slug: "galaxy-golf",
    address: "789 Neon Boulevard",
    city: "Las Vegas",
    state: "NV",
    zipCode: "89101",
    description: "An otherworldly experience with glow-in-the-dark obstacles and cosmic themes. Play among planets, stars, and aliens in this unique indoor mini golf adventure.",
    rating: 4.9,
    priceRange: "$15-18",
    phone: "(702) 555-0789",
    website: "https://galaxygolf.com",
    hours: "Sun-Thu: 12pm-10pm, Fri-Sat: 12pm-12am",
    features: ["Glow-in-the-Dark", "Indoor Course", "Space Theme", "UV Lighting", "Air Conditioned"],
    image: "/images/galaxy-golf.jpg"
  },
  {
    id: 4,
    name: "Windmill Gardens Golf",
    slug: "windmill-gardens-golf",
    address: "321 Garden Lane",
    city: "Branson",
    state: "MO",
    zipCode: "65616",
    description: "A classic mini golf experience with beautiful gardens, traditional windmills, and peaceful water features. Perfect for a relaxing round with friends and family.",
    rating: 4.4,
    priceRange: "$8-12",
    phone: "(417) 555-0321",
    website: "https://windmillgardens.com",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-8pm",
    features: ["Garden Setting", "Windmills", "Water Features", "Classic Design", "Scenic Views"],
    image: "/images/windmill-gardens.jpg"
  },
  {
    id: 5,
    name: "Dinosaur Adventure Golf",
    slug: "dinosaur-adventure-golf",
    address: "654 Prehistoric Path",
    city: "Gatlinburg",
    state: "TN",
    zipCode: "37738",
    description: "Step back in time to the age of dinosaurs! Navigate around life-sized T-Rex, Triceratops, and other prehistoric creatures on this Jurassic-themed course.",
    rating: 4.7,
    priceRange: "$11-14",
    phone: "(865) 555-0654",
    website: "https://dinoadventure.com",
    hours: "Daily: 9am-9pm (seasonal hours may vary)",
    features: ["Dinosaur Theme", "Life-sized Models", "Educational", "Family Fun", "Mountain Views"],
    image: "/images/dinosaur-golf.jpg"
  },
  {
    id: 6,
    name: "Castle Kingdom Mini Golf",
    slug: "castle-kingdom-mini-golf",
    address: "987 Royal Court",
    city: "Williamsburg",
    state: "VA",
    zipCode: "23185",
    description: "Enter a medieval kingdom complete with castles, dragons, and knights. This enchanting course features elaborate castle structures and fairy tale elements.",
    rating: 4.5,
    priceRange: "$13-16",
    phone: "(757) 555-0987",
    website: "https://castlekingdom.com",
    hours: "Tue-Sun: 11am-9pm, Mon: Closed",
    features: ["Medieval Theme", "Castle Structures", "Dragon Obstacles", "Fairy Tale Setting", "Historic Area"],
    image: "/images/castle-kingdom.jpg"
  },
  {
    id: 7,
    name: "Tropical Lagoon Golf",
    slug: "tropical-lagoon-golf",
    address: "147 Paradise Point",
    city: "Key West",
    state: "FL",
    zipCode: "33040",
    description: "Experience paradise with this tropical lagoon-themed course featuring tiki huts, palm trees, and crystal blue water features. A slice of the Caribbean in mini golf form.",
    rating: 4.3,
    priceRange: "$14-17",
    phone: "(305) 555-0147",
    website: "https://tropicallagoongolf.com",
    hours: "Daily: 10am-11pm",
    features: ["Tropical Theme", "Tiki Huts", "Water Lagoons", "Palm Trees", "Ocean Breeze"],
    image: "/images/tropical-lagoon.jpg"
  },
  {
    id: 8,
    name: "Wild West Shootout Golf",
    slug: "wild-west-shootout-golf",
    address: "258 Cowboy Trail",
    city: "Deadwood",
    state: "SD",
    zipCode: "57732",
    description: "Partner, saddle up for an Old West adventure! Complete with saloons, gold mines, and shootout scenes. This course brings the frontier spirit to mini golf.",
    rating: 4.2,
    priceRange: "$9-12",
    phone: "(605) 555-0258",
    website: "https://wildwestgolf.com",
    hours: "May-Oct: Daily 10am-8pm, Nov-Apr: Weekends only",
    features: ["Wild West Theme", "Saloon Holes", "Gold Mine", "Historic Setting", "Seasonal Operation"],
    image: "/images/wild-west.jpg"
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
    course.features.some(feature => feature.toLowerCase().includes(searchTerm))
  );
}