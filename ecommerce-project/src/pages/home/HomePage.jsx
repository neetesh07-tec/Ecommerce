import { ProductGrid } from "./ProductGrid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { Link, useSearchParams } from "react-router";

export function HomePage({ cart, loadAppData }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const getHome = async () => {
      const searchURL = search
        ? `/api/products?search=${search}`
        : "/api/products";

      const response = await axios.get(searchURL);
      setProducts(response.data);
    };

    getHome();
  }, [search]);

  return (
    <>
      <link
        rel="icon"
        type="image/svg+xml"
        href="https://supersimple.dev/images/home-favicon.png"
      />
      <title>Home page</title>
      <Header cart={cart} loadAppData={loadAppData} />
      <div className="home-page">
        <ProductGrid products={products} loadAppData={loadAppData} />
      </div>
    </>
  );
}
