/* eslint-disable import/prefer-default-export */
import { fetchFromAPI } from '../../utils/fetchFunctions';
import { fetchTeam, fetchTeamFail, fetchTeamSuccess } from './team';

export const fetchTeamFromAPI = (id) => async (dispatch) => {
  dispatch(fetchTeam());

  try {
    const team = await fetchFromAPI(
      `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=39&season=2021&team=${id}`,
    );
    console.log(team.response);
    dispatch(fetchTeamSuccess(team.response));
  } catch (err) {
    console.error(err);
    dispatch(fetchTeamFail());
  }
};
