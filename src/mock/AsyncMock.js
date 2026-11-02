const products = [
  {
    id: "1",
    name: "Sahumerios Buena Onda",
    price: "$3.500",
    category: "Sahumerios",
    img: "https://i.postimg.cc/bNyHV9P6/sahumerios.jpg",
    stock: 25,
    description:
      "Elaborados con resinas naturales y hierbas aromáticas. Perfectos para limpiar y purificar ambientes.",
  },
  {
    id: "2",
    name: "Sahumerios Premium",
    price: "$6.800",
    category: "Sahumerios",
    img: "https://i.postimg.cc/ncFYSGxR/sahumerios2.jpg",
    stock: 15,
    description:
      "Mezclas exclusivas de incienso con fragancias intensas y duraderas para momentos especiales.",
  },
  {
    id: "3",
    name: "Esencia de Eucalipto",
    price: "$4.200",
    category: "Esencias",
    img: "https://i.postimg.cc/7YHMtn4m/esenciahorno.jpg",
    stock: 30,
    description: "Aceite esencial puro ideal para hornitos y difusores.",
  },
  {
    id: "4",
    name: "Fuente de Agua Zen",
    price: "$18.900",
    category: "Fuentes",
    img: "https://i.postimg.cc/SxrKTcyt/D-NQ-NP-658841-MLA110391957915-042026-O.webp",
    stock: 8,
    description:
      "Fuente de cerámica con bomba silenciosa para armonizar espacios.",
  },
  {
    id: "5",
    name: "Buda Deco Meditación",
    price: "$12.500",
    category: "Deco",
    img: "https://i.postimg.cc/GpmmZ92x/00000167-00000746-G-1753987794688bbad26f936.png",
    stock: 12,
    description: "Figura de Buda en resina, ideal para altar o escritorio.",
  },
  {
    id: "6",
    name: "Sahumerios Nag Champa",
    price: "$2.800",
    category: "Sahumerios",
    img: "https://i.postimg.cc/R0ZZjqF7/D-Q-NP-2X-902535-MLA110425146287-042026-P.webp",
    stock: 40,
    description: "Clásico aroma hindú, pack x 20 unidades.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
