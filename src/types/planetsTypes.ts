export default interface Planets {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface FilterDropdown {
    column: string;
    comparison: string;
    value: number | string;
}

export type Comparison = 'Maior' | 'Menor' | 'Igual';
