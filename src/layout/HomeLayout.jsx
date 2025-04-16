import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className=" ">
      <Header />
      <div className="mt-[100px]">
      <Outlet />
      <Footer />
      </div>
    </div>
  );
};


export default HomeLayout;
