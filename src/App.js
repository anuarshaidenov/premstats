import './styles/App.scss';

import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Teams from './pages/teams/Teams';
import TeamPage from './pages/team/TeamPage';
import StandingsPage from './pages/standings/StandingsPage';

const App = () => (
  <div>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path=":teamID" element={<TeamPage />} />
        <Route path="/standings" element={<StandingsPage />} />
      </Routes>
    </main>
  </div>
);

export default App;
