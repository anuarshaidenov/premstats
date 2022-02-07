import './hero-section.scss';
import playersImg from '../../images/players.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <h1 className="hero-section__title">Premiere League Teams</h1>
        <img
          className="hero-section__image"
          src={playersImg}
          alt="Football Players"
        />
      </div>
    </div>
  );
};

export default HeroSection;
