/* eslint-disable import/prefer-default-export */
import { fetchFromAPI } from '../../utils/fetchFunctions';
import { fetchTeams, fetchTeamsSuccess, fetchTeamsFailed } from './teams';

export const fetchTeamsFromAPI = () => async (dispatch) => {
  dispatch(fetchTeams());

  try {
    const data = await fetchFromAPI(
      'https://v3.football.api-sports.io/teams?league=39&season=2021',
    );
    console.log(data);
    dispatch(fetchTeamsSuccess(data.response));
  } catch (e) {
    dispatch(fetchTeamsFailed());
    console.error(e);
  }
};
