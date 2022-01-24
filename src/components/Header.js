import React from "react";
import Search from "./Search";

function Header({onChangeSearchTerm}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onChangeSearchTerm={onChangeSearchTerm}/>
    </header>
  );
}

export default Header;
