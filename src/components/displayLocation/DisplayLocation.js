import React from 'react';
import style from './DisplayLocation.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { codeInfoSelector, actions, loadingSelector } from '../../redux/locationReducer';

function DisplayLocation() {
  const locations = useSelector(codeInfoSelector);
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch();
  console.log(locations);

  if (loading) {
    return <span className={style.loader}></span>;
  }

  return (
    <div className={style.locations_container}>
      <h1 className={style.location_head}>Locations</h1>
      <div className={style.locations}>
        {locations.map((data, idx) => {
          return (
            <div key={idx} className={style.location_info}>
              <h1 className={style.location_info_code}>Post Code-{data['post code']}</h1>
              <h2 className={style.location_info_country}>{data.country}</h2>
              <div className={style.places_container}>
                {data.places.map((d, i) => (
                  <div className={style.places} key={i}>
                    <h3>{d.state}</h3>
                    <p>{d['place name']}</p>
                  </div>
                ))}
              </div>
              <button
                className={style.clear_btn}
                onClick={() => dispatch(actions.deleteLocation(idx))}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayLocation;
