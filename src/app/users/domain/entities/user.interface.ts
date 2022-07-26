import { UserRole } from './user_role.enum';
import { UserState } from './user_state.enum';
import { UserGender } from './user_gender.enum';

export interface UserInterface {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender: UserGender;
    birthdate: Date | null;
    picture: string;
    role: UserRole;
    state: UserState;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export type UserModelInterface = Omit<UserInterface, 'id' | 'createdAt' | 'updatedAt'>;
