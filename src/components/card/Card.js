import './card.scss';

const Card = ({ className, children, handleClick }) => {
  return (
    <div onClick={handleClick} className={`card ${className || ''}`}>
      {children}
    </div>
  );
};

export default Card;
