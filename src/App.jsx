import { useEffect, useState } from "react";
import "./App.css";
import { useGetAllProductsQuery, useGetProductQuery } from "./redux/services";
import ProductCard from "./ProductCard";

function App() {
  const {
    data: allProducts,
    error: allProductsError,
    isLoading: allProductsIsLoading,
  } = useGetAllProductsQuery();

  const [searchInp, setSearchInp] = useState("");
  const {
    data: searchData,
    isLoading: searchIsLoading,
    error: searchError,
  } = useGetProductQuery(searchInp);

  useEffect(() => {}, [searchInp]);

  const handleSearch = (e) => {
    setSearchInp(e.target.value);
  };
  console.log(allProducts?.data);
  return (
    <div className="w-full p-10">
      <div className="w-full flex justify-center">
        <input
          name="search"
          placeholder="Search..."
          type="text"
          value={searchInp}
          onChange={(e) => handleSearch(e)}
          className="text-lg p-5 rounded-md w-1/2 border border-black"
        />
      </div>
      <div className="w-full text-red-800 grid grid-cols-1 gap-10 mt-10 md:grid-cols-3 flex-wrap text-center">
        {allProductsIsLoading ||
          searchIsLoading && <h2 className="text-3xl">Loading...</h2>}
        {searchInp === "" &&
          allProducts?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {searchInp !== "" &&
          searchData?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {allProductsError ||
          (searchError && <div>Error: {allProductsError}</div>)}
        {searchData?.products.length === 0 && <div>No products found</div>}
      </div>
    </div>
  );
}

export default App;
