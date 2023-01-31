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
   
  //   this.router.events.subscribe(data => {
  //     if (data instanceof ActivationStart) {
  //       this.componentTitle = data.snapshot.data['title'];
  //     }

  //   });
  //   this.router.events
  //  .pipe(
  //     filter((event) => event instanceof NavigationEnd),
  //     startWith(this.router)
  //  )
    

  }

  ngOnInit() {



    this.dataService.titleData.subscribe((data)=>{
      console.log("title data from header component: ",data)
      this.componentTitle = data
      // this.data = data;
      // this.highestCost = data.sort((a: any,b: any) =>{a.cost-b.cost})[0]
      // this.highestConsumedQuantity = data.sort((a: any,b: any) =>{a.ConsumedQuantity-b.ConsumedQuantity})[0]
      // console.log(sortedData)
      // this.maxCost = this.sortedData[0].Cost

    })

    // this.router.events.subscribe(data => {
    //   if (data instanceof ActivationStart) {
    //      console.log(data)
    //     this.componentTitle = data.snapshot.data['title'];
    //   }

    // });
     
  }

}
