import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStandingsFromAPI } from '../../redux/standings/thunk';
import Card from '../card/Card';
import './standings.scss';

const Standings = ({ className, id }) => {
  // const standings = useSelector((state) => state.standingsReducer.standings);
  const standings = [
    {
      rank: 1,
      team: {
        id: 50,
        name: 'Manchester City',
        logo: 'https://media.api-sports.io/football/teams/50.png',
      },
      points: 57,
      goalsDiff: 41,
      group: 'Premier League',
      form: 'DWWWW',
      status: 'same',
      description: 'Promotion - Champions League (Group Stage)',
      all: {
        played: 23,
        win: 18,
        draw: 3,
        lose: 2,
        goals: {
          for: 55,
          against: 14,
        },
      },
      home: {
        played: 11,
        win: 9,
        draw: 1,
        lose: 1,
        goals: {
          for: 32,
          against: 6,
        },
      },
      away: {
        played: 12,
        win: 9,
        draw: 2,
        lose: 1,
        goals: {
          for: 23,
          against: 8,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 2,
      team: {
        id: 40,
        name: 'Liverpool',
        logo: 'https://media.api-sports.io/football/teams/40.png',
      },
      points: 48,
      goalsDiff: 39,
      group: 'Premier League',
      form: 'WWDLD',
      status: 'same',
      description: 'Promotion - Champions League (Group Stage)',
      all: {
        played: 22,
        win: 14,
        draw: 6,
        lose: 2,
        goals: {
          for: 58,
          against: 19,
        },
      },
      home: {
        played: 10,
        win: 7,
        draw: 3,
        lose: 0,
        goals: {
          for: 25,
          against: 6,
        },
      },
      away: {
        played: 12,
        win: 7,
        draw: 3,
        lose: 2,
        goals: {
          for: 33,
          against: 13,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 3,
      team: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
      },
      points: 47,
      goalsDiff: 30,
      group: 'Premier League',
      form: 'WDLDD',
      status: 'same',
      description: 'Promotion - Champions League (Group Stage)',
      all: {
        played: 24,
        win: 13,
        draw: 8,
        lose: 3,
        goals: {
          for: 48,
          against: 18,
        },
      },
      home: {
        played: 12,
        win: 6,
        draw: 5,
        lose: 1,
        goals: {
          for: 27,
          against: 10,
        },
      },
      away: {
        played: 12,
        win: 7,
        draw: 3,
        lose: 2,
        goals: {
          for: 21,
          against: 8,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 4,
      team: {
        id: 33,
        name: 'Manchester United',
        logo: 'https://media.api-sports.io/football/teams/33.png',
      },
      points: 38,
      goalsDiff: 6,
      group: 'Premier League',
      form: 'WWDLW',
      status: 'same',
      description: 'Promotion - Champions League (Group Stage)',
      all: {
        played: 22,
        win: 11,
        draw: 5,
        lose: 6,
        goals: {
          for: 36,
          against: 30,
        },
      },
      home: {
        played: 11,
        win: 6,
        draw: 1,
        lose: 4,
        goals: {
          for: 18,
          against: 15,
        },
      },
      away: {
        played: 11,
        win: 5,
        draw: 4,
        lose: 2,
        goals: {
          for: 18,
          against: 15,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 5,
      team: {
        id: 48,
        name: 'West Ham',
        logo: 'https://media.api-sports.io/football/teams/48.png',
      },
      points: 37,
      goalsDiff: 10,
      group: 'Premier League',
      form: 'LLWWW',
      status: 'same',
      description: 'Promotion - Europa League (Group Stage)',
      all: {
        played: 23,
        win: 11,
        draw: 4,
        lose: 8,
        goals: {
          for: 41,
          against: 31,
        },
      },
      home: {
        played: 11,
        win: 5,
        draw: 2,
        lose: 4,
        goals: {
          for: 22,
          against: 18,
        },
      },
      away: {
        played: 12,
        win: 6,
        draw: 2,
        lose: 4,
        goals: {
          for: 19,
          against: 13,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 6,
      team: {
        id: 42,
        name: 'Arsenal',
        logo: 'https://media.api-sports.io/football/teams/42.png',
      },
      points: 36,
      goalsDiff: 8,
      group: 'Premier League',
      form: 'DLWWW',
      status: 'same',
      description: 'Promotion - Europa Conference League (Qualification)',
      all: {
        played: 21,
        win: 11,
        draw: 3,
        lose: 7,
        goals: {
          for: 33,
          against: 25,
        },
      },
      home: {
        played: 11,
        win: 7,
        draw: 2,
        lose: 2,
        goals: {
          for: 18,
          against: 8,
        },
      },
      away: {
        played: 10,
        win: 4,
        draw: 1,
        lose: 5,
        goals: {
          for: 15,
          against: 17,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 7,
      team: {
        id: 47,
        name: 'Tottenham',
        logo: 'https://media.api-sports.io/football/teams/47.png',
      },
      points: 36,
      goalsDiff: 2,
      group: 'Premier League',
      form: 'LWWDW',
      status: 'same',
      description: null,
      all: {
        played: 20,
        win: 11,
        draw: 3,
        lose: 6,
        goals: {
          for: 26,
          against: 24,
        },
      },
      home: {
        played: 10,
        win: 7,
        draw: 1,
        lose: 2,
        goals: {
          for: 16,
          against: 10,
        },
      },
      away: {
        played: 10,
        win: 4,
        draw: 2,
        lose: 4,
        goals: {
          for: 10,
          against: 14,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 8,
      team: {
        id: 39,
        name: 'Wolves',
        logo: 'https://media.api-sports.io/football/teams/39.png',
      },
      points: 34,
      goalsDiff: 3,
      group: 'Premier League',
      form: 'WWWDW',
      status: 'same',
      description: null,
      all: {
        played: 21,
        win: 10,
        draw: 4,
        lose: 7,
        goals: {
          for: 19,
          against: 16,
        },
      },
      home: {
        played: 10,
        win: 4,
        draw: 2,
        lose: 4,
        goals: {
          for: 8,
          against: 8,
        },
      },
      away: {
        played: 11,
        win: 6,
        draw: 2,
        lose: 3,
        goals: {
          for: 11,
          against: 8,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 9,
      team: {
        id: 51,
        name: 'Brighton',
        logo: 'https://media.api-sports.io/football/teams/51.png',
      },
      points: 30,
      goalsDiff: 0,
      group: 'Premier League',
      form: 'DDDWD',
      status: 'same',
      description: null,
      all: {
        played: 22,
        win: 6,
        draw: 12,
        lose: 4,
        goals: {
          for: 23,
          against: 23,
        },
      },
      home: {
        played: 11,
        win: 3,
        draw: 5,
        lose: 3,
        goals: {
          for: 10,
          against: 11,
        },
      },
      away: {
        played: 11,
        win: 3,
        draw: 7,
        lose: 1,
        goals: {
          for: 13,
          against: 12,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 10,
      team: {
        id: 46,
        name: 'Leicester',
        logo: 'https://media.api-sports.io/football/teams/46.png',
      },
      points: 26,
      goalsDiff: -3,
      group: 'Premier League',
      form: 'DLWLW',
      status: 'same',
      description: null,
      all: {
        played: 20,
        win: 7,
        draw: 5,
        lose: 8,
        goals: {
          for: 34,
          against: 37,
        },
      },
      home: {
        played: 11,
        win: 5,
        draw: 2,
        lose: 4,
        goals: {
          for: 19,
          against: 16,
        },
      },
      away: {
        played: 9,
        win: 2,
        draw: 3,
        lose: 4,
        goals: {
          for: 15,
          against: 21,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 11,
      team: {
        id: 66,
        name: 'Aston Villa',
        logo: 'https://media.api-sports.io/football/teams/66.png',
      },
      points: 26,
      goalsDiff: -4,
      group: 'Premier League',
      form: 'WDLLW',
      status: 'same',
      description: null,
      all: {
        played: 21,
        win: 8,
        draw: 2,
        lose: 11,
        goals: {
          for: 28,
          against: 32,
        },
      },
      home: {
        played: 10,
        win: 4,
        draw: 2,
        lose: 4,
        goals: {
          for: 17,
          against: 16,
        },
      },
      away: {
        played: 11,
        win: 4,
        draw: 0,
        lose: 7,
        goals: {
          for: 11,
          against: 16,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 12,
      team: {
        id: 41,
        name: 'Southampton',
        logo: 'https://media.api-sports.io/football/teams/41.png',
      },
      points: 25,
      goalsDiff: -8,
      group: 'Premier League',
      form: 'DLWDW',
      status: 'same',
      description: null,
      all: {
        played: 22,
        win: 5,
        draw: 10,
        lose: 7,
        goals: {
          for: 26,
          against: 34,
        },
      },
      home: {
        played: 11,
        win: 3,
        draw: 7,
        lose: 1,
        goals: {
          for: 14,
          against: 10,
        },
      },
      away: {
        played: 11,
        win: 2,
        draw: 3,
        lose: 6,
        goals: {
          for: 12,
          against: 24,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 13,
      team: {
        id: 52,
        name: 'Crystal Palace',
        logo: 'https://media.api-sports.io/football/teams/52.png',
      },
      points: 24,
      goalsDiff: -3,
      group: 'Premier League',
      form: 'LDLWL',
      status: 'same',
      description: null,
      all: {
        played: 22,
        win: 5,
        draw: 9,
        lose: 8,
        goals: {
          for: 31,
          against: 34,
        },
      },
      home: {
        played: 12,
        win: 4,
        draw: 5,
        lose: 3,
        goals: {
          for: 21,
          against: 15,
        },
      },
      away: {
        played: 10,
        win: 1,
        draw: 4,
        lose: 5,
        goals: {
          for: 10,
          against: 19,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 14,
      team: {
        id: 55,
        name: 'Brentford',
        logo: 'https://media.api-sports.io/football/teams/55.png',
      },
      points: 23,
      goalsDiff: -12,
      group: 'Premier League',
      form: 'LLLLW',
      status: 'same',
      description: null,
      all: {
        played: 23,
        win: 6,
        draw: 5,
        lose: 12,
        goals: {
          for: 26,
          against: 38,
        },
      },
      home: {
        played: 12,
        win: 4,
        draw: 1,
        lose: 7,
        goals: {
          for: 14,
          against: 17,
        },
      },
      away: {
        played: 11,
        win: 2,
        draw: 4,
        lose: 5,
        goals: {
          for: 12,
          against: 21,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 15,
      team: {
        id: 63,
        name: 'Leeds',
        logo: 'https://media.api-sports.io/football/teams/63.png',
      },
      points: 22,
      goalsDiff: -16,
      group: 'Premier League',
      form: 'LWWLL',
      status: 'same',
      description: null,
      all: {
        played: 21,
        win: 5,
        draw: 7,
        lose: 9,
        goals: {
          for: 24,
          against: 40,
        },
      },
      home: {
        played: 11,
        win: 3,
        draw: 4,
        lose: 4,
        goals: {
          for: 13,
          against: 17,
        },
      },
      away: {
        played: 10,
        win: 2,
        draw: 3,
        lose: 5,
        goals: {
          for: 11,
          against: 23,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 16,
      team: {
        id: 45,
        name: 'Everton',
        logo: 'https://media.api-sports.io/football/teams/45.png',
      },
      points: 19,
      goalsDiff: -11,
      group: 'Premier League',
      form: 'LLLDL',
      status: 'same',
      description: null,
      all: {
        played: 20,
        win: 5,
        draw: 4,
        lose: 11,
        goals: {
          for: 24,
          against: 35,
        },
      },
      home: {
        played: 10,
        win: 4,
        draw: 1,
        lose: 5,
        goals: {
          for: 15,
          against: 17,
        },
      },
      away: {
        played: 10,
        win: 1,
        draw: 3,
        lose: 6,
        goals: {
          for: 9,
          against: 18,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 17,
      team: {
        id: 71,
        name: 'Norwich',
        logo: 'https://media.api-sports.io/football/teams/71.png',
      },
      points: 16,
      goalsDiff: -32,
      group: 'Premier League',
      form: 'WWLLL',
      status: 'same',
      description: null,
      all: {
        played: 22,
        win: 4,
        draw: 4,
        lose: 14,
        goals: {
          for: 13,
          against: 45,
        },
      },
      home: {
        played: 11,
        win: 2,
        draw: 2,
        lose: 7,
        goals: {
          for: 7,
          against: 20,
        },
      },
      away: {
        played: 11,
        win: 2,
        draw: 2,
        lose: 7,
        goals: {
          for: 6,
          against: 25,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 18,
      team: {
        id: 38,
        name: 'Watford',
        logo: 'https://media.api-sports.io/football/teams/38.png',
      },
      points: 15,
      goalsDiff: -17,
      group: 'Premier League',
      form: 'DLDLL',
      status: 'same',
      description: 'Relegation - Championship',
      all: {
        played: 21,
        win: 4,
        draw: 3,
        lose: 14,
        goals: {
          for: 23,
          against: 40,
        },
      },
      home: {
        played: 11,
        win: 2,
        draw: 1,
        lose: 8,
        goals: {
          for: 11,
          against: 25,
        },
      },
      away: {
        played: 10,
        win: 2,
        draw: 2,
        lose: 6,
        goals: {
          for: 12,
          against: 15,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 19,
      team: {
        id: 34,
        name: 'Newcastle',
        logo: 'https://media.api-sports.io/football/teams/34.png',
      },
      points: 15,
      goalsDiff: -22,
      group: 'Premier League',
      form: 'WDDLL',
      status: 'same',
      description: 'Relegation - Championship',
      all: {
        played: 21,
        win: 2,
        draw: 9,
        lose: 10,
        goals: {
          for: 21,
          against: 43,
        },
      },
      home: {
        played: 11,
        win: 1,
        draw: 6,
        lose: 4,
        goals: {
          for: 14,
          against: 23,
        },
      },
      away: {
        played: 10,
        win: 1,
        draw: 3,
        lose: 6,
        goals: {
          for: 7,
          against: 20,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
    {
      rank: 20,
      team: {
        id: 44,
        name: 'Burnley',
        logo: 'https://media.api-sports.io/football/teams/44.png',
      },
      points: 13,
      goalsDiff: -11,
      group: 'Premier League',
      form: 'DDLLD',
      status: 'same',
      description: 'Relegation - Championship',
      all: {
        played: 19,
        win: 1,
        draw: 10,
        lose: 8,
        goals: {
          for: 16,
          against: 27,
        },
      },
      home: {
        played: 8,
        win: 1,
        draw: 5,
        lose: 2,
        goals: {
          for: 8,
          against: 8,
        },
      },
      away: {
        played: 11,
        win: 0,
        draw: 5,
        lose: 6,
        goals: {
          for: 8,
          against: 19,
        },
      },
      update: '2022-02-05T00:00:00+00:00',
    },
  ];

  const isLoading = useSelector((state) => state.standingsReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStandingsFromAPI());
  }, [dispatch]);

  return (
    <Card className={`standings ${className ? className : ''}`}>
      <ul className="standings__teams">
        {isLoading && 'Loading...'}
        {standings.map((team, i) => (
          <li
            className={`standings__team ${
              i % 2 !== 0 ? 'standings__team--odd' : ''
            } ${team.team.id === id ? 'standings__team--highlighted' : ''}`}
          >
            {`${team.rank} ${team.team.name}`}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Standings;
