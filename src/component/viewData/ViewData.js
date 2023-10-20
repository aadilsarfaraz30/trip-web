import React, { useEffect, useState } from "react";
import style from "./viewData.module.css";
import List from "../list/List";
import hotelData from "../../assets/json/hotel-data.json";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const ViewData = ({ searchedValue }) => {
  const [listData, setData] = useState(hotelData);
  const [sortByHotelName, setSortByHotelName] = useState(false);

  const handleSortingByHotelName = () => {
    setSortByHotelName(!sortByHotelName);
    const sortedData = [...listData];

    sortedData.sort((a, b) => {
      if (sortByHotelName) {
        return a.hotel_name.localeCompare(b.hotel_name);
      } else {
        return b.hotel_name.localeCompare(a.hotel_name);
      }
    });

    setData(sortedData);
  };

  useEffect(() => {
    if (searchedValue) {
      const filterData = [...hotelData];
      const filteredData = filterData.filter(
        (item) => item?.place?.state === searchedValue
      );
      setData(filteredData);
    } else {
      setData(hotelData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedValue]);

  return (
    <div className={style["view-data-container"]}>
      <section className={style["view-data-main"]}>
        <div className={style["view-data-main-header"]}>
          {listData?.length > 1 && (
            <div
              className={style["sort-chip"]}
              onClick={handleSortingByHotelName}
            >
              <ImportExportIcon sx={{ color: "blueviolet" }} />
              <span>Hotel Name</span>
            </div>
          )}
        </div>
        <div className={style["view-data-list"]}>
          {listData?.map((item, index) => (
            <List
              key={index}
              hotelName={item?.hotel_name}
              hotelDescription={item?.description}
              state={item?.place?.state}
              country={item?.place?.country}
              price={item?.price}
              rating={item?.reviews?.rating}
              noOfRooms={item?.no_of_rooms}
              availabilty={item?.availability}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ViewData;
