import React from "react";
import { Link } from "react-router-dom"; // only use link terms when you are linking internally in your website
import styles from "./Nav.module.scss"

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <div>Bookmark</div>
      </Link>
    </div>
  );
};

export default Nav;