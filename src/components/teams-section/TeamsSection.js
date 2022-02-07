import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeamsFromAPI } from '../../redux/teams/thunk';

const TeamsSection = () => {
  const teams = useSelector((state) => state.teamsReducer.teams);
  const isLoading = useSelector((state) => state.teamsReducer.isLoading);
  const dispatch = useDispatch();
  useEffect(
    () => !teams.length && dispatch(fetchTeamsFromAPI()),
    [dispatch, teams.length]
  );
  return (
    <section className="teams-section">
      <ul className="teams-section__teams">
        {isLoading && `loading...`}
        {teams.length
          ? teams.map((team) => <li key={team.team.id}>{team.team.name}</li>)
          : null}
      </ul>
    </section>
  );
};

export default TeamsSection;
