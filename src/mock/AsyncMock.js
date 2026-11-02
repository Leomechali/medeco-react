const products = [
  {
    id: "1",
    name: "Sahumerios Palo Santo Premium",
    price: 3500,
    category: "Sahumerios",
    img: "https://images.unsplash.com/photo-1608571423902-eed4a94d8108?w=500",
    stock: 25,
    description: "Sahumerios artesanales de Palo Santo para limpieza energética."
  },
  {
    id: "2",
    name: "Vela de Soja Lavanda",
    price: 6800,
    category: "Velas",
    img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500",
    stock: 15,
    description: "Vela de cera de soja natural con esencia de lavanda relajante."
  },
  {
    id: "3",
    name: "Esencia de Eucalipto",
    price: 4200,
    category: "Esencias",
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500",
    stock: 30,
    description: "Aceite esencial puro ideal para hornitos y difusores."
  },
  {
    id: "4",
    name: "Fuente de Agua Zen",
    price: 18900,
    category: "Fuentes",
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500",
    stock: 8,
    description: "Fuente de cerámica con bomba silenciosa para armonizar espacios."
  },
  {
    id: "5",
    name: "Buda Deco Meditación",
    price: 12500,
    category: "Deco",
    img: "https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=500",
    stock: 12,
    description: "Figura de Buda en resina, ideal para altar o escritorio."
  },
  {
    id: "6",
    name: "Sahumerios Nag Champa",
    price: 2800,
    category: "Sahumerios",
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500",
    stock: 40,
    description: "Clásico aroma hindú, pack x 20 unidades."
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000); 
  });
};