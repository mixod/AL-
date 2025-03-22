import React from "react";
import Nav from "../Nav";
import { Outlet } from "react-router-dom";
import Contextsss from "../../Pages/Context/Contextsss";

function MainOutlet() {
  return (
    <div>
      <Contextsss>
        <Nav />
        <Outlet />
      </Contextsss>
    </div>
  );
}

export default MainOutlet;
