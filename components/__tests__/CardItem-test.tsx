import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import { PokemonDetails } from '@/types';
import CardItem from '../CardItem';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('CardItem Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });
  });

  const mockPokemonData: PokemonDetails = {
    id: 1,
    name: 'bulbasaur',
    abilities: [],
    sprites: {
      front_default: 'http://example.com/front_default.png',
      front_default_female: null,
      back_default: null,
      back_female: null,
      front_shiny: null,
      front_shiny_female: null,
      back_shiny: null,
      back_shiny_female: null,
    },
  };

  it('renders correctly with data', () => {
    const { getByText } = render(<CardItem data={mockPokemonData} />);
    expect(getByText('bulbasaur')).toBeTruthy();
  });

  it('navigates to the detail screen when the card is pressed', () => {
    const { getByTestId } = render(<CardItem data={mockPokemonData} />);
    const card = getByTestId('card-item');

    fireEvent.press(card);
    expect(mockNavigate).toHaveBeenCalledWith('detail', { id: mockPokemonData.id });
  });
});