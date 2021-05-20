import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Game Center</title>
        <meta
          name="description"
          content="Game Center Dashboard to check all new Pc and console video games release"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Games Releases Center</h1>
      
    </div>
  );
}
