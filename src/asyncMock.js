const products = [
  {
    id: "1",
    name: "Cubo Rubick 3x3",
    price: 1000,
    category: "rubick",
    img: "https://cdnx.jumpseller.com/juegos-basa/image/26954078/resize/540/540?1662666572",
    stock: 20,
    desciption: "Descripción",
  },
  {
    id: "2",
    name: "Auto de carrera 1910",
    price: 1500,
    category: "puzzle3d",
    img: "https://playmore.cl/cdn/shop/files/Playmore-Robotime-MC401-Auto-Carrera-Vintage-Madera-Armable_d9ea13f4-3a6d-4cae-88bc-1db8ed3b89c8_1024x1024.jpg?v=1688076005",
    stock: 10,
    description: "Descripción",
  },
  {
    id: "3",
    name: "Puzzle 12000 piezas",
    price: 3000,
    category: "madera",
    img: "https://puzzlemania-154aa.kxcdn.com/products/2021/puzzle-educa-12000-pieces-wonders-of-the-world-12000.jpg",
    stock: 30,
    desciption: "Descripción",
  },
  {
    id: "4",
    name: "Cubo Rubick 4x4",
    price: 1500,
    category: "rubick",
    img: "https://http2.mlstatic.com/D_NQ_NP_643557-MLC51090169286_082022-O.webp",
    stock: 20,
    desciption: "Cubo de Rubick 4x4, bastante bueno",
  },
  {
    id: "5",
    name: "Cubo Rubick 2x2",
    price: 800,
    category: "rubick",
    img: "https://cuboscubik.com/image/cache/catalog/Qiyi/2x2/Qiyi%20Qidi%202x2-600x600.png",
    stock: 15,
    description: "Cubo de Rubick 2x2, ideal para principiantes",
  },
  {
    id: "6",
    name: "Puzzle 5000 piezas",
    price: 2500,
    category: "madera",
    img: "https://falabella.scene7.com/is/image/Falabella/gsc_121027760_2896790_1?wid=800&hei=800&qlt=70",
    stock: 25,
    description: "Puzzle desafiante de 5000 piezas para entusiastas",
  },
  {
    id: "7",
    name: "Rompecabezas 3D Titanic",
    price: 1800,
    category: "puzzle3d",
    img: "https://s3.amazonaws.com/entrekidscl/vich_files/proveedorarchivo/615a411140954671991615.jpg",
    stock: 12,
    description: "Construye el famoso Titanic en 3D",
  },
  {
    id: "8",
    name: "Cubo Rubick 5x5",
    price: 2000,
    category: "rubick",
    img: "https://http2.mlstatic.com/D_NQ_NP_780659-MLV49921280989_052022-O.webp",
    stock: 18,
    description: "Cubo de Rubick 5x5, para desafíos avanzados",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === itemId));
    }, 1000);
  });
};
