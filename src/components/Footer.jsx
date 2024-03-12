/* eslint-disable react/prop-types */
import { AiOutlineArrowLeft } from "react-icons/ai";

const Footer = ({totalPrice}) => {
  return (
    <div className="flex items-center justify-between mt-10">
      <a className="flex items-center">
        <AiOutlineArrowLeft />
        <span className="ml-4 text-xl text-[#2D7AEE] font-bold">Continue Shopping</span>
      </a>
      <div className="flex items-center">
        <span className="text-gray-400 font-bold">Subtotal: </span>
        <span className="font-bold text-2xl">${totalPrice}</span>
      </div>
    </div>
  );
};

export default Footer;
