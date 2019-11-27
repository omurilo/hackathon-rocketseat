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

const CARD_WIDTH = '350px';

export default function Challenges({ location }) {
  const [challenges, setChallenges] = useState([]);
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState('');
  const [pills, setPills] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get(location.pathname.split('/')[1]);
      const responsePills = await api.get(
        `filtros-${location.pathname.split('/')[1]}`
      );

      setChallenges(response.data);
      setPills(responsePills.data);
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

  const title = location.pathname.split('/')[1];

  return (
    <Page title={title && title.charAt(0).toUpperCase() + title.slice(1)}>
      <MainMenu>
        <Search
          placeholder="Pesquisar desafios..."
          searchHandler={event => setSearch(event.target.value)}
        />
        <div>
          {pills.map(pill => (
            <Pill
              color={pill.color}
              value={pill.name}
              isActive={filters.includes(pill.name)}
              onClick={event => handleFilter(event.target.value)}
            >
              {pill.name}
            </Pill>
          ))}
        </div>
      </MainMenu>
      <CardGrid cardWidth={CARD_WIDTH}>
        {challenges
          .filter(searchFilter)
          .filter(statusFilter)
          .map(challenge => (
            <Link
              to={`/disciplina/${challenge.id}${
                challenge.id === 1 ? '/1' : ''
              }`}
            >
              <Card color="#fff" bgColor={challenge.color} key={challenge.name}>
                <header>
                  <h3>{challenge.name}</h3>
                </header>
                <StyledMain>
                  <p>{challenge.description}</p>
                </StyledMain>
                <footer />
              </Card>
            </Link>
          ))}
      </CardGrid>
    </Page>
  );
}
