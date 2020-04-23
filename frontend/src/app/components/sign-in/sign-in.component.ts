import { Component, OnInit, Input } from '@angular/core';
import {SigninService} from '../../signin.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  @Input() info:any;
  constructor(private SigninService:SigninService) { }
  ngOnInit(): void {
  }
  addNewUser({email,password}){
    this.info = email + ' ' + password;
    this.SigninService.sendInfo(this.info);
  }


}
