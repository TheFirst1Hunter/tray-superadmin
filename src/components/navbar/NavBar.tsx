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
        <LinkButton text="restaurants" path="/" emoji={"🍽️"} />
      </div>
      <br />
      <div
        style={{
          padding: "10px 10px 10px 10px",
        }}
      >
        <LinkButton text="mail" path="instagram.com" emoji={"🤔"} />
      </div>

      <button style={{ bottom: "20%", marginLeft: "45%", marginTop: "90%" }}>
        logout
      </button>
    </div>
  );
}

export default NavBar;
