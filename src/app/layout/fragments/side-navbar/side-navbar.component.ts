import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs';
import { HttpclientService } from 'src/app/core/services/HttpClientServices';
 
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  resourceMenu: any;
  applicationMenu: any;
  constructor(private httpService: HttpclientService) { }

  ngOnInit() {
    this.httpService.getApplications('applications').subscribe((data: any)=>{
      this.applicationMenu = data;
      // console.log(data)
    })
    this.httpService.getApplications('resources').subscribe((data: any)=>{
      this.resourceMenu = data;
      // console.log(data)
    })
  }

  getData(name: any,param:string){
    console.log(name)
    let title = {
      type: param,
      name: name
    }
    this.httpService.getDetails(name,param).subscribe((data: any)=>{

      this.httpService.passDetailDataToHome(data)
      this.httpService.passTitleDataToHeader(title)
    })
  }

} 
