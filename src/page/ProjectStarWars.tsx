import styled from 'styled-components';
import { useEffect, useState } from 'react';
import getPlanets from '../services/api'
import Planets from '../types/planetsTypes';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  color: #ffffff;
  gap: 2rem;
  padding: 2rem;
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
  margin: 0 auto;
  padding: 0;
  text-align: center;
  text-bold: 900;
  border-collapse: collapse;
  border: 1px solid #ffffff;
`
const Tr = styled.tr`
  border: 1px solid #ffffff;
  padding: 0.5rem;
  `

export default function ProjectStarWars() {
  const [planets, setPlanents] = useState<Planets[]>([])
  const [search, setSearch] = useState<Planets[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   getPlanets().then(data => {
    setPlanents(data)
    setSearch(data)
    setLoading(false)
   })
  }, [])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // evento para encontrar na lista o valor especifico
    const search = event.target.value;
    const filteredPlanets = planets.filter((planet) => planet.name.toLowerCase().includes(search.toLowerCase()));
    setSearch(filteredPlanets);
  }

  return (
    <>
      {loading ? (<div>Carregando...</div>) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
          <InputSearch
            data-testid='name-filter'
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
                  <select name="dropdown" id="dropdown">
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
                <select name="order" id="order">
                  <option value="Maior">Maior que</option>
                  <option value="Menor">Menor que</option>
                  <option value="igual">Igual</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="population">
                Population
              <input 
                type="number" 
                name="population" 
                id="population" 
                />
              </label>
            </div>
            <div>
              <Button onClick={() => console.log("apertei")}>
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
          {search.map((planet, index) => (
            <tr key={index}>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
        ))}
          </tbody>
        </Table>
    </div>
  )}
  </>
  )
}
