import React, { useState } from "react";
import hotelList from "../../assets/json/hotel-data.json";
import { Autocomplete, TextField } from "@mui/material";
import style from './search.module.css';


const Search = ({searchedValue,setSearchedValue}) => {
  const [searchState,setSearchState] = useState('')

  const handleSubmit = () => {
    setSearchedValue(searchState)
  }

  const handleClear = () => {
    setSearchState('')
    setSearchedValue('')
  }

  return (
    <div className={style['search-component-container']}>
      {searchedValue && <h1 className={style['search-header']}>Tour in {searchedValue}</h1>}
      <div className={style['search-container']}> 
       <section className={style['location-container']}>
       <Autocomplete
          className={style['location-autocomplete']}
          id="combo-box-demo"
          value={searchState}
          onChange={(event, newValue) => {
            setSearchState(newValue);
          }}
          options={hotelList.map((item) => item.place.state)}
          sx={{ width: 300 }}
          renderInput={(params) => 
          <TextField 
          InputProps={{
               }} 
               {...params} label="Search location...." />}
        />
       </section>
        <button onClick={handleSubmit} className={style['submit']} disabled={!searchState}>Search</button>
        <button onClick={handleClear} className={style['clear']} disabled={!searchState}>Clear</button>
      </div>
    </div>
  );
};

export default Search;
