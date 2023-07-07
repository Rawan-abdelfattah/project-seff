import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../src/components/Header/Header";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";

export default function MainLayout() {
  return (
    <>
    {/* <Background/> */}
      <Header/>
      <Outlet />
      <Footer/>
    </>
  );
}
