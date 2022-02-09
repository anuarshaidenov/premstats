import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Standings from '../../components/standings/Standings';

const MockedStandings = () => (
  <Provider store={store}>
    <Standings />
  </Provider>
);

const mockedFetchAction = () => ({
  type: 'premstats/standings/FETCH_STANDINGS_SUCCESS',
  payload: [
    {
      rank: 1,
      team: {
        id: 50,
        name: 'Manchester City',
        logo: 'https://media.api-sports.io/football/teams/50.png',
      },
      points: 57,
      all: {
        played: 23,
        win: 18,
        draw: 3,
        lose: 2,
        goals: {
          for: 55,
          against: 14,
        },
      },
    },
  ],
});

describe('Standings component', () => {
  it('should render loading message initially', () => {
    render(<MockedStandings />);
    const message = screen.getByText('Loading...');
    expect(message).toBeInTheDocument();
  });

  it('should render the correct amount of teams', async () => {
    render(<MockedStandings />);
    store.dispatch(mockedFetchAction());
    const teams = await screen.findAllByText('Manchester City');
    expect(teams.length).toBe(1);
  });

  it('should render the correct data', async () => {
    render(<MockedStandings />);
    store.dispatch(mockedFetchAction());
    const teams = await screen.findAllByText('Manchester City');
    expect(teams[0]).toBeInTheDocument();
  });
});
