//import Footer from "./Footer"
import { CartProvider } from "../context/CartContext";
import Items from "./Items";

const LeftPage = () => {
  return (
    <CartProvider>
      <div className="flex-1">
        <h1 className="font-bold md:text-3xl sm:text-3xl text-2xl ">
          Shopping Cart
        </h1>
        <Items />
      </div>
    </CartProvider>
  );
};

export default LeftPage;
