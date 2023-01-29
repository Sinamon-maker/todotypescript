import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="w-full h-screen m-auto grow bg-cover  bg-no-repeat bg-center bg-hello-pattern ">
      <div className=" p-20 text-2xl text-slate-50 flex items-center">
        <h1 className=" text-4xl tracking-wide leading-normal">Welcome!</h1>
        <p className="pt-2 ml-2">
          Please,
          <span className="mx-2 border-solid border-b-2 border-red-600 hover:border-b-4">
            <Link to="/login">log in</Link>
          </span>
          or
          <span className="mx-2 border-solid border-b-2 border-red-600 hover:border-b-4">
            <Link to="/register">register</Link>
          </span>
          to start.
        </p>
      </div>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
