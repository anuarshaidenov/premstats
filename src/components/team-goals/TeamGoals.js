import './team-goals.scss';
import Card from '../card/Card';

const TeamGoals = ({
  className,
  scored: { home: homeScored, away: awayScored, total: totalScored },
  conceded: { home: homeConceded, away: awayConceded, total: totalConceded },
}) => {
  return (
    <Card className={`team-goals ${className ? className : ''}`}>
      <h3 className="team-goals__title">Goals Stats</h3>
      <div className="team-goals__section">
        <h4 className="team-goals__subtitle team-goals__subtitle--scored ">
          Goals Scored
        </h4>
        <h4 className="team-goals__total">Total: {totalScored}</h4>
        <h4 className="team-goals__total">Home: {homeScored}</h4>
        <h4 className="team-goals__total">Away: {awayScored}</h4>
      </div>
      <div className="team-goals__section">
        <h4 className="team-goals__subtitle team-goals__subtitle--conceded">
          Goals Conceded
        </h4>
        <h4 className="team-goals__total">Total: {totalConceded}</h4>
        <h4 className="team-goals__total">Home: {homeConceded}</h4>
        <h4 className="team-goals__total">Away: {awayConceded}</h4>
      </div>
    </Card>
  );
};

export default TeamGoals;
