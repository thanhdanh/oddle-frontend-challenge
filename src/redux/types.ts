
export interface IUser {
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
    login: string;
    type: string;
    repos_url: string;
}

export interface IState {
    fecthTimeout: number;
    users: IUser[];
    loginName: string;
    loading: boolean;
    totalUsers: number;
}
