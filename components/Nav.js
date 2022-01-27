import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import styles from '../styles/Navbar.module.css'

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
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={handleItemClick}
          className={styles.font}
        />
        <Menu.Item
          name="services"
          active={activeItem === "services"}
          onClick={handleItemClick}
          className={styles.font}
        />
      </Menu>
    </>
  );
}

export default Nav;
