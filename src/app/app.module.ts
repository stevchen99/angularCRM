import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TbdComponent } from './tbd/tbd.component';
import { ClientComponent } from './client/client.component';
import { JobComponent } from './job/job.component';
import { JobServService } from './job/job-serv.service';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { HistoComponent } from './histo/histo.component';

import { NgChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';

const firebaseConfig = {
  apiKey: "AIzaSyDIjSWS8wF2vcRu45G8M1WiA0TK8l4PHaA",
  authDomain: "admincrm-ff6cc.firebaseapp.com",
  projectId: "admincrm-ff6cc",
  storageBucket: "admincrm-ff6cc.appspot.com",
  messagingSenderId: "154551621156",
  appId: "1:154551621156:web:0247e16a3533722edeaab1",
  measurementId: "G-GS8N5HRFZ0"
};

@NgModule({
  declarations: [
    AppComponent,
    TbdComponent,
    ClientComponent,
    JobComponent,
    HistoComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ClarityModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgChartsModule
  

  ],
  providers: [JobServService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { } 
