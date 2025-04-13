import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 w-screen bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sepet</h2>
        {cart.length === 0 ? (
          <div className="text-center text-gray-500">Sepetiniz boş</div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 shadow-lg rounded-lg"
              >
                <img src={item.image} className="h-20 w-20 object-contain" />
                <div className="flex-1 ml-4 text-center sm:text-left">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mb-2">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <button
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_QUANTITY",
                          payload: {
                            id: item.id,
                            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                          },
                        })
                      }
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_QUANTITY",
                          payload: {
                            id: item.id,
                            quantity: item.quantity + 1,
                          },
                        })
                      }
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                  }
                  className="text-red-600 font-bold mt-4 sm:mt-0"
                >
                  X
                </button>
              </div>
            ))}

            <div className="text-right text-xl font-semibold">
              Toplam: ${total.toFixed(2)}
            </div>

            {/* Ödemeye Geç Butonu */}
            <div className="text-right mt-4">
              <Link
                to="/checkout"
                className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Ödemeye Geç
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
