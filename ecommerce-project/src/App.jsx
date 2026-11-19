import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/oderPage/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const loadAppData = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadAppData();
  }, []);

  return (
    <>
      <Routes>
        <Route
          index
          element={<HomePage cart={cart} loadAppData={loadAppData} />}
        />
        <Route
          path="checkout"
          element={<CheckoutPage cart={cart} loadAppData={loadAppData} />}
        />
        <Route
          path="orders"
          element={<OrdersPage cart={cart} loadAppData={loadAppData} />}
        />
        <Route
          path="tracking/:orderId/:productId"
          element={<TrackingPage cart={cart} />}
        />
        //in dought
        <Route path="NotFoundPage" element={<NotFoundPage cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
