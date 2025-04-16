import React from 'react';
import FoodList from "../../components/foodList/FoodList";
import { useSelector } from "react-redux";
import MenuTab from "../../components/foodList/MenuTab";
import CartDetails from '../../components/cartDetails/CartDetails';

const Cart = () => {
  const { cartListData } = useSelector((state) => state?.cart);
  return (
    <div className="flex flex-col">
      <MenuTab />
      <div className="flex">
        <div className={`${  cartListData ?.length > 0 ? "w-full" : "w-[750%]"}`}>
          <FoodList foodData={cartListData} grid="grid-cols-4" />
        </div>
        {
          cartListData ?.length > 0 &&  <div className="w-[25%] flex justify-start">
          <CartDetails/>
        </div>
        }
       
      </div>
    </div>
  )
}

export default Cart