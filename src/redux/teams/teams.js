const FETCH_TEAMS = 'FETCH_TEAMS';
const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
const FETCH_TEAMS_FAIL = 'FETCH_TEAMS_FAIl';

const intitalState = {
  teams: [],
  isLoading: false,
};

export const fetchTeams = () => ({
  type: FETCH_TEAMS,
});

export const fetchTeamsSuccess = (payload) => ({
  type: FETCH_TEAMS_SUCCESS,
  payload,
});

export const fetchTeamsFailed = () => ({
  type: FETCH_TEAMS_FAIL,
});

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_TEAMS:
      return { ...state, isLoading: true };
    case FETCH_TEAMS_SUCCESS:
      return { isLoading: false, teams: [...action.payload] };
    case FETCH_TEAMS_FAIL:
      return { isLoading: false, teams: [] };
    default:
      return state;
  }
};

export default reducer;
