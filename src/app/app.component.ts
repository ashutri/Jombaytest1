import { Component, OnInit } from '@angular/core';
import { AuthService } from "./service/accesstoken.service";
import { CaseStudyService } from "./service/caseStudy.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questions: any;

  constructor(private authService: AuthService,
              private caseStudyService:CaseStudyService){
    this.authService.getAuth().subscribe(Response =>{
       console.log(Response['access_token'],'Response');
       localStorage.setItem('token',Response['access_token']);

    })
  }

  ngOnInit() {
       this.caseStudyService.getCaseStudy().subscribe(Response =>{
         this.questions = Response['user_company_case_study']['company_case_study']['questions'];
         console.log(Response,'caseStudyService Response', this.questions);
       }
       )
  }


}
