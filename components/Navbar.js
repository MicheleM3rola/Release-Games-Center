import React from "react";
import navStyle from "../styles/Nav.module.css";
import { FcSearch } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className={navStyle.ctnNav}>
      <section className={navStyle.sectionOne}>
        <h1>G.R.C</h1>
      </section>
      <section className={navStyle.sectionTwo}>
        <ul className={navStyle.listLink}>
          <li className={navStyle.twich}>
            <Link href="https://www.twitch.tv/">
              <a>Twich</a>
            </Link>
          </li>
          <li className={navStyle.youtube}>
            <FaYoutube />
            <Link href="https://www.youtube.com/">
              <a>Youtube</a>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
