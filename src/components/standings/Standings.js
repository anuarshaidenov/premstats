import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStandingsFromAPI } from '../../redux/standings/thunk';
import Card from '../card/Card';
import './standings.scss';

const Standings = ({ className, id }) => {
  const standings = useSelector((state) => state.standingsReducer.standings);

  const isLoading = useSelector((state) => state.standingsReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    !standings.length && dispatch(fetchStandingsFromAPI());
  }, [dispatch, standings.length]);

  return (
    <Card className={`standings ${className ? className : ''}`}>
      <ul className="standings__teams">
        {isLoading
          ? 'Loading...'
          : standings &&
            standings.map((team, i) => (
              <li className={'standings__team'}>
                <span className="standings__team-rank">{team.rank}</span>
                <img
                  className="standings__team-logo"
                  alt={`${team.team.name} logo`}
                  src={team.team.logo}
                />
                <span
                  className={`standings__team-name ${
                    id === team.team.id
                      ? 'standings__team-name--highlighted'
                      : ''
                  }`}
                >
                  {team.team.name}
                </span>
                <span className="standings__team-points">
                  {team.points} Pts
                </span>

                <span className="standings__team-played">
                  {team.all.played} MP
                </span>
                <span className="standings__team-wins">{team.all.win} W</span>
                <span className="standings__team-loses">{team.all.lose} L</span>
              </li>
            ))}
      </ul>
    </Card>
  );
};

export default Standings;
