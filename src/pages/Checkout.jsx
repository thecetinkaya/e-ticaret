import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("Ödeme işlemi başarıyla tamamlandı!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Ödeme Sayfası
        </h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            <span className="text-5xl mb-4 block">🛒</span>
            <p>Sepetiniz şu anda boş.</p>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-6">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-4"
                >
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <span className="text-gray-700 font-semibold">
                    ${(item.quantity * item.price).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="text-right mb-6">
              <p className="text-xl font-bold text-gray-800">
                Toplam:{" "}
                <span className="text-green-600">${total.toFixed(2)}</span>
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleCheckout}
                className="bg-green-200 hover:bg-green-700 text-black px-8 py-3 rounded-full shadow-md transition-all duration-300"
              >
                Ödemeyi Tamamla
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
