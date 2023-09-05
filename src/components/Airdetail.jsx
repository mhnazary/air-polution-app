import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { useSearchParams } from 'react-router-dom';
import { fetchDetails } from '../redux/detail/detailSlice';
import chartData from './Chart';
import AirItems from './AirItem';

ChartJS.register(ArcElement, Tooltip, Legend);
const AirDetail = () => {
  const {
    details, country, capital, isLoading,
  } = useSelector(
    (state) => state.detail,
  );
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const infoArr = useSelector((state) => state.detail.details);

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
      <div className="chart-box">
        <h2>Doughnut Chart</h2>
        <Doughnut data={chartData(infoArr)} />
      </div>
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
