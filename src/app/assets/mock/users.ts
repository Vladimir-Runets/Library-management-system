import { User } from "../../core/interfaces/user.interface";
import { UserRole } from "../../core/enums/user-role.enum";

const users: User[] = [
    { username: 'Vladimir', password: 'V1o2v3a4', lastLogged: new Date(), role: UserRole.User },
    { username: 'Admin', password: 'password', lastLogged: new Date(), role: UserRole.Admin },
];

export default users;