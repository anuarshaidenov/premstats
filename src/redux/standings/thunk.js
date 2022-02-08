import { fetchFromAPI } from '../../utils/fetchFunctions';
import {
  fetchStandings,
  fetchStandingsFail,
  fetchStandingsSuccess,
} from './standings';

export const fetchStandingsFromAPI = () => async (dispatch) => {
  dispatch(fetchStandings());

  try {
    const standings = await fetchFromAPI(
      `https://v3.football.api-sports.io/standings?league=39&season=2021`
    );

    dispatch(
      fetchStandingsSuccess([standings.response][0][0].league.standings)
    );
  } catch (err) {
    console.error(err);
    dispatch(fetchStandingsFail());
  }
};