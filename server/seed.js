// seed.js

// -----------------------------------------------
// This script generates sample data for our FoodShare backend.
// It creates two main collections:
// 1. users - representing our food donors or receivers
// 2. listings - representing food donation posts
// -----------------------------------------------
import fs from "fs";

 // Data sources used for random generation

const foods = [
  "Fries", "Ugali", "Chapati", "Mandazi", "Samosa",
  "Rice", "Ndengu", "Githeri", "Pilau", "Matoke"
];
const locations = [
"Carnivore Restaurant — Langata Link Rd, Nairobi.", 
"Talisman Restaurant — Karen, Nairobi.", 
"Soko Safi — Mama Lilishe Resturant-Ngong Road, Nairobi.",
"Big Square Lavington — Lavington, Nairobi.",
"Seven Seafood & Grill — ABC Place, Westlands, Nairobi.", 
"Under the Swahili Tree — Karen, Nairobi",
"Mama Rocks - Kilimani ,Nairobi."
];
const usernames = ["foodshare_admin", "bigjay", "bodaguy", "Brian", "Okello", "nairobi_greediest","John"];


//Helper function to pick a random value

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Generates users with unique IDs and roles
// -----------------------------------------------
// The first user is always an admin for managing the platform.

function generateUsers() {
  return usernames.map((username, index) => ({
    id: index + 1,
    username,
    email: `${username}@foodshare.com`,
    role: index === 0 ? "admin" : "user"
  }));
}

// Generates listings with food name, quantity, and location
// -----------------------------------------------
// Each listing has a random food, quantity, restaurant location, and availability status.

function generateListings(count = 12) {
  const listings = [];
  for (let i = 1; i <= count; i++) {
    listings.push({
      id: i,
      food: getRandom(foods),
      quantity: `${Math.floor(Math.random() * 20) + 1} units`,
      location: getRandom(locations),
      status: Math.random() > 0.3 ? "available" : "sold out",
    });
  }
  return listings;
}

// Combines users + listings into a single database object
// -----------------------------------------------


const data = {
  users: generateUsers(),
  listings: generateListings(),
};

// Writes the generated data to db.json
// -----------------------------------------------


fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
console.log("✅ Database seeded successfully! Fresh data generated.");
