import { User } from "../../core/interfaces/user.interface";
import { USER_ROLE } from "../../core/enums/user-role.enum";
import { v4 as uuidv4 } from 'uuid';

export const Users: User[] = [
    { id: uuidv4(), username: 'Vladimir', password: 'V1o2v3a4', lastLogged: new Date(), role: USER_ROLE.User },
    { id: uuidv4(), username: 'Admin', password: 'Password1', lastLogged: new Date(), role: USER_ROLE.Admin },
];