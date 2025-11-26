import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import GrandOpeningMarquee from "../components/GrandOpeningMarquee";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <GrandOpeningMarquee /> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
