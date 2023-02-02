import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError() as { [key: string]: any };
  console.error(error);
  type Terror = typeof error;

  const erop =
    typeof error !== "undefined"
      ? error
      : { statusText: 3, message: "My message" };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{erop?.message}</i>
      </p>
    </div>
  );
};
