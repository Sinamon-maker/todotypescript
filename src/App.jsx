import React from "react";

import style from "./app.Modules.scss";
console.log("style", style);
// import "./app.scss";

export default function App() {
  return (
    <>
      <h1 className={style.title}>Hallo</h1>
      <div className={style.box}></div>
    </>
  );
}
