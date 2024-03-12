import { useContext, useMemo } from "react";
import Item from "./Item";
import Footer from "./Footer";
import { CartContext } from "../context/CartContext";

const Items = () => {
 const {items} = useContext(CartContext);

  const totalPrice = useMemo(() => {
    return items.map((item) => item.price * item.count)
      .reduce((total, num) => {
        return total + num;
      })
    }, [items]);

  return (
    <>
      <div className="">
        {items.map((i) => (
          <Item
            id={i.id}
            key={i.id}
            img={i.img}
            price={i.price}
            title={i.title}
          />
        ))}
      </div>
      <Footer totalPrice={totalPrice} />
    </>
  );
};

export default Items;
