import { Products } from "./Products";

export function ProductGrid({ products, loadAppData }) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Products
            key={product.id}
            product={product}
            loadAppData={loadAppData}
          />
        );
      })}
    </div>
  );
}
