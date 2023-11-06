import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/locationReducer';
import style from './CodeCreate.module.css';
import { toast } from 'react-toastify';

function CodeCreate() {
  const [postalCode, setPostalCode] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // 400093
    e.preventDefault();
    if (!postalCode) return;

    dispatch(actions.toggleLoading(true));
    axios
      .get(`https://api.zippopotam.us/in/${postalCode}`)
      .then((res) => {
        const data = res.data;
        dispatch(actions.addLocation(data));
        dispatch(actions.toggleLoading(false));
        toast.success('Found your location');
        setPostalCode('');
      })
      .catch((err) => {
        dispatch(actions.toggleLoading(false));
        toast.error('wrong poastal code');
        console.log('errrrrrrr', err);
        setPostalCode('');
      });
  };

  return (
    <div className={style.form_container}>
      <h1 className={style.app_heading}>Code Information App</h1>
      <form onSubmit={handleSubmit} className={style.form}>
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
