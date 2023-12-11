import { userType } from '../../@types/user'

export interface userServiceInterface {
    list(): Promise<userType[]>
}