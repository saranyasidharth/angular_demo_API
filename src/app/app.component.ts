import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo_api';
  posts:any[]=[];
  constructor(private http: HttpClient){}
  loadPosts(){
    this.http.get('http://localhost:8080/allbooks').subscribe((posts:any)=>
    {
      // alert(JSON.stringify(res))
      this.posts=posts;
    });
  }
}
