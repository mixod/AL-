import React from "react";
import Nav from "../Nav";
import { Outlet } from "react-router-dom";
import { ContextNew } from "../../Pages/Context/Contextsss";

function MainOutlet() {
  return (
    <div>
      <ContextNew>
        <Nav />
        <Outlet />
      </ContextNew>
    </div>
  );
}

export default MainOutlet;
