/* eslint-disable import/prefer-default-export */
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
      'https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=39',
    );
    console.log(standings);
    dispatch(
      fetchStandingsSuccess([standings.response][0][0].league.standings[0]),
    );
  } catch (err) {
    console.error(err);
    dispatch(fetchStandingsFail());
  }
};
