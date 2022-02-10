const FETCH_STANDINGS = 'premstats/standings/FETCH_STANDINGS';
const FETCH_STANDINGS_SUCCESS = 'premstats/standings/FETCH_STANDINGS_SUCCESS';
const FETCH_STANDINGS_FAIL = 'premstats/standings/FETCH_STANDINGS_FAIL';

const intitalState = {
  standings: [],
  isLoading: false,
};

export const fetchStandings = () => ({
  type: FETCH_STANDINGS,
});

export const fetchStandingsSuccess = (payload) => ({
  type: FETCH_STANDINGS_SUCCESS,
  payload,
});

export const fetchStandingsFail = () => ({
  type: FETCH_STANDINGS_FAIL,
});

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_STANDINGS:
      return { ...state, isLoading: true };
    case FETCH_STANDINGS_SUCCESS:
      return { isLoading: false, standings: [...action.payload] };
    case FETCH_STANDINGS_FAIL:
      return { isLoading: false, standings: [] };
    default:
      return state;
  }
};

export default reducer;
