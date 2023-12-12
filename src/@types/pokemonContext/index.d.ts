/* eslint-disable no-unused-vars */
export type PokemonContextType = {
  handleOnSubmit: () => void;
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  abilities: string[];
  loading: boolean;
  search: string;
  emptySearch: boolean;
};
