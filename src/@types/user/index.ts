/* eslint-disable no-unused-vars */
export type userType = {
    name: string,
    city: string,
    country: string,
    favoriteSport: string,
    id: string,
}

export type listUserContextType = {
    users: userType[];
    list: () => void;
    loading: boolean;
    handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
