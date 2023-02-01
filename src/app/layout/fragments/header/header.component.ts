import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, map, mergeMap, startWith, switchMap } from 'rxjs/operators';
import { HttpclientService } from 'src/app/core/services/HttpClientServices';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  componentTitle: any;
  constructor(private http: HttpClient, private dataService: HttpclientService) {

    

  }

  ngOnInit() {



    this.dataService.titleData.subscribe((data)=>{
      // console.log("title data from header component: ",data)
      this.componentTitle = data

    })
     
  }

}
