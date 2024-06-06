import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const CartItems = (props) => {
  const { id, image, title, price, size } = props.data;
  const { cartItems, addToCart, removeFromCart, deleteItem } =
    useContext(ShopContext);

  return (
    <div className="container mx-auto">
      <div className="flex mb-10 ">
        <div className=" ">
          <img src={image} alt="" className="w-9/12 md:w-10/12" />
        </div>
        <div className="flex items-center justify-between flex-grow oro">
          <div className="">
            <p className="font-Sat md:text-xl md:font-medium font-bold font-xl mb-2">
              {title}
            </p>

            <p className="font-Sat text-base font-extralight mb-2 hidden md:block">
              Clearamane
            </p>
            <p className="font-extralight font-Sat text-base mb-2">
              Size: {size}
            </p>
            <div className="flex items-center">
              <button
                onClick={() => removeFromCart(id)}
                className="w-10 h-10 flex items-center justify-center"
              >
                <span className="text-2xl">-</span>
              </button>

              <span className="text-2xl">{cartItems[id]}</span>
              <button
                onClick={() => addToCart(id)}
                className="w-10 h-10 flex items-center justify-center"
              >
                <span className="text-2xl">+</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-around">
            <button onClick={() => deleteItem(id)}>
              <ion-icon
                name="trash-bin-outline"
                className=""
                size="large"
              ></ion-icon>
            </button>
            <p className="font-Sat text-xl font-normal md:text-3xl mt-10">
              ${(cartItems[id] * price).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
