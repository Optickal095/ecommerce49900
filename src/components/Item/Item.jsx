const Item = ({ id, name, price, img }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} style={{ width: 100 }} />
      <h4>${price}</h4>
      <button>Ver Detalle</button>
    </div>
  );
};

export default Item;
