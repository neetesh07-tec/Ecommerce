import dayjs from "dayjs";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryOptions } from "./DeliveryOptions";
export function OrderSummary({ deliveryOptions, cart, loadAppData }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            },
          );
          return (
            <div key={cartItem.id} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:{" "}
                {dayjs(selectDeliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM, D", //in future we may need to saprate this  into the component
                )}
              </div>

              <div className="cart-item-details-grid">
                <CartItemDetails
                  cartItem={cartItem}
                  loadAppData={loadAppData}
                />

                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  loadAppData={loadAppData}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
