import Header from './components/header/Header';
import './styles/App.scss';

import { Routes, Route } from 'react-router-dom';
import Teams from './pages/teams/Teams';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Teams />} />
          <Route path=":teamID" element={<h1>team</h1>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
