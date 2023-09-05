import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchDetails } from '../redux/detail/detailSlice';
import AirItems from './AirItem';

const AirDetail = () => {
  const {
    details, country, capital, isLoading,
  } = useSelector((state) => state.detail);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  useEffect(() => {
    if (!lat && !lon) {
      return;
    }

    dispatch(fetchDetails({ lat, lon }));
  }, [dispatch, lat, lon]);

  if (!lat || !lon) {
    return <div>Latitude and longitude unavailable.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <div>
          <h2>
            {`${country}/ `}
            <span>{`${capital} air pollution statistics`}</span>
          </h2>
        </div>
      </header>
      <ul>
        {details && details.length > 0 ? (
          details.map((detailItem) => (
            <AirItems key={detailItem.name} detailItem={detailItem} />
          ))
        ) : (
          <li>No details available.</li>
        )}
      </ul>
    </div>
  );
};

export default AirDetail;
