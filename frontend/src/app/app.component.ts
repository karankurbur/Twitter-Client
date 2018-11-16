import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  searchquery = '';
  tweetsdata;
  tweetsdataFiltered;
  userquery;
  filter;
  shouldRefresh;
  refreshHandle;

  showErrorMessage = false;
  constructor(private http: Http) {
    //setInterval(() => console.log("TETS"),5000);

    this.refreshHandle = "";
    this.shouldRefresh = false;
    var headers = new Headers();
    var searchterm = 'query=' + 'technology';
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    this.http.post('http://localhost:3000/search', searchterm, { headers: headers }).subscribe((res) => {
      this.tweetsdata = res.json().data.statuses;
      this.tweetsdataFiltered = this.tweetsdata;
      //console.log(this.tweetsdata);
    });
  }

  searchTweets() {
    this.showErrorMessage = false;
    this.tweetsdataFiltered = [];
    var searchFilter = this.filter;
    this.filter = "";
    for (var i = 0; i < this.tweetsdata.length; i++) {
      if (this.tweetsdata[i].full_text.includes(searchFilter)) {
        this.tweetsdataFiltered.push(this.tweetsdata[i]);
      }
    }
    if (this.tweetsdataFiltered.length == 0) {
      this.tweetsdataFiltered = this.tweetsdata;
      this.showErrorMessage = true;
    }
  }

  getStyle() {
    if (this.showErrorMessage) {
      return "visible";
    }
    return "hidden";
  }

  interval;

  helper(query) {
    console.log(query + " IN HELPER");
    console.log(this.refreshHandle);
    if (this.refreshHandle == query) {
      //keep running interval
    } else if (this.refreshHandle != query) {
      clearInterval(this.interval);

      //start new interval for
      console.log("Started interval");
      this.refreshHandle = query;
      //reloads the data every 30 seconds.
      this.interval = setInterval(() => this.getUserData(this.refreshHandle),30000);
    }
  }

  getUserData(username) {
    var headers = new Headers();
    var searchterm = 'screenname=' + username;
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    this.http.post('http://localhost:3000/user', searchterm, { headers: headers }).subscribe((res) => {
      if (res.json().data[0] == null) {
        this.showErrorMessage = true;
      } else if (res.json().data[0].created_at != null) {
        console.log("Got user data");
        this.shouldRefresh = true;
        //start refreshing page for new data
        this.tweetsdata = res.json().data;
        this.tweetsdataFiltered = this.tweetsdata;
        this.showErrorMessage = false;
        this.helper(username);
      }
      console.log(res.json().data);
    });

  }

  //Search handle
  usercall() {
    var headers = new Headers();
    this.getUserData(this.userquery);
    this.userquery = "";
  }
}
