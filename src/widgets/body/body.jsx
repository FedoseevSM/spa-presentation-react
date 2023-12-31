import React from "react"
import { useLocation } from "react-router-dom";

import { WelcomeScreen, AboutScreen, HomeScreen } from "./index.js";

export const Body = ({params}) => {
  let location = useLocation();
  const path = location.pathname.split("/");

  if (path.includes("about")) {
    return <AboutScreen />;
  }

  return (
    <div>
      <WelcomeScreen params={params} />
      <HomeScreen />
    </div>
  );
};
