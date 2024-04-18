import { User } from "../../core/interfaces/user.interface";

const users: User[] = [
    { username: 'Vladimir', password: 'V1o2v3a4', lastLogged: new Date(), role: 'user' },
    { username: 'Admin', password: 'password', lastLogged: new Date(), role: 'Admin' },
];

export default users;