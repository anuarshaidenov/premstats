import teamReducer, {
  fetchTeam,
  fetchTeamSuccess,
} from '../../redux/team/team';

describe('Testing team reducer', () => {
  test('fetchTeam is working as expected', () => {
    const action = fetchTeam();
    const result = teamReducer({ team: null, isLoading: false }, action);

    expect(result.team).toBe(null);
    expect(result.isLoading).toBe(true);
  });

  test('fetchTeamSuccess is working as expected', () => {
    const action = fetchTeamSuccess({ name: 'manchester united' });
    const result = teamReducer({ team: null, isLoading: true }, action);

    expect(result.team).not.toBe(null);
    expect(result.team.name).toBe('manchester united');
    expect(result.isLoading).toBe(false);
  });
});
