import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Cart from "./pages/customer/Cart";
import WishList from "./pages/customer/WishList";
import Menu from "./pages/customer/Menu";
import Service from "./pages/customer/Service";
import Shop from "./pages/customer/Shop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LoginForm from "./pages/Login";
import { AuthRoute, PrivateRoute, ProtectedRoute } from "./RouteAuth";
import NotFoundPage from "./NotFoundPage";
import About from "./pages/admin/About";
import Profile from "./pages/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<LoginForm />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/services" element={<Service />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact-us" element={<Contact />} />
            </Route>
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/about" element={<About />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
