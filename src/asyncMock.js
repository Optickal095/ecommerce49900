const products = [
  {
    id: "1",
    name: "Cubo Rubick 3x3",
    price: "1000",
    category: "rubick",
    img: "https://cdnx.jumpseller.com/juegos-basa/image/26954078/resize/540/540?1662666572",
    stock: "20",
    desciption: "Descripción",
  },
  {
    id: "2",
    name: "Auto de carrera 1910",
    price: "1000",
    category: "armable",
    img: "https://playmore.cl/cdn/shop/files/Playmore-Robotime-MC401-Auto-Carrera-Vintage-Madera-Armable_d9ea13f4-3a6d-4cae-88bc-1db8ed3b89c8_1024x1024.jpg?v=1688076005",
    stock: "10",
    description: "Descripción",
  },
  {
    id: "3",
    name: "Puzzle 12000 piezas",
    price: "1000",
    img: "https://puzzlemania-154aa.kxcdn.com/products/2021/puzzle-educa-12000-pieces-wonders-of-the-world-12000.jpg",
    stock: "30",
    desciption: "Descripción",
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
