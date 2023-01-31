import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {   ColDef,
  ColGroupDef,
  GridReadyEvent,
  SideBarDef, } from 'ag-grid-community';
import { HttpclientService } from 'src/app/core/services/HttpClientServices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data : any;
  noRowsTemplate : string;
  loadingTemplate : string;
  // maxCost : any;
  highestCost: any;
  highestConsumedQuantity: any;
  searchValue: any;
  gridApi: any;
   
  constructor(private http: HttpClient, private dataService: HttpclientService) { 
    this.loadingTemplate ="Data is Loading";
  this.noRowsTemplate ="<h2>Please select options from side nav bar</h2>";
  }

  public defaultColDef = {
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    width: 100,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
  };

  columnDefs = [

    {headerName: 'Core',children: [
        // {headerName: 'ConsumedQuantity',minWidth: 200, field: 'ConsumedQuantity',pinned: 'left'},
        // {headerName: 'Cost', minWidth: 200 ,field: 'Cost',pinned: 'left'},
        // {headerName: 'Date', minWidth: 200 ,field: 'Date',pinned: 'left'},
        {headerName: 'ConsumedQuantity',minWidth: 100, field: 'ConsumedQuantity'},
        {headerName: 'Cost', maxWidth: 125,minWidth: 70 ,field: 'Cost'},
        {headerName: 'Date', maxWidth: 115,minWidth: 70 ,field: 'Date'},
    ]},
    
    {headerName: 'Extra',children: [
      // {headerName: 'InstanceId', field: 'InstanceId', },
      {headerName: 'Location', field: 'Location',maxWidth: 130,minWidth: 70},
      {headerName: 'MeterCategory', field: 'MeterCategory'},

      {headerName: 'ResourceGroup', field: 'ResourceGroup'},
      {headerName: 'ResourceLocation', field: 'ResourceLocation'},
      {headerName: 'ServiceName', field: 'ServiceName'},
      {headerName: 'UnitOfMeasure', field: 'UnitOfMeasure'}
    ]}

    
];


  ngOnInit(): void {
    this.data = []
    this.dataService.dataEmitter.subscribe((data)=>{
      this.data = data;
      this.maxCostFun(data)
      this.maxConsumptionFun(data)
      // this.highestCost = data.sort((a: any,b: any) =>{a.cost-b.cost})[0]
      // this.highestConsumedQuantity = data.sort((a: any,b: any) =>{a.ConsumedQuantity-b.ConsumedQuantity})[0]

    })
  }

  maxCostFun(data: any){

   let sortedArr = data.sort((a: any, b:any)=>{
      a.cost - b.cost
    })

    this.highestCost = sortedArr[0]

  }

  maxConsumptionFun(data: any){

    let sortedArr = data.sort((a: any, b:any)=>{
       a.ConsumedQuantity - b.ConsumedQuantity
     })
 
     this.highestConsumedQuantity = sortedArr[0]
     console.log("highest consumption: ",this.highestConsumedQuantity)
 
   }

  onGridReady(params:any){
    this.gridApi = params.api;
  }

  quickSearch(){
    this.gridApi.setQuickFilter(this.searchValue)
  }

}
