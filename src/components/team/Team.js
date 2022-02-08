import './team.scss';
import Card from '../card/Card';
import { useNavigate } from 'react-router-dom';

const Team = ({ team: { id, name, logo }, isLink }) => {
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

export default Team;
