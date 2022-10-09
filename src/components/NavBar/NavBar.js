import styles from "./NavBar.module.scss";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.navBar}>
          <Link to="/">
            <span className={"fa fa-tasks"} />
          </Link>
          <ul className={styles.navlist}>
            <li className={styles.navlink}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li className={styles.navlink}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to="/favorite"
              >
                FAVORITE
              </NavLink>
            </li>
            <li className={styles.navlink}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
