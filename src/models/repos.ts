// User model based on the structure of github api at
// https://api.github.com/repositories
export interface Repo {
    id: number;
    full_name: string;
    description: string;
    url: string;
    comments_url: number;
    commits_url: number;
    issues_url: number;
}