import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col h-full group transition">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="h-40 mx-auto" />
        <h3 className="font-semibold mt-2">{product.title}</h3>
      </Link>
      <p className="text-gray-700">${product.price}</p>
      <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
