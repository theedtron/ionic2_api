import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Repo } from '../../models/repos';
import { GithubUsers } from '../../providers/github-users';

/*
  Generated class for the Repos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {

    reposits: Repo[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private githubRepos: GithubUsers) {
        githubRepos.loadRepos().subscribe(reposits =>{
          console.log(reposits);
          this.reposits = reposits;
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReposPage');
  }

}
