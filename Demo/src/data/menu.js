// DEMO DATA — replace with owner-confirmed menu before production.
export const menuData = {
  categories: ["All", "Signature Broast", "Kuzhimanthi", "Alfaham & Grills", "Quick Service"],
  featured: ["b1", "m1", "m2", "g1", "q1"],
  items: [
    {
      id: "b1",
      name: "Signature Broast",
      description: "Crispy fried chicken served with French Fries, Garlic Paste, and Bun.",
      category: "Signature Broast",
      image: "/assets/Food Photos/menu-broast.png",
      available: true,
      portions: [
        { name: "3-Piece", price: 180 },
        { name: "6-Piece", price: 350 },
        { name: "9-Piece", price: 500 }
      ]
    },
    {
      id: "m1",
      name: "Normal Kuzhimanthi",
      description: "Aromatic Mandi rice served with slow-cooked tender chicken.",
      category: "Kuzhimanthi",
      image: "/assets/Food Photos/menu-normal-mandi.png",
      available: true,
      portions: [
        { name: "Quarter", price: 120 },
        { name: "Half", price: 230 },
        { name: "Full", price: 440 }
      ]
    },
    {
      id: "m2",
      name: "BBQ Mandi",
      description: "Rich BBQ chicken served over flavorful steaming Mandi rice.",
      category: "Kuzhimanthi",
      image: "/assets/Food Photos/menu-bbq-mandi.png",
      available: true,
      portions: [
        { name: "Quarter", price: 130 },
        { name: "Half", price: 250 },
        { name: "Full", price: 480 }
      ]
    },
    {
      id: "g1",
      name: "Peri-Peri Alfaham",
      description: "Spicy grilled chicken marinated in our signature peri-peri sauce.",
      category: "Alfaham & Grills",
      image: "/assets/Food Photos/menu-peri-alfaham.png",
      available: true,
      portions: [
        { name: "Quarter", price: 110 },
        { name: "Half", price: 220 },
        { name: "Full", price: 430 }
      ]
    },
    {
      id: "g2",
      name: "Green Chilli Grilled Chicken",
      description: "Grilled chicken with a serious kick of green chilli.",
      category: "Alfaham & Grills",
      image: "/assets/Food Photos/menu-peri-alfaham.png",
      available: true,
      portions: [
        { name: "Quarter", price: 110 },
        { name: "Half", price: 220 },
        { name: "Full", price: 430 }
      ]
    },
    {
      id: "q1",
      name: "Classic Chicken Shawarma",
      description: "Juicy chicken wrapped with fresh veggies and garlic paste.",
      price: 90,
      category: "Quick Service",
      image: "/assets/Food Photos/menu-shawarma.png",
      available: true
    }
  ]
};
