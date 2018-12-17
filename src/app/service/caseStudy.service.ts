import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
@Injectable()
export class CaseStudyService {
   
      token = localStorage.getItem('token');
    

      getTokenHeader()  {
        let header: HttpHeaders = new HttpHeaders({
          'Conten-Type':'application/json',
          'Authorization':'Bearer ' + this.token
        });
    
        return {headers:header}; 
      }
    
  constructor(private http: HttpClient
  ) {
  }
  
  
  getCaseStudy() {
      console.log('localStorage.getItem() in case study',this.getTokenHeader());
    return this.http.get('https://simulationapi.ur-nl.com/case_study/companies/58cba141ba169e0eab2657c9/company_case_studies/595c859eba169ec47e4f20d4/user_company_case_studies/595ce021ba169edb9c733e90?include[company_case_study][include]=questions', this.getTokenHeader());
  }

}