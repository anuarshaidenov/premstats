/* eslint-disable import/prefer-default-export */
import { fetchFromAPI } from '../../utils/fetchFunctions';
import { fetchTeam, fetchTeamFail, fetchTeamSuccess } from './team';

export const fetchTeamFromAPI = (id) => async (dispatch) => {
  dispatch(fetchTeam());

  try {
    const team = await fetchFromAPI(
      `https://v3.football.api-sports.io/teams/statistics?season=2021&team=${id}&league=39`,
    );
    console.log(team.response);
    dispatch(fetchTeamSuccess(team.response));
  } catch (err) {
    console.error(err);
    dispatch(fetchTeamFail());
  }
};
