import React, { useState } from "react";
import filterStyles from "../styles/ConsoleFilter.module.css";

const ConsoleFilter = () => {
  return (
    <div>
      <ul>
        <li>PC</li>
        <li>
          Playstation
          <ul>
            <li>PLaystation 4</li>
            <li>PLaystation 5</li>
          </ul>
        </li>
        <li>Xbox</li>
        <li>Nintendo Switch</li>
      </ul>
    </div>
  );
};

export default ConsoleFilter;
