import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import ConsoleFilter from "../components/ConsoleFilter";
import styles from "../styles/Home.module.css";
import GameList from "../components/GameList";

export default function Home({ games }) {
  const [sortedGames, setSortedGames] = useState([]);

  const getGames = () => {
    return setSortedGames(games);
  };

  const filterGames = (console) => {
    let allGamez = [...sortedGames];

    allGamez = games.map((game) => {
      return {
        ...game,
        platforms: game.platforms.filter((g) => g.name === console),
      };
    });

    if (console !== "All Games") {
      allGamez = allGamez.filter((g) => g.platforms[0]);
    }
    setSortedGames(allGamez);
  };

  console.log(sortedGames);

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

        <ConsoleFilter games={games} gamesFiltred={filterGames} />
        <GameList sortedGames={sortedGames} getGames={getGames} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API

  const res = await fetch(`https://release-games-center.vercel.app/api/games`);
  const games = await res.json();

  // Pass data to the page via props
  return { props: { games } };
}
