import Card from '../card/Card';
import './team-league.scss';

const TeamLeague = ({ className, league: { name, logo, flag } }) => {
  return (
    <Card className={`team-league ${className ? className : ''}`}>
      <h3 className="team-league__title">{name}</h3>
      <img className="team-league__logo" alt={`${name} logo`} src={`${logo}`} />
      <img
        className="team-league__flag"
        alt={`${name} country`}
        src={`${flag}`}
      />
    </Card>
  );
};

export default TeamLeague;
