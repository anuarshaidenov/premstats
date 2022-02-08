import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TeamForm from '../../components/team-form/TeamForm';
import TeamLeague from '../../components/team-league/TeamLeague';
import TeamMatches from '../../components/team-matches/TeamMatches';
import Team from '../../components/team/Team';
import { fetchTeamFromAPI } from '../../redux/team/thunk';
import './team-page.scss';

const TeamPage = () => {
  const { teamID } = useParams();
  const team = useSelector((state) => state.teamReducer.team);
  const isLoading = useSelector((state) => state.teamReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeamFromAPI(teamID));
  }, [dispatch, teamID]);

  return (
    <div className="team-page container container--small">
      {isLoading ? (
        'loading...'
      ) : (
        <ul className="team-page__stats">
          <Team team={team.team} />
          <TeamForm form={team.form} className="team-page__form" />
          <TeamLeague league={team.league} className="team-page__league" />
          <TeamMatches
            className="team-page__matches"
            total={team.fixtures.played.total}
            wins={team.fixtures.wins.total}
            draws={team.fixtures.draws.total}
            loses={team.fixtures.loses.total}
          />
        </ul>
      )}
    </div>
  );
};

export default TeamPage;
