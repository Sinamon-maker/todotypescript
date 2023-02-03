import React from "react";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="w-full h-screen m-auto grow bg-cover  bg-no-repeat bg-center bg-hello-pattern ">
      <Outlet />
    </div>
  );
}

export default Main;
