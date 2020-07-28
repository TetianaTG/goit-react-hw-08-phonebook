import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Header.module.css";

const Header = ({ isAuth }) => {
  return (
    <header>
      <nav>
        <ul className={styles.pageList}>
          {!isAuth && (
            <li className={styles.pageListItem}>
              <NavLink to="/registration" activeClassName={styles.active}>
                Registration
              </NavLink>
            </li>
          )}

          {!isAuth && (
            <li className={styles.pageListItem}>
              <NavLink exact to="/" activeClassName={styles.active}>
                Login
              </NavLink>
            </li>
          )}

          {isAuth && (
            <li className={styles.pageListItem}>
              <NavLink to="/phonebook" activeClassName={styles.active}>
                Phonebook
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authRoot.isAuth,
  };
};

export default connect(mapStateToProps)(Header);