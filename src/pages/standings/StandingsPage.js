import './standings-page.scss';
import Standings from '../../components/standings/Standings';

const StandingsPage = () => (
  <section className="standings-page container container--small">
    <h2 className="standings-page__title">Standings</h2>
    <Standings />
  </section>
);

export default StandingsPage;
