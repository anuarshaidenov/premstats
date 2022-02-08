import Card from '../card/Card';
import './team-form.scss';

const TeamForm = ({ form, className }) => {
  const formFiltered = form.split('').reverse().slice(0, 5);

  const generateClass = (result) => {
    if (result === 'W') return 'team-form__result--win';
    else if (result === 'D') return 'team-form__result--draw';
    else return 'team-form__result--lose';
  };

  return (
    <Card className={`team-form ${className ? className : ''}`}>
      {formFiltered.map((result) => (
        <span className={`team-form__result ${generateClass(result)}`}>
          {result}
        </span>
      ))}
    </Card>
  );
};

export default TeamForm;
