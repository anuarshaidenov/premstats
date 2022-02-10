import PropTypes from 'prop-types';
import Card from '../card/Card';
import './team-matches.scss';

const TeamMatches = ({
  className = '', total, wins, draws, loses,
}) => (
  <Card className={`team-matches ${className}`}>
    <div className="team-matches__section">
      <h3 className="team-matches__title">Matches played</h3>
      <h3 className="team-matches__total">{total}</h3>
    </div>
    <div className="team-matches__section">
      <h4 className="team-matches__subtitle team-matches__subtitle--win">
        Wins
      </h4>
      <h4 className="team-matches__outcome">{wins}</h4>
    </div>
    <div className="team-matches__section">
      <h4 className="team-matches__subtitle team-matches__subtitle--draw">
        Draws
      </h4>
      <h4 className="team-matches__outcome">{draws}</h4>
    </div>
    <div className="team-matches__section">
      <h4 className="team-matches__subtitle team-matches__subtitle--loss">
        Loses
      </h4>
      <h4 className="team-matches__outcome">{loses}</h4>
    </div>
  </Card>
);

TeamMatches.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number.isRequired,
  wins: PropTypes.number.isRequired,
  draws: PropTypes.number.isRequired,
  loses: PropTypes.number.isRequired,
};

TeamMatches.defaultProps = {
  className: '',
};

export default TeamMatches;
