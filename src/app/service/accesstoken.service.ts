import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthService {
    header: any;
    private anauthHeader;
  data = {grant_type:"password",scope:"user", client_id:"4874eafd0f7a240625e59b2b123a142a669923d5b0d31ae8743f6780a95187f5", client_secret:"908f6aee4d4cb27782ba55ae0c814bf43419f3220d696206212a29fe3a05cd88", auth_token:"azd4jXWWLagyb9KzgfDJ"};
  constructor(private http: HttpClient
  ) {
    this.anauthHeader = new Headers({
      'Conten-Type': 'application/json',
    })
  }
  getAuth() {
    return this.http.post('https://simulationapi.ur-nl.com/oauth/token.json',this.data, this.anauthHeader);
  }

}