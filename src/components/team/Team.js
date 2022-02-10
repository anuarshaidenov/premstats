import './team.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Card from '../card/Card';

const Team = ({ team: { id, name, logo }, isLink = false }) => {
  const navigate = useNavigate();

  return (
    <Card
      className={`team ${isLink ? 'team--link' : ''}`}
      handleClick={() => isLink && navigate(`/${id}`)}
    >
      <img className="team__logo" src={logo} alt={`${name} logo`} />
      <h4 className="team__name">{name}</h4>
    </Card>
  );
};

Team.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
  isLink: PropTypes.bool,
};

Team.defaultProps = {
  isLink: false,
};

export default Team;
