import React from "react";
import navStyle from "../styles/Nav.module.css";
import { FcSearch } from "react-icons/fc";
const Navbar = () => {
  return (
    <div className={navStyle.ctnNav}>
      <section className={navStyle.sectionOne}>
        <h1>G.R.C</h1>
        <form className={navStyle.formControll}>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search Games"
          />
          <button>
            <FcSearch />
          </button>
        </form>
      </section>
    </div>
  );
};

export default Navbar;
