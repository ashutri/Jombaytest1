import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from "./service/accesstoken.service";
import { HttpClientModule } from "@angular/common/http";
import { CaseStudyService } from "./service/caseStudy.service";
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
  ],
  providers: [AuthService,
    CaseStudyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
