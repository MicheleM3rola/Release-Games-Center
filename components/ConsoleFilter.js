import React, { useState } from "react";
import Link from "next/link";
import filterStyles from "../styles/ConsoleFilter.module.css";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const ConsoleFilter = ({ gamesFiltred, games }) => {
  let platformz = [
    ...new Set(games.flatMap(({ platforms }) => platforms)),
  ].sort();

  let uniquePlatforms = getUnique(platformz, "name");

  uniquePlatforms = ["All Games", ...uniquePlatforms];

  uniquePlatforms = uniquePlatforms.map((item, index) => {
    return (
      <Link href="/" key={index}>
        <a
          className={filterStyles.platform}
          onClick={() => {
            return gamesFiltred(item);
          }}
        >
          {item}
        </a>
      </Link>
    );
  });

  return <div className={filterStyles.navPLatforms}>{uniquePlatforms}</div>;
};

export default ConsoleFilter;
