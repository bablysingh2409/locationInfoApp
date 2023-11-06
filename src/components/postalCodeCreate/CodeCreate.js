import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/locationReducer';

function CodeCreate() {
  const [postalCode, setPostalCode] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // 400093
    e.preventDefault();
    setLoading(true);
    axios
      .get(`https://api.zippopotam.us/in/${postalCode}`)
      .then((res) => {
        // console.log(res.data);
        const data = res.data;
        // console.log(data);
        dispatch(actions.addLocation(data));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log('errrrrrrr', err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="enter postal code"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CodeCreate;
