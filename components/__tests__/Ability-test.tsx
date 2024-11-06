import { render } from "@testing-library/react-native";
import * as React from "react";
import Ability from "../detail/Ability";
import { Abilities } from "@/types";

describe("Ability Component", () => {
  it("renders abilities section title", () => {
    const { getByText } = render(<Ability data={[]} />);
    expect(getByText("Abilities")).toBeTruthy();
  });

  it("renders a list of abilities correctly", () => {
    const abilitiesData: Abilities[] = [
      { ability: { name: "Overgrow" } },
      { ability: { name: "Chlorophyll" } },
    ];
    
    const { getByText } = render(<Ability data={abilitiesData} />);
    abilitiesData.forEach((ability) => {
      expect(getByText(ability.ability.name)).toBeTruthy();
    });
  });

  it('renders no abilities when data is empty', () => {
    const { queryByText } = render(<Ability data={[]} />);
    expect(queryByText('Overgrow')).toBeNull();
    expect(queryByText('Chlorophyll')).toBeNull();
  });


  it('renders abilities in a FlatList', () => {
    const abilitiesData: Abilities[] = [
      { ability: { name: 'Overgrow' } },
      { ability: { name: 'Chlorophyll' } },
    ];
    const { getByTestId } = render(<Ability data={abilitiesData} />);
    const flatList = getByTestId('flat-list-ability');
    expect(flatList).toBeTruthy();
  });
});
