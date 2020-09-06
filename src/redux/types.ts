
export interface IUser {
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
    login: string;
    type: string;
    repos_url: string;
    following_url: string;
    followers_url: string;
    gists_url: string;
    node_id: string;
    site_admin: boolean;
}

export interface IState {
    fecthTimeout: number;
    users: IUser[];
    loginName: string;
    loading: boolean;
    totalUsers: number;
    currentUser?: IUser;
}

export interface IRepo {
    id: number;
    private: boolean;
    name: string;
    html_url: string;
    description: string;
    created_at: string;
}

export interface IFollower {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    type: string;
    node_id: string;
}
