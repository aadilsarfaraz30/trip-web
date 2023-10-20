import React, { useState } from "react";
import style from "./main.module.css";
import Search from "../../component/search/Search";
import ViewData from "../../component/viewData/ViewData";
const Main = () => {
  const [searchedValue, setSearchedValue] = useState("");

  return (
    <div className={style["main-container"]}>
      <section className={style["search-section"]}>
        <Search
          searchedValue={searchedValue}
          setSearchedValue={setSearchedValue}
        />
      </section>
      <section className={style["view-data-section"]}>
        <ViewData searchedValue={searchedValue} />
      </section>
    </div>
  );
};

export default Main;
