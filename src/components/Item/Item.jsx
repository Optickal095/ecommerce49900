import { Link } from "react-router-dom";

const Item = ({ id, name, price, img }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleClick} style={{ margin: 10 }}>
      <h3>{name}</h3>
      <img src={img} style={{ width: 100 }} />
      <h4>${price}</h4>
      <Link to={`/detail/${id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
