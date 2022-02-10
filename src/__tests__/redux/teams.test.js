import teamsReducer, {
  fetchTeams,
  fetchTeamsSuccess,
} from '../../redux/teams/teams';

describe('Testing teams reducer', () => {
  test('fetchTeams is working as expected', () => {
    const action = fetchTeams();
    const result = teamsReducer(
      {
        teams: [],
        isLoading: false,
      },
      action,
    );

    expect(result.isLoading).toBe(true);
    expect(result.teams.length).toBe(0);
  });

  test('fetchTeamsSuccess is working as expected', () => {
    const action = fetchTeamsSuccess(['team1', 'team2', 'team3']);
    const result = teamsReducer(
      {
        teams: [],
        isLoading: true,
      },
      action,
    );

    expect(result.isLoading).toBe(false);
    expect(result.teams.length).not.toBe(0);
    expect(result.teams[2]).toBe('team3');
  });
});
