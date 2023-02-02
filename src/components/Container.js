import { useContext } from "react";
import Button from "./Button";
import Header from "./Header";
import Profile from "./Profile";

import ThemeContext from "../context/ThemeContext";
function Container() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={`app ${theme}`}>
      <Header />
      <hr />
      <Button />
      <hr />
      <Profile />
    </div>
  );
}

export default Container;
