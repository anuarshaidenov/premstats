import './team.scss';
import Card from '../card/Card';

const Team = ({ team: { name, logo } }) => {
  return (
    <Card className="team" handleClick={() => alert(`${name}`)}>
      <img className="team__logo" src={logo} alt={`${name} logo`} />
      <h4 className="team__name">{name}</h4>
    </Card>
  );
};

export default Team;
