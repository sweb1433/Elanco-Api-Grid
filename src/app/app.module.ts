import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FragmentsModule } from './layout/fragments/fragments.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DataTablesModule } from 'angular-datatables';
import { AgGridModule } from 'ag-grid-angular';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FragmentsModule,
    RouterModule,
    BrowserAnimationsModule    ,
    DataTablesModule,
    AgGridModule,
    MatCardModule,
    MatProgressSpinnerModule,FormsModule,MatInputModule,MatIconModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
