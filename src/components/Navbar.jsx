import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav className="bg-black text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-2xl font-bold">
          E-commerce
        </Link>
      </div>
      <Link to="/cart" className="relative mt-2 md:mt-0">
        🛒 Sepet ({cart.reduce((acc, item) => acc + item.quantity, 0)})
      </Link>
    </nav>
  );
};

export default Navbar;
