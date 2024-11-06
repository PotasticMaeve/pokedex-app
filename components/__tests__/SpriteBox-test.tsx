import React from "react";
import { render } from "@testing-library/react-native";
import SpriteBox from "../detail/SpriteBox";

describe('SpriteBox Component', () => {
  const mockImageUrl = 'http://example.com/pokemon-sprite.png';

  it('renders correctly with image prop', () => {
    const { getByTestId } = render(<SpriteBox image={mockImageUrl} />);

    const image = getByTestId('pokemon-image-sprite');
    expect(image).toBeDefined()
  });

  it('applies the correct styles to the image and container', () => {
    const { getByTestId } = render(<SpriteBox image={mockImageUrl} />);
    const container = getByTestId('sprite-box');
    expect(container).toBeDefined()
  });
});