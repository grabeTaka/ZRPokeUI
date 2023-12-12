/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type PokemonContextType = {
  handleOnSubmit: () => void;
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  abilities: string[];
  loading: boolean;
};
