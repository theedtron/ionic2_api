import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../models/users';
import {Observable} from "rxjs";
import { Repo } from '../models/repos';

/*
 Generated class for the GithubUsers provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class GithubUsers {

    githubApiUrl = 'https://api.github.com';

    constructor(public http: Http) {
        // console.log('Hello GithubUsers Provider');
    }

    /*
    Users
     */
    // Load all github users
    load(): Observable<User[]> {
        return this.http.get(`${this.githubApiUrl}/users`)
            .map(res => <User[]>res.json());
    }

    // Get github user by providing login(username)
    loadDetails(login: string): Observable<User[]> {
        return this.http.get(`${this.githubApiUrl}/users/${login}`)
            .map(res => <User[]>res.json());
    }

    // Search for github users
    searchUsers(searchParam: string): Observable<User[]> {
        return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`)
            .map(res => <User[]>(res.json().items))
    }

    /*
    Repos
     */
    // Load all github repositories
    loadRepos(): Observable<Repo[]> {
        return this.http.get(`${this.githubApiUrl}/repositories`)
            .map(res => <Repo[]>res.json());
    }
}
