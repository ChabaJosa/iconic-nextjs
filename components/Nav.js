import React, { useState } from "react"; 
import { useRouter } from "next/router";
//
import { Menu } from "semantic-ui-react";
import styles from "../styles/Navbar.module.css";

function Nav() {
  //
  const [activeItem, setActiveItem] = useState("home");
  const router = useRouter();
  //
  async function handleItemClick(e, { name }) {
    if (name === "home") {
      await router.push(`/`);
    } else if (name === "search") {
      await router.push(`/domains`);
    } else {
      await router.push(`/${name}`);
    }
    await setActiveItem(name);
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
          <p>Home</p>
        </Menu.Item>
        <Menu.Item
          name="search"
          active={activeItem === "search"}
          onClick={handleItemClick}
          className={styles.font}
        >
          <p>Search</p>
        </Menu.Item>
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={handleItemClick}
          className={styles.font}
        >
          <p>About</p>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Nav;
