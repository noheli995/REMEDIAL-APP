import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  public user;
  public pass;
  public correctUser='user';
  public correctPass='pass';

  ngOnInit(): void {
  }

  onClick(user, pass){
    if(this.user == this.correctUser && this.pass == this.correctPass){
      alert("Okidoki");
      this.router.navigate(['home']);
    }else{
      alert("Fail");
    }
  }

}
