/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useState , useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../context/CartContext";

const Item = ({ id, title , img, price }) => {

  const cart = useContext(CartContext);

  const [counter, setCounter] = useState(1);

  const mines = () => {
    if (counter <= 1) {
      return;
    } else {
      setCounter((counter) => counter - 1);
      cart.minueItem(id);
    }
  };
  const plus = () => {
    setCounter((counter) => counter + 1);
    cart.plusItem(id);
  };

  const handleRemove = () => {
    cart.deleteFromCart(id);
  }

  return (
    <>
      <div className=" mt-8 border-b-2 w-full">
        <div className="flex items-center justify-between w-full">
          <img className="w-[140px] mr-8" src={img} />
          <div className="flex flex-col max-w-[5rem]">
            <p className="font-bold">{title}</p>
            <small className="text-[#DADBDB] font-bold">#4333229</small>
          </div>
          <div className="flex gap-5 items-center ml-20">
            <button className="text-xl font-bold" onClick={mines}>
              -
            </button>
            <span className="border-solid border-2 border-gray-300  rounded-lg flex justify-center px-5">
              {counter}
            </span>
            <button className="text-xl font-bold" onClick={plus}>
              +
            </button>
          </div>
          <span className="ml-20 font-bold text-xl">${(price*counter).toFixed(2)}</span>
          <AiOutlineClose
            onClick={handleRemove}
            className="ml-20 text-xl cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Item;
