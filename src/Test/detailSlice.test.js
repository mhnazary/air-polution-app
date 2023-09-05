import { configureStore } from '@reduxjs/toolkit';
import { fetchDetails, detailSlice } from '../redux/detail/detailSlice';

describe('detailsSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        details: detailSlice.reducer,
      },
    });
  });

  it('should handle fetchDetails.pending correctly', () => {
    store.dispatch(fetchDetails.pending());

    const state = store.getState().details;

    expect(state.isLoading).toBe(true);
  });

  it('should handle fetchDetails.fulfilled correctly', () => {
    const country = 'Country';
    const capital = 'Capital';
    const details = [
      { name: 'Component 1', value: 100 },
      { name: 'Component 2', value: 200 },
    ];

    const payload = [country, capital, details];

    store.dispatch(fetchDetails.fulfilled(payload));

    const state = store.getState().details;

    expect(state.isLoading).toBe(false);
    expect(state.country).toBe(country);
    expect(state.capital).toBe(capital);
    expect(state.details).toEqual(details);
  });

  it('should handle fetchDetails.rejected correctly', () => {
    const error = new Error('Failed to fetch data');

    store.dispatch(fetchDetails.rejected(error));

    const state = store.getState().details;

    expect(state.isLoading).toBe(false); // Failing assertion - Expected: false, Received: true
    expect(state.details).toEqual([]); // Failing assertion - Expected: [], Received: undefined
    expect(state.country).toBe(''); // Failing assertion - Expected: '', Received: undefined
    expect(state.capital).toBe(''); // Failing assertion - Expected: '', Received: undefined
  });

  it('should handle filterCountry correctly', () => {
    const initialState = {
      details: [],
      country: '',
      capital: '',
      isLoading: true,
      searchFilter: false,
    };

    const action = detailSlice.actions.filterCountry(true);

    const state = detailSlice.reducer(initialState, action);

    expect(state.searchFilter).toBe(true); // Failing assertion - Expected: true, Received: false
  });
});
