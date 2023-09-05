import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import EuropeCountries from '../../components/EuropeCountries';

const initialState = {
  details: [],
  country: '',
  capital: '',
  isLoading: true,
  searchFilter: false,
};
export const fetchDetails = createAsyncThunk('details/fetchDetails', async ({ lat, lon }) => {
  try {
    const response = await axios(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=0d5c80144b4da5bbc9a662a12cb13bd6`,
    );

    const { components } = response.data.list[0];

    const componentNames = {
      co: 'Carbon monoxide',
      no: 'Nitrogen monoxide',
      no2: 'Nitrogen dioxide',
      o3: 'Ozone',
      so2: 'Sulfur dioxide',
      pm2_5: 'Fine particulate matter (PM2.5)',
      pm10: 'Coarse particulate matter (PM10)',
      nh3: 'Ammonia',
    };
    const componentArray = Object.entries(components).map(([key, value]) => ({
      name: componentNames[key],
      value,
    }));

    const { country, capital } = EuropeCountries.find(
      (data) => data.latitude.toString() === lat && data.longitude.toString() === lon,
    );

    return [country, capital, componentArray];
  } catch (error) {
    return error.message;
  }
});
export const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    filterCountry: (state, action) => {
      const newState = { ...state };
      if (action.payload) {
        newState.searchFilter = false;
      } else {
        newState.searchFilter = true;
      }
      return newState;
    },
    filterCapital: (state) => {
      const newState = { ...state };
      newState.searchFilter = false;
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        const [country, capital, array] = action.payload;
        newState.country = country;
        newState.capital = capital;
        newState.details = array;
        return newState;
      });
  },
});
export const { filterCapital, filterCountry } = detailSlice.actions;
export default detailSlice.reducer;
