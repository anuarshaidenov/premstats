import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Standings from '../../components/standings/Standings';
import TeamForm from '../../components/team-form/TeamForm';
import TeamGoals from '../../components/team-goals/TeamGoals';
import TeamMatches from '../../components/team-matches/TeamMatches';
import Team from '../../components/team/Team';
import { fetchTeamFromAPI } from '../../redux/team/thunk';
import './team-page.scss';

const TeamPage = () => {
  const { teamID } = useParams();
  const team = useSelector((state) => state.teamReducer.team);

  const isLoading = useSelector((state) => state.teamReducer.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTeamFromAPI(teamID));
  }, [dispatch, teamID]);

  const handleGoBackClick = () => navigate(-1);

  return (
    <div className="team-page container container--small">
      <button
        type="button"
        onClick={handleGoBackClick}
        className="team-page__backwards-btn"
      >
        {'<'}
      </button>
      {isLoading
        ? 'loading...'
        : team && (
        <div className="team-page__stats">
          <Team team={team.team} />
          <TeamForm form={team.form} className="team-page__form" />
          <TeamMatches
            className="team-page__matches"
            total={team.fixtures.played.total}
            wins={team.fixtures.wins.total}
            draws={team.fixtures.draws.total}
            loses={team.fixtures.loses.total}
          />
          <TeamGoals
            scored={team.goals.for.total}
            conceded={team.goals.against.total}
            className="team-page__goals"
          />
          <Standings className="team-page__standings" id={team.team.id} />
        </div>
        )}
    </div>
  );
};

export default TeamPage;
