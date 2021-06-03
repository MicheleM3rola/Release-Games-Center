import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ConsoleFilter from "../components/ConsoleFilter";
import styles from "../styles/Home.module.css";
import GameList from "../components/GameList";

export default function Home({ games }) {
  const [allGames, setAllGames] = useState(games);
  const [sortedGames, setSortedGames] = useState([]);

  const filterGames = (console) => {
    let allGamez = games.map((game) => {
      return {
        ...game,
        platforms: game.platforms.filter((g) => g.id === console),
      };
    });

    const gamesPerConsole = allGamez.filter((g) => g.platforms[0]);

    setSortedGames(gamesPerConsole);
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Game Center</title>
          <meta
            name="description"
            content="Game Center Dashboard to check all new Pc and console video games release"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ConsoleFilter />
        <GameList />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/games`);
  const games = await res.json();

  // Pass data to the page via props
  return { props: { games } };
}
