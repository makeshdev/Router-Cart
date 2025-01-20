import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchApi = async () => {
    try {
      const url = await fetch("https://fakestoreapi.com/products");
      const jsonData = await url.json();
      setData([...jsonData]);
    } catch (error) {
      console.log(error.message);
    }
  };
  function addCart(item) {
    const equal = cart.find((a) => a.id === item.id);
    if (equal) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, item]);
    }
  }
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Router>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Shop data={data} addCart={addCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
