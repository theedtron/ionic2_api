// User model based on the structure of github api at
// https://api.github.com/organizations
export interface Orgs {
    login: string;
    avatar_url: string;
    repos_url: string;
    description: string;
    id: number;
    members_url: number;
    issues_url: number;
}