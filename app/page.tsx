"use client";
import React from "react";
import Nav from "../components/navbar";
import Home from "../components/home";
import Info from "../components/info";
import Contact from "../components/contact";

export default function page() {
  return (
    <>
      <div>
        <Nav />
        <Home />
        <Info />
        <Contact />
      </div>
    </>
  );
}
