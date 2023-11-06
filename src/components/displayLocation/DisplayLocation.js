import React from 'react';
import style from './DisplayLocation.module.css';
import { useSelector } from 'react-redux';
import { codeInfoSelector } from '../../redux/locationReducer';

function DisplayLocation() {
  const locations = useSelector(codeInfoSelector);
  console.log(locations);
  return (
    <div className={style.locations_container}>
      <h1 className={style.location_head}>Locations</h1>
      <div className={style.locations}>
        {locations.map((data, i) => {
          return (
            <div key={i} className={style.location_info}>
              <h1 className={style.location_info_code}>Post Code-{data['post code']}</h1>
              <h2 className={style.location_info_country}>{data.country}</h2>
              <div className={style.places_container}>
                {data.places.map((d) => (
                  <div className={style.places}>
                    <h3>{d.state}</h3>
                    <p>{d['place name']}</p>
                  </div>
                ))}
              </div>
              <button className={style.clear_btn}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayLocation;
