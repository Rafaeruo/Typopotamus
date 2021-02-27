import styles from "../styles/Letter.module.css";

interface props {
  letter: String;
  isActive: boolean;
}

function Letter(props: props) {
  return (
    <>
      {props.isActive ? (
        <span className={styles.letterCurrent}>{props.letter}</span>
      ) : (
        <span className={styles.letterUnreached}>{props.letter}</span>
      )}
    </>
  );
  // return <span style={{ color: "inherit" }}>{props.letter}</span>;
}

export default Letter;
