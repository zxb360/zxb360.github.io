import styled from 'styled-components';
import { useEffect, useState } from 'react';
import getPlanets from '../services/api'
import Planets, { Comparison } from '../types/planetsTypes';
import { FilterDropdown } from '../types/planetsTypes';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  color: #ffffff;
  gap: 2rem;
  padding-bottom: 1rem;
`
const InputSearch = styled.input`
  border-radius: 0.5rem;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 1.5rem;
  margin: 0.5rem;
`
const Button = styled.button`
  borde-radius: 3.5rem;
  padding: 1rem 3rem 1rem 3rem;
  font-size: 14pt;
`
const Table = styled.table`
  transform: scale(0.63); /* Diminui 25% */
  transform-origin: left top; /* Mantém centralizado */
  text-align: center;
  text-bold: 900;
  border-collapse: collapse;
  border: 1px solid #ffffff;
`
const Tr = styled.tr`
  border: 1px solid #ffffff;
  `
const Td = styled.td`
  border: 1px solid #ffffff;
  padding: 8px 10px;
  text-align: center;
  ` 

export default function ProjectStarWars() {
  const [planets, setPlanents] = useState<Planets[]>([])
  const [search, setSearch] = useState<Planets[]>([]);
  const [filterButton, setFilterButton] = useState<Planets[]>([]);
  const [filterDropdown, setFilterDropdown] = useState<FilterDropdown>({
    column: 'population',
    comparison: 'Maior',
    value: 0
  });
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
   getPlanets().then(data => {
    setPlanents(data)
    setSearch(data)
    setFilterButton(data)
    setLoading(false)
   })
  }, [])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // evento para encontrar na lista o valor especifico
    const search = event.target.value;
    const filteredPlanets = planets.filter((planet) => planet.name.toLowerCase().includes(search.toLowerCase()));
    setSearch(filteredPlanets);
    setFilterButton(filteredPlanets);
  }

  const handleButtonFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // evento para filtrar os planetas
    const { column, comparison, value } = filterDropdown;

    const operation: Record<Comparison, (a: number, b: number) => boolean> = {
      Maior: (a, b) => a > b,
      Menor: (a, b) => a < b,
      Igual: (a, b) => a === b,
    }

    const op = operation[comparison as Comparison];

    const filteredPlanets = search.filter((planet) => {
      const planetValue = Number(planet[column as keyof Planets]);
      const filterValue = Number(value);

      if (op) {
        return op(planetValue, filterValue);
      }
      return true
    })
    
    setFilterButton(filteredPlanets);
    }


  return (
    <>
      {loading ? (<div>Carregando...</div>) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
          <InputSearch // filtrando pelo nome
            data-testid='name-filter'
            style={{ color: 'black' }}
            type="text"
            placeholder="Search"
            name="search" 
            id="search"
            onChange={handleSearch}
            />
          </div>
          <Section>
            <div>
              <label htmlFor="dropdown">
                  Coluna
                  <select 
                    name="dropdown" 
                    id="dropdown"
                    data-testid="column-filter"
                    onChange={ (e) => setFilterDropdown({...filterDropdown, column: e.target.value}) }
                  >
                    <option value="population">population</option>
                    <option value="orbital_period">orbital_period</option>
                    <option value="diameter">diameter</option>
                    <option value="rotation_period">rotation_period</option>
                    <option value="surface_water">surface_water</option>
                  </select>
                </label>
            </div>
            <div>
              <label htmlFor="order">
                Operador
                <select 
                  name="order" 
                  id="order"
                  data-testid="comparison-filter"
                  onChange={ (e) => setFilterDropdown({...filterDropdown, comparison: e.target.value}) }
                >
                  <option value="Maior">Maior que</option>
                  <option value="Menor">Menor que</option>
                  <option value="Igual">Igual</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="number_population">
                Population
              <input 
                type="number" 
                name="number_population" 
                id="number_population"
                data-testid="value-filter"
                onChange={ (e) => setFilterDropdown({...filterDropdown, value: e.target.value}) }
              />
              </label>
            </div>
            <div>
              <Button onClick={handleButtonFilter} type="button">
                Filter
              </Button>
            </div>
          </Section>
        <Table>
          <thead>
            <Tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>Url</th>
            </Tr>
          </thead>
          <tbody>
          {filterButton.map((planet, index) => (
            <Tr key={index}>
              <Td>{planet.name}</Td>
              <Td>{planet.rotation_period}</Td>
              <Td>{planet.orbital_period}</Td>
              <Td>{planet.diameter}</Td>
              <Td>{planet.climate}</Td>
              <Td>{planet.gravity}</Td>
              <Td>{planet.terrain}</Td>
              <Td>{planet.surface_water}</Td>
              <Td>{planet.population}</Td>
              <Td>{planet.films}</Td>
              <Td>{planet.created}</Td>
              <Td>{planet.edited}</Td>
              <Td>{planet.url}</Td>
            </Tr>
        ))}
          </tbody>
        </Table>
        <h1>CONTINUAÇÂO</h1>
    </div>
  )}
  </>
  )
}