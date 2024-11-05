type Pokemon = {
    name: string;
    url: string;
}

export type Sprites = {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_default_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

export type Abilities = {
    ability: {
        name: string;
    }
}

export type PokemonApiResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}

export type PokemonDetails = {
    name: string;
    id: number;
    sprites: Sprites;
    abilities: Abilities[];
}