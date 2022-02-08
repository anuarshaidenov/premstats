import Header from './components/header/Header';
import './styles/App.scss';

import { Routes, Route } from 'react-router-dom';
import Teams from './pages/teams/Teams';
import TeamPage from './pages/team/TeamPage';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Teams />} />
          <Route path=":teamID" element={<TeamPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
