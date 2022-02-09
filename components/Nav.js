import React, { useState } from "react";
import Link from "next/link";
//
import { Menu } from "semantic-ui-react";
import styles from "../styles/Navbar.module.css";

function Nav() {
  //
  const [activeItem, setActiveItem] = useState("home");
  //
  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }
  //
  return (
    <>
      <Menu inverted>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
          className={styles.font}
        >
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          name=""
          active={activeItem === "about"}
          onClick={handleItemClick}
          className={styles.font}
        >
          {/* <Link href={"/about"}>
            <a>About</a>
          </Link> */}
        </Menu.Item>
        <Menu.Item
          name="search"
          active={activeItem === "search"}
          onClick={handleItemClick}
          className={styles.font}
        >
          <Link href={"/domains"}>
            <a>Search</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={handleItemClick}
          className={styles.font}
        >
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Nav;
