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
  // const team = useSelector((state) => state.teamReducer.team);
  const team = {
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media.api-sports.io/football/leagues/39.png',
      flag: 'https://media.api-sports.io/flags/gb.svg',
      season: 2021,
    },
    team: {
      id: 33,
      name: 'Manchester United',
      logo: 'https://media.api-sports.io/football/teams/33.png',
    },
    form: 'WDWWWLDLLWLLDWWWDWLDWW',
    fixtures: {
      played: {
        home: 11,
        away: 11,
        total: 22,
      },
      wins: {
        home: 6,
        away: 5,
        total: 11,
      },
      draws: {
        home: 1,
        away: 4,
        total: 5,
      },
      loses: {
        home: 4,
        away: 2,
        total: 6,
      },
    },
    goals: {
      for: {
        total: {
          home: 18,
          away: 18,
          total: 36,
        },
        average: {
          home: '1.6',
          away: '1.6',
          total: '1.6',
        },
        minute: {
          '0-15': {
            total: 3,
            percentage: '8.11%',
          },
          '16-30': {
            total: 3,
            percentage: '8.11%',
          },
          '31-45': {
            total: 5,
            percentage: '13.51%',
          },
          '46-60': {
            total: 9,
            percentage: '24.32%',
          },
          '61-75': {
            total: 8,
            percentage: '21.62%',
          },
          '76-90': {
            total: 7,
            percentage: '18.92%',
          },
          '91-105': {
            total: 2,
            percentage: '5.41%',
          },
          '106-120': {
            total: null,
            percentage: null,
          },
        },
      },
      against: {
        total: {
          home: 15,
          away: 15,
          total: 30,
        },
        average: {
          home: '1.4',
          away: '1.4',
          total: '1.4',
        },
        minute: {
          '0-15': {
            total: 4,
            percentage: '13.79%',
          },
          '16-30': {
            total: 3,
            percentage: '10.34%',
          },
          '31-45': {
            total: 5,
            percentage: '17.24%',
          },
          '46-60': {
            total: 5,
            percentage: '17.24%',
          },
          '61-75': {
            total: 2,
            percentage: '6.90%',
          },
          '76-90': {
            total: 7,
            percentage: '24.14%',
          },
          '91-105': {
            total: 3,
            percentage: '10.34%',
          },
          '106-120': {
            total: null,
            percentage: null,
          },
        },
      },
    },
    biggest: {
      streak: {
        wins: 3,
        draws: 1,
        loses: 2,
      },
      wins: {
        home: '5-1',
        away: '0-3',
      },
      loses: {
        home: '0-5',
        away: '4-1',
      },
      goals: {
        for: {
          home: 5,
          away: 3,
        },
        against: {
          home: 5,
          away: 4,
        },
      },
    },
    clean_sheet: {
      home: 2,
      away: 3,
      total: 5,
    },
    failed_to_score: {
      home: 4,
      away: 0,
      total: 4,
    },
    penalty: {
      scored: {
        total: 2,
        percentage: '100.00%',
      },
      missed: {
        total: 0,
        percentage: '0%',
      },
      total: 2,
    },
    lineups: [
      {
        formation: '4-2-3-1',
        played: 13,
      },
      {
        formation: '4-2-2-2',
        played: 5,
      },
      {
        formation: '3-5-2',
        played: 2,
      },
      {
        formation: '4-3-1-2',
        played: 1,
      },
      {
        formation: '4-3-3',
        played: 1,
      },
    ],
    cards: {
      yellow: {
        '0-15': {
          total: null,
          percentage: null,
        },
        '16-30': {
          total: 4,
          percentage: '8.70%',
        },
        '31-45': {
          total: 6,
          percentage: '13.04%',
        },
        '46-60': {
          total: 13,
          percentage: '28.26%',
        },
        '61-75': {
          total: 6,
          percentage: '13.04%',
        },
        '76-90': {
          total: 11,
          percentage: '23.91%',
        },
        '91-105': {
          total: 6,
          percentage: '13.04%',
        },
        '106-120': {
          total: null,
          percentage: null,
        },
      },
      red: {
        '0-15': {
          total: null,
          percentage: null,
        },
        '16-30': {
          total: null,
          percentage: null,
        },
        '31-45': {
          total: null,
          percentage: null,
        },
        '46-60': {
          total: 1,
          percentage: '50.00%',
        },
        '61-75': {
          total: 1,
          percentage: '50.00%',
        },
        '76-90': {
          total: null,
          percentage: null,
        },
        '91-105': {
          total: null,
          percentage: null,
        },
        '106-120': {
          total: null,
          percentage: null,
        },
      },
    },
  };
  const isLoading = useSelector((state) => state.teamReducer.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTeamFromAPI(teamID));
  }, [dispatch, teamID]);

  const handleGoBackClick = () => navigate(-1);

  return (
    <div className="team-page container container--small">
      <button onClick={handleGoBackClick} className="team-page__backwards-btn">
        {'<'}
      </button>
      {isLoading ? (
        'loading...'
      ) : (
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
