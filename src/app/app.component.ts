import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo';
  url: string = 'https://3a47-115-186-169-19.ngrok.io/api/page-sections';

  headers = new HttpHeaders()
    .set('Authorization', 'Bearer yourAccessToken') // Replace with your actual Authorization header
    .set('Content-Type', 'application/json'); // You can add more headers as needed

  options = { headers: this.headers };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.url, this.options).subscribe((res) => {
      console.log(res);
    });
  }
}
