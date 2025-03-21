import React from "react";
import Nav from "../Nav";
import { Outlet } from "react-router-dom";

function MainOutlet() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default MainOutlet;
