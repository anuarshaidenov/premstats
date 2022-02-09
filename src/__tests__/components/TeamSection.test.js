import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';
import TeamSection from '../../components/teams-section/TeamsSection';

const MockedTeamSection = () => (
  <BrowserRouter>
    <Provider store={store}>
      <TeamSection />
    </Provider>
  </BrowserRouter>
);

const mockedFetchAction = () => ({
  type: 'premstats/teams/FETCH_TEAMS_SUCCESS',
  payload: [
    {
      team: {
        id: 1,
        name: 'Manchester United',
        logo: 'https://media.api-sports.io/football/teams/33.png',
      },
    },
  ],
});

describe('TeamSection', () => {
  it('Should display list container', () => {
    render(<MockedTeamSection />);
    const listContainer = screen.getByRole('list');
    expect(listContainer).toBeInTheDocument();
  });

  it('Should initially display loading message', () => {
    render(<MockedTeamSection />);
    const message = screen.getByText('loading...');
    expect(message).toBeInTheDocument();
  });

  it('Should display correct amount of teams', async () => {
    render(<MockedTeamSection />);
    store.dispatch(mockedFetchAction());
    const teams = await screen.findAllByRole('heading', {
      name: 'Manchester United',
    });

    expect(teams.length).toBe(1);
  });

  it('Should display manchester united team correctly', async () => {
    render(<MockedTeamSection />);
    store.dispatch(mockedFetchAction());
    const team = await screen.findAllByRole('heading', {
      name: 'Manchester United',
    });

    expect(team[0]).toBeInTheDocument();
  });
});
