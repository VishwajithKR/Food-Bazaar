import React, { useRef, useState, useEffect, use } from "react";
import homeIcon from "../assets/images/main.svg";
import searchIcon from "../assets/images/searchicon.svg";
import logoutIcon from "../assets/images/logout.svg";
import wishlistIcon from "../assets/images/wishlist.svg";
import cartIcon from "../assets/images/cart.svg";
import profileIcon from "../assets/images/profile.svg";
import Button from "./commonButton/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/userSlice";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchData, setSearchData] = useState("");
    const {wishListData,cartListData,quantity}=useSelector((state) => state?.cart);
    const {role}=useSelector((state) => state?.user);
const dispatch =useDispatch();
  const searchRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const menuData1=[
    { id:1,name:"Home",link:"/"},
]


switch (role) {
  case "customer":
    menuData1.splice(1, 0, { id:2, name:"Menu", link:"/menu"},);
    menuData1.splice(3, 0, { id:3, name:"Services", link:"/services"});
    menuData1.splice(4, 0, { id:4, name:"Shop", link:"/shop"});
    menuData1.splice(5, 0, { id:5, name:"Contact Us", link:"/contact-us"});
    break;
  case "user":
    menuData1.splice(2, 0, { id:6, name:"Contact Us", link:"/contact-us"});
    menuData1.splice(3, 0, { id:7, name: "Syllabus", link: "/syllabus" });
    break;
  case "admin":
    menuData1.splice(2, 0, {id:8, name: "Management", label: "Management" });
    menuData1.splice(3, 0, {id:9, name: "Student's List", label: "/users" });
    break;
 
}

  const menuItems2 = [
    { path: "/profile", icon: profileIcon  , bgColor: "bg-gray-500/10", borderColor: "border-gray-500", title: "profile",count:0 },
    { path: null, icon: logoutIcon, bgColor: "bg-red-500/10", borderColor: "border-red-500/50", title: "logout",count:0 },
  ];

  switch (role) {
    case "customer":
      menuItems2.splice(0, 0,  { path: "/wishlist", icon: wishlistIcon, bgColor: "bg-blue-500/10", borderColor: "border-blue-500", title: "wishlist",count:wishListData?.length },);
      menuItems2.splice(1, 0,  { path: "/cart", icon: cartIcon, bgColor: "bg-green-500/10", borderColor: "border-green-500", title: "cart" ,count:cartListData.length },);
      break;
    case "admin":
      menuItems2.splice(1, 0, { path: "/about", icon: logoutIcon, bgColor: "bg-blue-500/10", borderColor: "border-blue-500/50", title: "logout",count:0 });
      break;
  }
      const permission = useSelector((state) => state.user.token);
  useEffect(() => {
    if (!isSearch) return;
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        if (searchData === "") {
          setIsSearch(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearch, searchData]);
  return (
    <div className="bg-[#f1f1f1] text-gray-900/75 z-40  min-h-[100px] fixed top-0 w-full flex items-center shadow-md">
      <div className="w-[20%] px-4 flex items-center justify-start gap-x-[10%]">
        <img src={homeIcon} alt="homeIcon" className="rotate-90" />
        <h2 className="text-[28px] uppercase font-semibold whitespace-nowrap">Food Bazaar</h2>
      </div>
      <div className="w-[40%] flex justify-center">
        <ul className="flex items-center justify-evenly w-full h-full text-[20px] font-[500]">
          {menuData1.map((item,index)=> <Link to={item.link} key={index}><li className={`${location.pathname === item.link && "text-gray-900"} cursor-pointer hover:text-gray-900 `}>{item.name}</li></Link> )}
        </ul>
      </div>
      <div className="w-[40%] flex justify-end px-4 gap-x-4">
        <div
          ref={searchRef} title="Search"
          className={`${isSearch ? "w-[50%]" : "w-[45px] h-[45px] border-2 border-transparent hover:border-gray-400/20 rounded-full overflow-hidden"} duration-400 ease-in transition-all relative`}
        >
          {!isSearch && (
            <img onClick={() => setIsSearch(true)} src={searchIcon}
              alt="searchIcon"
              className="absolute w-[25px] h-[25px] duration-400 ease-in transition-all cursor-pointer top-0 bottom-0 left-0 right-0 m-auto"
            />
          )}
          <input type="search" value={searchData} onChange={(e) => setSearchData(e.target.value)}
            className="w-full h-full px-4 py-1 rounded-[10px] outline-none bg-white"
          />
        </div>
      {!permission ?
        <div className="flex items-center gap-x-4">
     <Link to="/login">
     <Button title="Login" className="bg-gray-500/20 hover:bg-gray-500 hover:border-black/80 hover:text-white" handleClick={() => console.log("login")} />
     </Link> 
     <Link to="/login">
        <Button title="Register" className="bg-gray-500/50 hover:bg-gray-500 hover:text-white  hover:border-black/80" handleClick={() => console.log("register")} />
     </Link> 
      
        </div> :
          <>
          {menuItems2.map((item, index) => (
            <Link to={item.path} key={index}>
              <div title={item.title} onClick={() => item.path === null && (dispatch(setLogout()), navigate('/login'))}
                className={`w-[45px] h-[45px] rounded-full relative  ${item.bgColor} ${
                  location.pathname === item.path ? item.borderColor : "border-transparent"
                }  ${item.path === null ? "hover:border-red-500/50": item.path === '/cart' ? "hover:border-green-500/50" : `hover:border-blue-500/50`} border-[2px] cursor-pointer duration-400 p-2 relative`}
              >
               {item.count > 0 && <span className={`absolute z-50 bg-white -top-2 -right-1 text-[12px] font-[500] ${item.bgColor} border-2 border-gray-400 text-black w-[18px] h-[18px] flex justify-center items-center rounded-full`}>{item.count}</span>}
                <img src={item.icon} alt={item.title}
                  className="absolute w-[20px] h-[20px] top-0 bottom-0 left-0 right-0 m-auto"
                />
              </div>
            </Link>
          ))}
        </>}
      </div>
    </div>
  );
};

export default Header;
