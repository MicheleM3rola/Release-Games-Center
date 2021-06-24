import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import gameListStyles from "../styles/GameList.module.css";

const GameList = ({ sortedGames, getGames }) => {
  useEffect(() => {
    return getGames();
  }, []);
  return (
    <div className={gameListStyles.gameListCtn}>
      {sortedGames.map((game, index) => {
        return <GameCard key={index} games={game} />;
      })}
    </div>
  );
};

export default GameList;
