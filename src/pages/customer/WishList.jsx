import React from "react";
import FoodList from "../../components/foodList/FoodList";
import { useSelector } from "react-redux";
import MenuTab from "../../components/foodList/MenuTab";

const WishList = () => {
  const { wishListData } = useSelector((state) => state?.cart);

  return (
    <div className="flex flex-col">
      <MenuTab />
      <div className="flex">
        <div className="w-[100%]">
          <FoodList foodData={wishListData} grid="grid-cols-5" addButton={false}/>
        </div>
        
      </div>
    </div>
  );
};

export default WishList;
