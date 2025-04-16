import React from "react";
import {  useSelector } from "react-redux";
import FoodList from "../../components/foodList/FoodList";
import MenuTab from "../../components/foodList/MenuTab";

const Menu = () => {
  const {  foodData } = useSelector((state) => state?.cart);
 
  return (
    <div className="flex flex-col">
      <MenuTab/>
      <FoodList foodData={foodData} />
    </div>
  );
};

export default Menu;
