import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <strong>TYPOpotamus</strong>
      <ul>
        <li>Type</li>
        <li>Settings</li>
      </ul>
    </header>
  );
}

export default Header;
