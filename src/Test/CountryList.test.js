import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CountriesList from '../components/CountryList';

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  detail: {
    searchFilter: false,
  },
});

// Create a mock Redux store
test('renders CountriesList component correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <CountriesList />
      </MemoryRouter>
    </Provider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
