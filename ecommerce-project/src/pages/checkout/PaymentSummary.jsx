import axios from "axios";
import { useNavigate } from "react-router";
import { formatePrice } from "../../utils/formatePrice";

export function PaymentSummary({ paymentSummary, loadAppData }) {
  const nevigate = useNavigate();
  const createOrder = async () => {
    await axios.post("/api/orders");
    await loadAppData();
    nevigate("/orders");
  };

  return (
    <>
      <div className="payment-summary">
        <div className="payment-summary-title">Payment Summary</div>
        {paymentSummary && (
          <>
            <div className="payment-summary-row">
              <div>Items ({paymentSummary.totalItems}):</div>
              <div className="payment-summary-money">
                {formatePrice(paymentSummary.productCostCents)}
              </div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping handling:</div>
              <div className="payment-summary-money">
                {formatePrice(paymentSummary.shippingCostCents)}
              </div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">
                {formatePrice(paymentSummary.totalCostBeforeTextCents)}
              </div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">
                {formatePrice(paymentSummary.taxCents)}
              </div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">
                {formatePrice(paymentSummary.totalCostCents)}
              </div>
            </div>

            <button
              className="place-order-button button-primary"
              onClick={createOrder}
            >
              Place your order
            </button>
          </>
        )}
      </div>
    </>
  );
}
