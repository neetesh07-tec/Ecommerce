import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import axios from "axios";
import { CheckoutHeader } from "../../components/CheckoutHeader";
import { Link } from "react-router";
import "./CheckoutPage.css";
import { useEffect, useState } from "react";

export function CheckoutPage({ cart, loadAppData }) {
  const [deliveryOptions, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const featchCheckoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOption(response.data);

      response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    featchCheckoutData();
  }, [cart]);

  return (
    <>
      <link
        rel="icon"
        type="image/svg+xml"
        href="https://supersimple.dev/images/cart-favicon.png"
      />
      <title>Checkout</title>
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            deliveryOptions={deliveryOptions}
            cart={cart}
            loadAppData={loadAppData}
          />
          <PaymentSummary
            paymentSummary={paymentSummary}
            loadAppData={loadAppData}
          />
        </div>
      </div>
    </>
  );
}
