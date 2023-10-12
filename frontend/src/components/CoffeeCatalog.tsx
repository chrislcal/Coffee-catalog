import axios from "axios";
import { useEffect, useState } from "react";
import { CoffeeDrink } from "../models/CoffeeDrink";
import Searchbar from "./Searchbar";
import CoffeeCard from "./CoffeeCard";
import "../styles/styles.css";

const CoffeeCatalog = () => {
  const [products, setProducts] = useState<CoffeeDrink[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<CoffeeDrink[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Fetch data when component mounts
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:5000/coffee-drinks");
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  // Filter products based on searchterm
  useEffect(() => {
    const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.formCode.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

  const displayedProducts = filteredProducts.map((product) => {
    return <CoffeeCard key={product.id} drink={product} />;
  });

  return (
    <>
      <div className="top-elements-container">
        <h1 className="header">
          Find the best
          <br />
          <span>Coffee</span> for you
        </h1>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {isLoading ? (
        <div>
          <p className="loading">Brewing Coffee...</p>
        </div>
      ) : error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <div className="card-container">{displayedProducts}</div>
      )}
    </>
  );
};

export default CoffeeCatalog;
