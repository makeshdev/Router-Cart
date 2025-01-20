import { CartIcon } from "../assets/icons/Svg";
import { Link } from "react-router-dom";

function Navbar({ cart }) {
  return (
    <>
      <div className="bg-orange-50 sticky top-0 shadow-lg">
        <div className="container mx-auto py-6 px-5 lg:px-0">
          <div className="flex justify-between items-center">
            <h1 className="font-black text-orange-500 text-xl">LOGO</h1>

            <Link to="/cart">
              <button className="bg-orange-500 py-1 px-3 text-white font-bold rounded-sm flex gap-1 relative">
                <CartIcon />
                Cart
                <div className="absolute w-6 h-6 bg-red-600 rounded-full -right-3 -top-3 text-white leading-5 text-sm">
                  {cart.length}
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
