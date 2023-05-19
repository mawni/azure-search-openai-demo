import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";
import optus from "../../assets/optus.svg";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>Optus GPT | Sample</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNav}>
                            <li className={styles.headerNavItem}>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavItem}>
                                <a href="https://www.optus.com.au/" target={"_blank"} title="Optus homepage">
                                    <img
                                        src={optus}
                                        alt="Optus logo"
                                        aria-label="Link to optus homepage"
                                        width="80px"
                                        height="80px"
                                        className={styles.githubLogo}
                                        style={{ margin: "0 auto" }}
                                    />
                                </a>
                            </li>
                            <li className={styles.headerNavItem}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>Azure OpenAI + Cognitive Search</h4>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
