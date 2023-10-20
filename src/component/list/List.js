import React, { useEffect, useState } from "react";
import style from "./list.module.css";
import { Rating } from "@mui/material";
import hotelImage from '../../assets/images/image33.jpeg'

const List = ({
    hotelName,
    hotelDescription,
    noOfRooms,
    state,
    country,
    rating,
    price,
    image,
    availabilty
}) => {

  const [availabilityStatus,setAvailabiltyStatus] = useState({
    status: '',
    color: ''
  })


const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

useEffect(() => {
if(availabilty?.start_date < formattedDate && availabilty?.end_date > formattedDate){
  setAvailabiltyStatus({
    status : 'Available',
    color: 'green'
  })
}
if(availabilty?.start_date > formattedDate){
  setAvailabiltyStatus({
    status : 'Booking Closed',
    color: 'red'
  })
}
},[availabilty, formattedDate])

  return (
    <div className={style["list-container"]}>
      <div className={style['image']}>
        <img src={hotelImage} height={200} width={200} alt='hotel'/>
      </div>
      <section className={style["data-section"]}>
        <div className={style['description-section']}>
          <h4 className={style['hotel-name']}>{hotelName}</h4>
          <p className={style['hotel-description']}>
            {hotelDescription}
          </p>
          <span className={style['no-of-rooms']}>No of rooms: {noOfRooms}</span>
          <p className={style['area']}>{state}, {country}</p>
          <p style={{color : availabilityStatus?.color, marginTop: '10px', fontSize: '1rem', fontWeight: '800'}} >{availabilityStatus?.status}</p>
        </div>
        <div className={style['price-review']}>
        <Rating name="read-only" value={rating} precision={0.5} readOnly />
          
            <p>${price}</p>
       
        </div>
      </section>
    </div>
  );
};

export default List;
