import standingsReducer, {
  fetchStandings,
  fetchStandingsSuccess,
} from '../../redux/standings/standings';

describe('Testing standings reducer', () => {
  test('fetchStandings is working as expected', () => {
    const action = fetchStandings();
    const result = standingsReducer(
      {
        standings: [],
        isLoading: false,
      },
      action,
    );
    expect(result.isLoading).toBe(true);
    expect(result.standings.length).toBe(0);
  });

  test('fetchStandingsSuccess is working as expected', () => {
    const action = fetchStandingsSuccess(['team1', 'team2', 'team3']);
    const result = standingsReducer(
      {
        standings: [],
        isLoading: true,
      },
      action,
    );
    expect(result.isLoading).toBe(false);
    expect(result.standings.length).toBe(3);
    expect(result.standings[0]).toBe('team1');
  });
});
