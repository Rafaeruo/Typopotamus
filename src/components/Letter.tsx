import styles from "../styles/Letter.module.css";

interface props {
  letter: String;
  isCurrent: boolean;
}

function Letter(props: props) {
  return (
    <>
      {props.isCurrent ? (
        <span className={styles.letterCurrent}>{props.letter}</span>
      ) : (
        <span className={styles.letterUnreached}>{props.letter}</span>
      )}
    </>
  );
  // return <span style={{ color: "inherit" }}>{props.letter}</span>;
}

export default Letter;
