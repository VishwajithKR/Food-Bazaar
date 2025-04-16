import React, { useEffect } from 'react'
import ScrollableContainer from '../Scrollablecontainer'
import { useDispatch, useSelector } from 'react-redux';
import { setMenuData } from '../../redux/cartSlice';

const MenuTab = () => {
  const { menuData}=useSelector((state) => state?.cart);
  const dispatch =useDispatch();
  const activeTab = useSelector((state) => state?.cart?.ismenuData);
  useEffect(() => {
    dispatch(setMenuData("All"));
  },[])
  return (
   <ScrollableContainer>
        <div className="flex gap-x-6 w-max bg-">
          {menuData?.map((item, index) => (
            <button onClick={() => dispatch(setMenuData(item))}
              key={index}
              className={`flex justify-center items-center min-w-[132px] py-1 border-4 border-[#f1f1f1] capitalize rounded-2xl text-lg ${activeTab === item ? "bg-[#bfbfbf]" : "bg-[#f9f9f9]"} `}
            >
              {item}
            </button>
          ))}
        </div>
      </ScrollableContainer>
  )
}

export default MenuTab