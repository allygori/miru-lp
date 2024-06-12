import ProductOne from "@/app/components/cards/product-one";

const ProductList = () => {
  return (
    <div className="flex">
      <ul className="flex m-0 p-0">
        {[1, 2, 3, 4, 5, 6].map((item, idx) => {
          return (
            <li key={idx} className="w-2/12 px-1.5">
              <ProductOne />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
