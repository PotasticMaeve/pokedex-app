import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PokemonApiResponse, PokemonDetails } from '../types';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

const fetchPokemons = async (): Promise<PokemonApiResponse> => {
    const response = await axios.get<PokemonApiResponse>(
        `${baseUrl}?limit=10&offset=0`
    );
    return response.data;
};

export const fetchPokemonDetails = async (id: number): Promise<PokemonDetails> => {
    const response = await axios.get<PokemonDetails>(`${baseUrl}/${id}`);
    return response.data;
};

export const usePokemonQuery = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['pokemons'],
        queryFn: fetchPokemons,
    });

    const pokemonDetailsQueries = useQueries({
        queries: data?.results.map((pokemon) => ({
            queryKey: ['pokemon', pokemon.name],
            queryFn: () => fetchPokemonDetails(getPokemonIdFromUrl(pokemon.url)),
            enabled: !!data,
        })) || [],
    });

    return {
        pokemons: data?.results,
        isLoading,
        isError,
        error,
        pokemonDetailsQueries,
    };
};

const getPokemonIdFromUrl = (url: string): number => {
    const regex = /pokemon\/(\d+)/;
    const match = url.match(regex);
    return match ? parseInt(match[1], 10) : 0;
};