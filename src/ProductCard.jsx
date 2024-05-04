const ProductCard = ({ product }) => {
  return (
    <div className="col-span-1 font-bold text-center p-[10px] h-full border border-black rounded-md">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-[200px] block"
      />
      <div className="texts">
        <h3 className="text-[30px] font-bold text-purple-500">
          {product.title}
        </h3>
        <p className="text-[15px] font-normal text-gray-500">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
