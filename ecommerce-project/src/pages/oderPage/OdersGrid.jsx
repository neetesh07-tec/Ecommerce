import { OderHeader } from "./OderHeader";
import { OrderDetailsGrid } from "./OderDetailsGrid";
export function OdersGrid({ orders, loadAppData }) {
  return (
    <div className="orders-grid">
      {orders.length > 0 &&
        orders.map((order) => {
          return (
            <div key={order.id} className="order-container">
              <OderHeader order={order} />
              <OrderDetailsGrid order={order} loadAppData={loadAppData} />
            </div>
          );
        })}
    </div>
  );
}
