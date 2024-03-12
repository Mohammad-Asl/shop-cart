import { createContext, useState } from 'react'

import { getProductData , foodList } from '../../Data'

export const CartContext = createContext({
  items: [],
  deleteFromCart: () => {},
  getTotalAmount: () => {},
  plusItem: () => {},
  minueItem: () => {},
})

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(foodList);

  function getProductQuantity(id) {
    const quantity = cartProducts.find((item) => item.id === id)?.count

    if (quantity === undefined) {
      return 0
    }

    return quantity
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((item) => {
        return item.id != id
      })
    )
  }

  function getTotalAmount() {
    let totalAmount = 0

    cartProducts.map((item) => {
      const productData = getProductData(item.id)

      totalAmount += productData.price * item.count
    })

    return totalAmount
  }

  function changeItemCount(id, delta) {
    for (const product of cartProducts) {
        if (product.id == id) {
             product
        }
    } 

    const newList = cartProducts.map(product => {
        if (product.id == id) {
            product.count += delta;
        }
        return product;
    })

    setCartProducts([...newList]);
  }

  function minueItem(id) {
    changeItemCount(id, -1);
  }

  function plusItem(id) {
    changeItemCount(id, 1);
  }

  const ContextValue = {
    items: cartProducts,
    getProductQuantity,
    deleteFromCart,
    getTotalAmount,
    minueItem,
    plusItem,
  }

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  )
}