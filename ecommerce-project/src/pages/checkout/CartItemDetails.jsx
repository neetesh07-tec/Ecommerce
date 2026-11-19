import axios from "axios";
import { formatePrice } from "../../utils/formatePrice";
import { useState } from "react";
export function CartItemDetails({ cartItem, loadAppData }) {
  const [inpute, setInpute] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleKeydown = (event) => {
    const keyPress = event.key;
    if (keyPress === "Enter") {
      showInpute();
    }
    if (keyPress === "Escape") {
      setQuantity(cartItem.quantity);
      setInpute(false);
    }
  };

  const showInpute = async () => {
    if (inpute) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadAppData();
      setInpute(false);
    } else {
      setInpute(true);
    }
  };

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadAppData();
  };

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatePrice(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            {inpute ? (
              <input
                onChange={updateQuantity}
                onKeyDown={handleKeydown}
                value={quantity}
                type="text"
                className="updateInpute"
                style={{ width: 50, display: inpute ? "inline-block" : "none" }}
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>

          <span
            className="update-quantity-link link-primary"
            onClick={showInpute}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
