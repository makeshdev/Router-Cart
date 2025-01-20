import { Link } from "react-router-dom";
import { ArrowIcon } from "../assets/icons/Svg";
import { useState, useEffect } from "react";

function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0);

  const totalFunc = () => {
    const totalPrice = cart.reduce(
      (acc, curr) => acc + curr.price * (curr.count || 1),
      0
    );
    setTotal(totalPrice);
  };

  function removeFun(index) {
    cart.splice(index, 1);
    setCart([...cart]);
  }

  const increment = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: (item.count || 1) + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: (item.count || 1) - 1 } : item
      )
    );
  };

  useEffect(() => {
    totalFunc();
  }, [cart]);

  return (
    <>
      <div className="container mx-auto">
        <div className="px-5 lg:px-14">
          <Link to="/">
            <div className="flex items-center gap-2 my-10">
              <ArrowIcon /> <p>Back</p>
            </div>
          </Link>
          {cart.length === 0 ? (
            <div className="flex justify-center items-center my-24">
              <h1 className="text-2xl text-gray-400">No Data Found!</h1>
            </div>
          ) : (
            cart.map((item, index) => {
              return (
                <div
                  className="grid lg:grid-cols-3 mb-8 gap-5 lg:gap-0"
                  key={index}
                >
                  <div className="flex gap-6">
                    <img src={item.image} className="w-16 h-16" />
                    <div className="flex flex-col items-start gap-1">
                      <p className="text-sm">{item.title}</p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Price:</span> Rs.
                        {item.price}
                      </p>
                      <p
                        className="text-orange-500 cursor-pointer"
                        onClick={() => removeFun(index)}
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-4">
                    <button
                      className="w-6 h-6 border border-orange-400 text-orange-400 font-bold text-xl pb-1 leading-3"
                      onClick={() => decrement(item.id)}
                    >
                      -
                    </button>
                    <p>{item.count || 1}</p>
                    <button
                      className="w-6 h-6 border border-orange-400 text-orange-400 font-bold text-xl pb-1 leading-3"
                      onClick={() => increment(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center justify-end">
                    <p>Rs.{(item.price * (item.count || 1)).toFixed(1)}</p>
                  </div>
                </div>
              );
            })
          )}
          <div className="flex justify-end">
            <div className="w-full lg:w-1/4 border-t-2 border-t-orange-500">
              <div className="flex justify-between items-center pt-5">
                <p>SubTotal</p>
                <p>{total.toFixed(1)}</p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <p>Discount</p>
                <p className="text-green-600">10%</p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <b>Total</b>
                <b>{(total * 0.9).toFixed(1)}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
