import { fetchTeams, fetchTeamsSuccess, fetchTeamsFailed } from './teams';

export const fetchTeamsFromAPI = async (dispatch) => {
  dispatch(fetchTeams);

  try {
    const res = await fetch(
      'https://v3.football.api-sports.io/teams?league=39&season=2021',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        },
      }
    );
    const data = await res.json();
    dispatch(fetchTeamsSuccess(data.response));
  } catch (e) {
    dispatch(fetchTeamsFailed());
    console.error(e);
  }
};
