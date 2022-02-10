const FETCH_TEAM = 'premstats/team/FETCH_TEAM';
const FETCH_TEAM_SUCCESS = 'premstats/team/FETCH_TEAM_SUCCESS';
const FETCH_TEAM_FAIL = 'premstats/team/FETCH_TEAM_FAIL';

const intitalState = {
  team: null,
  isLoading: false,
};

export const fetchTeam = () => ({
  type: FETCH_TEAM,
});

export const fetchTeamSuccess = (payload) => ({
  type: FETCH_TEAM_SUCCESS,
  payload,
});

export const fetchTeamFail = () => ({
  type: FETCH_TEAM_FAIL,
});

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_TEAM:
      return { ...state, isLoading: true };
    case FETCH_TEAM_SUCCESS:
      return { isLoading: false, team: { ...action.payload } };
    case FETCH_TEAM_FAIL:
      return { isLoading: false, team: null };
    default:
      return state;
  }
};

export default reducer;
