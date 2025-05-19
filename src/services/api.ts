import Planets from '../types/planetsTypes';

const getPlanets = async (): Promise<Planets[]> => {
    const response = await fetch("https://swapi.info/api/planets");
    const data = await response.json();
    return data;
}

export default getPlanets;