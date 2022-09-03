/* eslint-disable import/prefer-default-export */
import { fetchFromAPI } from '../../utils/fetchFunctions';
import { fetchTeams, fetchTeamsSuccess, fetchTeamsFailed } from './teams';

const today = new Date();
const currentYear = today.getFullYear();

export const fetchTeamsFromAPI = () => async (dispatch) => {
  dispatch(fetchTeams());

  try {
    const data = await fetchFromAPI(
      `https://api-football-v1.p.rapidapi.com/v3/teams?league=39&season=${currentYear}`,
    );
 
    console.log(data);
    dispatch(fetchTeamsSuccess(data.response));
  } catch (e) {
    dispatch(fetchTeamsFailed());
    console.error(e);
  }
};
