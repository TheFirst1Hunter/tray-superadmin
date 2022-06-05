import React from "react";
import "./NavBar.css";
import LinkButton from "../linkButton";

function NavBar() {
  return (
    <div className="nav-bar">
      <br />
      <div
        style={{
          padding: "10px 10px 10px 10px",
        }}
      >
        <LinkButton text="car" path="instagram.com" emoji={"🤔"} />
      </div>
      <br />
      <div
        style={{
          padding: "10px 10px 10px 10px",
        }}
      >
        <LinkButton text="mail" path="instagram.com" emoji={"🤔"} />
      </div>
    </div>
  );
}

export default NavBar;
