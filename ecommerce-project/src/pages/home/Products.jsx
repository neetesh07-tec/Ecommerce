import { useState } from "react";
import axios from "axios";
import { formatePrice } from "../../utils/formatePrice";
export function Products({ product, loadAppData }) {
  const [quantity, setQuentity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);

  function handalClick(event) {
    const quantitySelected = Number(event.target.value);
    setQuentity(quantitySelected);
  }

  async function addTocart() {
    await axios.post("/api/cart-items", {
      productId: product.id,
      quantity, // insted of (quantity: quantity) we can write only quantity it is shorthand property syntax but product  data valeable and your valriable should be same name
    });
    setShowAdded(true);
    setTimeout(() => {
      setShowAdded(false);
    }, 1000);
    await loadAppData();
  }

  //   const addTocart = async () => {
  //     await axios.post("/api/cart-items", {
  //     productId: product.id,
  //     quantity, // insted of (quantity: quantity) we can write only quantity it is shorthand property syntax but product  data valeable and your valriable should be same name
  //    });
  //    await loadAppData();
  //   }

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img
          className="product-image"
          data-testid="product-image"
          src={product.image}
        />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">{formatePrice(product.priceCents)}</div>

      <div className="product-quantity-container">
        <select value={quantity} onChange={handalClick}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className="added-to-cart" style={{ opacity: showAdded ? 1 : 0 }}>
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button
        className="add-to-cart-button button-primary"
        data-testid="add-to-cart-button"
        onClick={addTocart}
      >
        Add to Cart
      </button>
    </div>
  );
}
