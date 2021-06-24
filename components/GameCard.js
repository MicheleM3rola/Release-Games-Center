import React from "react";
import Link from "next/link";
import gameCardStyles from "../styles/GameCards.module.css";
import PropTypes from "prop-types";

const GameCard = ({ games, defaultCover }) => {
  const releaseDate = games.release_dates[0];

  return (
    <div className={gameCardStyles.Card}>
      <Link href="/">
        <a className={gameCardStyles.innerCard}>
          <div className={gameCardStyles.date}>
            <p>{releaseDate.human}</p>
          </div>
          <img
            srcSet={
              games.cover
                ? games.cover.url.replace("t_thumb", "t_cover_big")
                : defaultCover
            }
            alt={games.name}
            className={gameCardStyles.imgCard}
          />
        </a>
      </Link>

      <p className={gameCardStyles.titleCard}>{games.name}</p>
    </div>
  );
};

GameCard.defaultProps = {
  defaultCover: "/noCoverGame.jpg",
};

export default GameCard;
