import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../services/api";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <div className="p-4">Yükleniyor...</div>;

  return (
    <div className="p-4 h-screen w-screen mx-auto bg-white shadow rounded">
      <div className="flex flex-col md:flex-row gap-4 ">
        <img src={product.image} alt={product.title} className="h-64 mx-auto" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold">${product.price}</p>
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            className="mt-4 px-6 py-2 text-black rounded"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
