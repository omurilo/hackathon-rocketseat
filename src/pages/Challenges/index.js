import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pill from '~/components/Pill';
import CardGrid from '~/components/CardGrid';
import Page from '~/components/Page';
import Search from '~/components/Search';
import MainMenu from '~/components/MainMenu';
import Card from '~/components/Card';
import StyledMain from '~/components/StyledMain';
import api from '~/services/api';

const PORTUGUESE = '#28a745';
const PHYSICS = '#ffc107';
const OFFLINE = '#dc3545';
const REPAIR = '#ff9f43';
const STOCKED = '#8395a7';
const CARD_WIDTH = '350px';

export default function Challenges({ location }) {
  const [challenges, setChallenges] = useState([]);
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getData() {
      const response = await api.get(location.pathname.split('/')[1]);

      setChallenges(response.data);
    }

    getData();
  }, [location.pathname]);

  function handleFilter(clickedFilter) {
    const newFilters = [...filters];

    newFilters.includes(clickedFilter)
      ? newFilters.splice(newFilters.indexOf(clickedFilter), 1)
      : newFilters.push(clickedFilter);

    setFilters(newFilters);
  }

  function searchFilter(challenge) {
    const isFilterOff = search === '';
    const isNameMatchingFilter =
      challenge.name.toLowerCase().includes(search) ||
      challenge.name.includes(search);

    return isFilterOff || isNameMatchingFilter;
  }

  function statusFilter(challenge) {
    const isFilterOff = filters.length === 0;
    const isChallengeMatchingCategory = filters.includes(challenge.category);

    return isFilterOff || isChallengeMatchingCategory;
  }

  return (
    <Page title="Disciplinas">
      <MainMenu>
        <Search
          placeholder="Pesquisar desafios..."
          searchHandler={event => setSearch(event.target.value)}
        />
        <div>
          <Pill
            color={PORTUGUESE}
            value="Português"
            isActive={filters.includes('Português')}
            onClick={event => handleFilter(event.target.value)}
          >
            {`Português`}
          </Pill>
          <Pill
            color={PHYSICS}
            value="Física"
            isActive={filters.includes('Física')}
            onClick={event => handleFilter(event.target.value)}
          >
            {`Física`}
          </Pill>
          <Pill
            color={OFFLINE}
            value="Matemática"
            isActive={filters.includes('Matemática')}
            onClick={event => handleFilter(event.target.value)}
          >
            {`Matemática`}
          </Pill>
          <Pill
            color={REPAIR}
            value="Inglês"
            isActive={filters.includes('Inglês')}
            onClick={event => handleFilter(event.target.value)}
          >
            {`Inglês`}
          </Pill>
          <Pill
            color={STOCKED}
            value="História"
            isActive={filters.includes('História')}
            onClick={event => handleFilter(event.target.value)}
          >
            {`História`}
          </Pill>
        </div>
      </MainMenu>
      <CardGrid cardWidth={CARD_WIDTH}>
        {challenges
          .filter(searchFilter)
          .filter(statusFilter)
          .map(challenge => (
            <Link to={`/desafio/${challenge.id}`}>
              <Card color="#fff" bgColor={challenge.color} key={challenge.name}>
                <header>
                  <h3>{challenge.name}</h3>
                </header>
                <StyledMain>
                  <p>
                    {/* <FaTasks size={ICON_SIZE} /> */}
                    {challenge.category}
                  </p>
                </StyledMain>
                <footer>
                  {/* {sessionAdmin.permission > 1 && (
                    <button type="button" onClick={() => handleModalOpen(task)}>
                      <FaEdit size={20} />
                    </button>
                  )}
                  {sessionAdmin.permission > 2 && (
                    <button
                      type="button"
                      onClick={() => {
                        window.confirm(
                          'Tem certeza que deseja deletar esta tarefa?'
                        ) && handleTaskDelete(task);
                      }}
                    >
                      <FaTrashAlt size={20} />
                    </button>
                  )} */}
                </footer>
              </Card>
            </Link>
          ))}
      </CardGrid>
    </Page>
  );
}
