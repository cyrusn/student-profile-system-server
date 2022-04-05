import Board from "../components/board";
import styles from "../styles/Home.module.css";
import Counter from "../components/counter";
import Reset from "../components/reset";
import Congratulation from "../components/congratulation";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Counter />
        <Congratulation />
        <Board />
        <Reset />
      </div>
    </div>
  );
}
