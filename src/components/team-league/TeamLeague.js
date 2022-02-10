import PropTypes from 'prop-types';
import Card from '../card/Card';
import './team-league.scss';

const TeamLeague = ({ className = '', league: { name, logo, flag } }) => (
  <Card className={`team-league ${className}`}>
    <h3 className="team-league__title">{name}</h3>
    <img className="team-league__logo" alt={`${name} logo`} src={`${logo}`} />
    <img
      className="team-league__flag"
      alt={`${name} country`}
      src={`${flag}`}
    />
  </Card>
);

TeamLeague.propTypes = {
  className: PropTypes.string,
  league: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  }).isRequired,
};

TeamLeague.defaultProps = {
  className: '',
};

export default TeamLeague;
