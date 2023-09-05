import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import EuropeCountries from '../../components/EuropeCountries';

const initialState = {
  details: [],
  country: '',
  capital: '',
  isLoading: true,
  searchFilter: false,
};
export const fetchDetails = createAsyncThunk(
  'details/fetchDetails',
  async ({ lat, lon }) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=0d5c80144b4da5bbc9a662a12cb13bd6`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const { components } = data.list[0];
      const componentNames = {
        co: 'Carbon monoxide',
        no: 'Nitrogen monoxide',
        no2: 'Nitrogen dioxide',
        o3: 'Ozone',
        so2: 'Sulfur dioxide',
        pm2_5: 'Fine particulate matter',
        pm10: 'Coarse particulate matter',
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
  },
);
export const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    filterCountry: (state, action) => {
      state.searchFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        const [country, capital, array] = action.payload;
        state.country = country;
        state.capital = capital;
        state.details = array;
      })
      .addCase(fetchDetails.rejected, (state) => {
        state.isLoading = false;
        state.details = [];
        state.country = '';
        state.capital = '';
      });
  },
});
export const { filterCountry } = detailSlice.actions;
export default detailSlice.reducer;
