import React from 'react';
import { useSelector } from 'react-redux';
import { codeInfoSelector } from '../../redux/locationReducer';

function DisplayLocation() {
  const locations = useSelector(codeInfoSelector);
  console.log(locations);
  return (
    <div>
      {locations.map((data, i) => {
        return (
          <div key={i}>
            <h1>Post Code-{data['post code']}</h1>
            <h2>{data.country}</h2>
            <div>
              {data.places.map((d) => (
                <div>
                  <h3>State:{d.state}</h3>
                  <p>Place:{d['place name']}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayLocation;
