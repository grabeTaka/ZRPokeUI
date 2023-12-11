/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type UserContextType = {
  handleOnChange: (e: any) => void;
  handleOnSubmit: () => void;
  file: File | null | undefined;
  disabled: boolean;
  submitingCsv: boolean;
  users: userType[];
  list: () => void;
  loading: boolean;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
