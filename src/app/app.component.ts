import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobileQuery: MediaQueryList
  title = 'dynamic-nested-sidemwnu';
  constructor() { }

  ngOnInit(): void {
    // alert("hello world")
    // console.log("hello world")
  }
}
