/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { fetchStandingsFromAPI } from '../../redux/standings/thunk';
import Card from '../card/Card';
import './standings.scss';

const Standings = ({ className = '', id = null }) => {
  const standings = useSelector((state) => state.standingsReducer.standings);

  const isLoading = useSelector((state) => state.standingsReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    !standings.length && dispatch(fetchStandingsFromAPI());
  }, [dispatch, standings.length]);

  return (
    <Card className={`standings ${className}`}>
      <ul className="standings__teams">
        {isLoading
          ? 'Loading...'
          : standings
            && standings.map((team) => (
              <li key={uuidv4()} className="standings__team">
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
                  {team.points}
                  {' '}
                  Pts
                </span>

                <span className="standings__team-played">
                  {team.all.played}
                  {' '}
                  MP
                </span>
                <span className="standings__team-wins">
                  {team.all.win}
                  {' '}
                  W
                </span>
                <span className="standings__team-loses">
                  {team.all.lose}
                  {' '}
                  L
                </span>
              </li>
            ))}
      </ul>
    </Card>
  );
};

Standings.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
};

Standings.defaultProps = {
  className: '',
  id: null,
};

export default Standings;
