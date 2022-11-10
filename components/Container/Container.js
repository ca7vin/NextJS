import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Container(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
