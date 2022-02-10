import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Card from '../card/Card';
import './team-form.scss';

const TeamForm = ({ form, className }) => {
  const formFiltered = form.split('').reverse().slice(0, 5);

  const generateClass = (result) => {
    if (result === 'W') return 'team-form__result--win';
    if (result === 'D') return 'team-form__result--draw';
    return 'team-form__result--lose';
  };

  return (
    <Card className={`team-form ${className || ''}`}>
      {formFiltered.map((result) => (
        <span
          key={uuidv4()}
          className={`team-form__result ${generateClass(result)}`}
        >
          {result}
        </span>
      ))}
    </Card>
  );
};

TeamForm.propTypes = {
  form: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TeamForm.defaultProps = {
  className: '',
};

export default TeamForm;
