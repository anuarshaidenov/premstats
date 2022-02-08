import { fetchFromAPI } from '../../utils/fetchFunctions';
import { fetchTeam } from './team';

export const fetchTeamFromAPI = (id) => async (dispatch) => {
  dispatch(fetchTeam());

  try {
    const team = await fetchFromAPI(
      `https://v3.football.api-sports.io/teams?league=${id}&season=2021`
    );
    console.log(team.response);
  } catch (err) {
    console.error(err);
  }
};
