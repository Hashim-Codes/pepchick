export const restaurantConfig = {
  name: "PEPCHICK",
  tagline: "Premium Authentic Flavors",
  logo: "/assets/Logo/7a00232d-8d00-4618-93e1-958a9aab97a8.png", // Verify actual logo filename
  phone: "+91 96452 12213",
  whatsapp: "+91 96452 12213", // To be verified for WhatsApp automated ordering
  instagram: "@pepchick.official",
  instagramUrl: "https://instagram.com/pepchick.official",
  address: "Opp. Petrol Pump, Calicut Road, Edavannapara",
  mapsUrl: "https://maps.google.com/?q=Pepchick+Edavannappara", // Placeholder for actual maps URL
  openingHours: "11:00 AM - 11:00 PM", // Unverified, placeholder
  brandColors: {
    primary: "#d32f2f", // PEPCHICK Red
    dark: "#121212",
    light: "#f5f5f5"
  }
};

export const menuData = {
  categories: ["Signature Broast", "Kuzhimanthi", "Alfaham & Grills", "Quick Service"],
  items: [
    {
      id: "b1",
      name: "6-Piece Signature Broast Combo",
      description: "Crispy fried chicken served with French Fries, Garlic Paste, and Bun.",
      price: 350, // UNVERIFIED PRICE
      category: "Signature Broast",
      image: "/assets/Food Photos/ecab9d85-da58-422d-8709-deeca508594b.png", // Placeholder mapping
      available: true
    },
    {
      id: "b2",
      name: "9-Piece Signature Broast Combo",
      description: "Crispy fried chicken served with French Fries, Garlic Paste, and Bun.",
      price: 500, // UNVERIFIED PRICE
      category: "Signature Broast",
      image: "/assets/Food Photos/d7612733-f18b-4f6e-b19a-d06e96eaf8f9.png", // Placeholder mapping
      available: true
    },
    {
      id: "m1",
      name: "Normal Kuzhimanthi (Half)",
      description: "Aromatic Mandi rice served with slow-cooked chicken.",
      price: 240, // UNVERIFIED PRICE
      category: "Kuzhimanthi",
      image: "/assets/Food Photos/aaab5a21-a853-4ff7-b6fb-25d80d607bfc.png",
      available: true
    },
    {
      id: "m2",
      name: "BBQ Mandi (Full)",
      description: "Rich BBQ chicken served over flavorful Mandi rice.",
      price: 450, // UNVERIFIED PRICE
      category: "Kuzhimanthi",
      image: "/assets/Food Photos/7b2d717f-cd8d-49d7-add6-de8c59ea10a4.png",
      available: true
    },
    {
      id: "g1",
      name: "Peri-Peri Alfaham (Half)",
      description: "Spicy grilled chicken marinated in peri-peri sauce.",
      price: 240, // UNVERIFIED PRICE
      category: "Alfaham & Grills",
      image: "/assets/Food Photos/6db83842-4100-451d-859b-77743863d103.png",
      available: true
    },
    {
      id: "g2",
      name: "Green Chilli Grilled Chicken (Quarter)",
      description: "Grilled chicken with a kick of green chilli.",
      price: 120, // UNVERIFIED PRICE
      category: "Alfaham & Grills",
      image: "/assets/Food Photos/5ed1e597-d9c3-4736-8087-e58e54efdc86.png",
      available: true
    },
    {
      id: "q1",
      name: "Classic Chicken Shawarma Roll",
      description: "Juicy chicken wrapped with fresh veggies and garlic paste.",
      price: 90, // UNVERIFIED PRICE
      category: "Quick Service",
      image: "/assets/Food Photos/2bc31125-b1ee-4ef7-920a-d341c252bf94.png",
      available: true
    }
  ]
};
