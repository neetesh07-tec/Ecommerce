import { OdersGrid } from "./OdersGrid";
import "./OrdersPage.css";
import { Header } from "../../components/Header";
import { useEffect, useState, Fragment } from "react";
import axios from "axios";

export function OrdersPage({ cart, loadAppData }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const featchOrderData = async () => {
      let response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    featchOrderData();
  }, []);
  window.axios = axios;
  return (
    <>
      <link
        rel="icon"
        type="image/svg+xml"
        href="https://supersimple.dev/images/orders-favicon.png"
      />
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OdersGrid orders={orders} loadAppData={loadAppData} />
      </div>
    </>
  );
}
