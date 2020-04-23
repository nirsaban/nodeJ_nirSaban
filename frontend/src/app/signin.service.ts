import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInComponent} from './components/sign-in/sign-in.component';
import { Observable } from 'rxjs';
import { Signin } from './signin';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  PHP_API_SERVER = 'http://127.0.0.1:8000';
  // addNewUser(signIn: SignInComponent): Observable<SignInComponent > {
  //   return this.httpClient.post<SignInComponent>(`${this.PHP_API_SERVER}/api/create.php`, signIn);
  // }

  constructor(private HttpClient:HttpClient) {

  }
  sendInfo(info){
    this.HttpClient.post<SignInComponent>(`${this.PHP_API_SERVER}/api/create.php`, 'test');
  }
}
