import './teams-section.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeamsFromAPI } from '../../redux/teams/thunk';
import Team from '../team/Team';

const TeamsSection = () => {
  const teams = useSelector((state) => state.teamsReducer.teams);
  const isLoading = useSelector((state) => state.teamsReducer.isLoading);
  const dispatch = useDispatch();
  useEffect(
    () => !teams.length && dispatch(fetchTeamsFromAPI()),
    [dispatch, teams.length]
  );
  return (
    <section className="teams-section container container--small">
      <ul className="teams-section__teams">
        {isLoading && `loading...`}
        {teams.length
          ? teams.map((team) => <Team key={team.team.id} team={team.team} />)
          : null}
      </ul>
    </section>
  );
};

export default TeamsSection;
