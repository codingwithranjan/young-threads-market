
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: { name: string; value: string }[];
  tags: string[];
  featured: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Comfort Tee",
    description: "A soft and comfortable t-shirt perfect for everyday wear. Made with 100% organic cotton for breathability and durability.",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    ],
    category: "t-shirts",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Navy", value: "#0A2463" },
      { name: "White", value: "#FFFFFF" },
      { name: "Gray", value: "#808080" }
    ],
    tags: ["casual", "cotton", "summer"],
    featured: true,
    bestSeller: true,
    newArrival: false,
    rating: 4.8,
    reviewCount: 42
  },
  {
    id: "2",
    name: "Adventure Cargo Pants",
    description: "Durable cargo pants with multiple pockets, perfect for outdoor adventures. Water-resistant material keeps kids dry on rainy days.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    ],
    category: "pants",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    colors: [
      { name: "Khaki", value: "#C3B091" },
      { name: "Olive", value: "#556B2F" }
    ],
    tags: ["outdoor", "adventure", "durable"],
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.6,
    reviewCount: 28
  },
  {
    id: "3",
    name: "Sport Performance Jacket",
    description: "Lightweight and water-resistant jacket perfect for sports and outdoor activities. Features breathable fabric and reflective details for safety.",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    ],
    category: "jackets",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Blue", value: "#1A73E8" },
      { name: "Black", value: "#000000" },
      { name: "Red", value: "#FF0000" }
    ],
    tags: ["sports", "outdoor", "waterproof"],
    featured: true,
    bestSeller: true,
    newArrival: true,
    rating: 4.9,
    reviewCount: 53
  },
  {
    id: "4",
    name: "Graphic Print Hoodie",
    description: "Warm and stylish hoodie with cool graphic print. Features a front pocket and adjustable drawstring hood.",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    ],
    category: "hoodies",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Gray", value: "#808080" },
      { name: "Black", value: "#000000" }
    ],
    tags: ["casual", "warm", "graphic"],
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.7,
    reviewCount: 36
  },
  {
    id: "5",
    name: "Denim Jeans",
    description: "Classic denim jeans with adjustable waistband for growing kids. Made with durable material that withstands active play.",
    price: 32.99,
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    ],
    category: "jeans",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    colors: [
      { name: "Blue", value: "#0F52BA" },
      { name: "Black", value: "#000000" }
    ],
    tags: ["denim", "casual", "durable"],
    featured: true,
    bestSeller: false,
    newArrival: false,
    rating: 4.5,
    reviewCount: 47
  },
  {
    id: "6",
    name: "Sports Sneakers",
    description: "Comfortable and supportive sneakers perfect for sports and everyday activities. Features cushioned insole and non-slip sole.",
    price: 54.99,
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    ],
    category: "shoes",
    sizes: ["1", "2", "3", "4", "5", "6"],
    colors: [
      { name: "Black/Red", value: "#FF0000" },
      { name: "Blue/White", value: "#1A73E8" },
      { name: "Gray/Green", value: "#808080" }
    ],
    tags: ["sports", "comfortable", "sneakers"],
    featured: true,
    bestSeller: true,
    newArrival: true,
    rating: 4.9,
    reviewCount: 72
  },
  {
    id: "7",
    name: "Summer Swim Shorts",
    description: "Quick-drying swim shorts perfect for beach and pool days. Features elastic waistband and fun printed design.",
    price: 22.99,
    images: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    ],
    category: "swimwear",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    colors: [
      { name: "Blue Pattern", value: "#1A73E8" },
      { name: "Green Pattern", value: "#556B2F" }
    ],
    tags: ["summer", "swimming", "beach"],
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.6,
    reviewCount: 31
  },
  {
    id: "8",
    name: "Winter Beanie Hat",
    description: "Warm and cozy beanie hat perfect for cold winter days. Made with soft knitted material with fleece lining for extra warmth.",
    price: 14.99,
    images: [
      "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    ],
    category: "accessories",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Navy", value: "#0A2463" },
      { name: "Red", value: "#FF0000" },
      { name: "Gray", value: "#808080" }
    ],
    tags: ["winter", "warm", "hat"],
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviewCount: 24
  }
];

// Helper functions to get products by category, filter, etc.
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestSellerProducts = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getNewArrivalProducts = (): Product[] => {
  return products.filter(product => product.newArrival);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
