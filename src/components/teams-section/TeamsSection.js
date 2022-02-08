import './teams-section.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeamsFromAPI } from '../../redux/teams/thunk';
import Team from '../team/Team';

const TeamsSection = () => {
  const [searchField, setSearchField] = useState('');
  const teams = useSelector((state) => state.teamsReducer.teams);
  const isLoading = useSelector((state) => state.teamsReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(
    () => !teams.length && dispatch(fetchTeamsFromAPI(2021)),
    [dispatch, teams.length]
  );

  const handleSearchFieldChange = (e) => setSearchField(e.target.value);

  const filteredTeams = teams.filter((team) =>
    team.team.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <section className="teams-section container container--small">
      <form className="teams-section__form">
        <input
          type="text"
          placeholder="Team name"
          className="teams-section__input-search"
          value={searchField}
          onChange={handleSearchFieldChange}
        />
      </form>
      <ul className="teams-section__teams">
        {isLoading && `loading...`}
        {filteredTeams.length
          ? filteredTeams.map((team) => (
              <Team key={team.team.id} isLink team={team.team} />
            ))
          : null}
      </ul>
    </section>
  );
};

export default TeamsSection;
