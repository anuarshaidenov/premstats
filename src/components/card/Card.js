/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import './card.scss';

const Card = ({ className = '', children, handleClick = null }) => (
  <div onClick={handleClick} className={`card ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  handleClick: PropTypes.func,
};

Card.defaultProps = {
  className: '',
  handleClick: null,
};

export default Card;
