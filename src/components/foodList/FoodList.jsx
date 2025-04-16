import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartListData, setRemoveCartList, setWishListData } from "../../redux/cartSlice";
import HeartIcon from "../../assets/images/heart.svg";
import HeartFillIcon from "../../assets/images/heartfill.svg";

const FoodList = ({foodData,grid="grid-cols-5",addButton=true}) => {
const pathname = window.location.pathname;

  const {ismenuData,wishListData,cartListData,totalAmount,overAllQuantity}=useSelector((state) => state?.cart);
  const filteredData = ismenuData === "All" ? foodData : foodData?.filter(item => item?.menuName === ismenuData);
  const dispatch =useDispatch();

  return (
    <div className="flex flex-col gap-y-4">  
    {filteredData?.length > 0 ? (
        <div className={`p-10 pt-2 grid ${grid} place-items-center gap-y-10 justify-center`} >
            { filteredData?.map((item,index) => (
              <div key={index} className="relative w-[270px] h-[440px] rounded-2xl flex items-start justify-center bg-[#26242e] overflow-hidden">
               <h2 className="absolute top-[10px] left-[10px] text-[24px] font-[500] text-white">{item?.menuName}</h2>
               <div className="absolute top-[10px] right-[10px] text-[24px] font-[500] text-white z-20 cursor-pointer">
                 <img onClick={() => dispatch(setWishListData(item))}   src={wishListData.some((obj) => obj?.id === item?.id) ? HeartFillIcon : HeartIcon} 
                    alt="HeartIcon" 
                    className="w-[30px] h-[30px] cursor-pointer" 
                  />
                  </div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/cajaregistradora-776cc.appspot.com/o/pngwing.com(2).png?alt=media&token=bde13cf8-4b17-4da9-90cf-c16db83b2e1f"
                    alt="Veggie Burger"
                    className="z-10 w-[270px] p-9"
                  />
                  <div
                    className="absolute top-[-130px] left-[110px] w-[300px] h-[300px] bg-cover opacity-70"
                    style={{
                      backgroundImage:
                        "url(https://firebasestorage.googleapis.com/v0/b/cajaregistradora-776cc.appspot.com/o/KEY0.CC-Mandala-Png-Pic-Mandalas-florales.png?alt=media&token=e48fe279-132b-4701-bedb-119b3511acf6)",
                    }}
                  ></div>
                  <div className="absolute z-10 bottom-2 w-[255px] h-[230px] text-white p-2 font-poppins rounded-lg backdrop-blur-sm bg-white/20 border border-white/30 flex flex-col justify-evenly">
                    <h4 className="text-lg font-bold flex justify-between items-center"><span>{item?.name}</span> {pathname === "/cart" && <span className="text-[16px] text-white/50">${item?.totalPrice}</span>} </h4>
                    <p className="text-sm text-gray-400">
                      {item?.description}
                    </p>
                    <p className="text-sm text-gray-400">{item?.description}</p>
                    <div className={`flex  items-center px-1  ${pathname === "/wishlist" && cartListData.some(cartItem => cartItem.id === item.id) ? "w-full justify-center bg-[#f9b02d] rounded-md h-[40px]" :" justify-between" }`}>
                      <h2 className="text-2xl font-bold">${item?.price}</h2>
                      {pathname === "/wishlist" && !cartListData.some(cartItem => cartItem.id === item.id) && (
                        <button
                          onClick={() => dispatch(setCartListData(item))}
                          className="w-[154px] capitalize h-[40px] cursor-pointer text-center text-white font-bold bg-[#f9b02d] rounded-md flex items-center justify-center"
                        >
                          Add to Cart
                        </button>
                      )}
  
                      {addButton && ( <>
                          {cartListData.some(cartItem => cartItem.id === item.id) ?(
                                  <div className="flex flex-row gap-x-0.5" >
                              <button
                              onClick={() => dispatch(setRemoveCartList(item))}
                                className="w-[50px] capitalize h-[40px] cursor-pointer text-center text-white font-bold bg-[#f9b02d] rounded-md flex items-center justify-center"
                              >
                              -
                              </button>
                              <span className="w-[50px] capitalize h-[40px] pointer-events-none text-center text-white font-bold bg-[#f9b02d] rounded-md flex items-center justify-center">
                                {item.quantity}
                              </span>
                              <button
                              onClick={() => dispatch(setCartListData(item))}
                                className="w-[50px] capitalize h-[40px] cursor-pointer text-center text-white font-bold bg-[#f9b02d] rounded-md flex items-center justify-center"
                              >
                              +
                              </button>
                              </div>
                              ) : ( <button
                                onClick={() => dispatch(setCartListData(item))}
                                  className="w-[154px] capitalize h-[40px] cursor-pointer text-center text-white font-bold bg-[#f9b02d] rounded-md flex items-center justify-center"
                                >
                                add to cart
                                </button>)}
                        </>
                        )} 
                    </div>
                    </div>
                </div>
            ))}
  
      </div>
    ):(
        <div className="flex w-full h-[50vh] capitalize justify-center items-center text-black/50 font-extrabold text-[50px]">Please Select the food</div>
    )}
      
    </div>
  );
};

export default FoodList;
