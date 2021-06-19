import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public pass;
  public email;
  public name;

  public MF;
  public AF;
  public ADDRES;
  public EM;
  public TEL;
  public RFC;


  constructor( 
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  manufa(){
     alert( "this is your manufacturer name: "+this.name+"your email is:"+this.email);
  }

  gotousers(){
    this.router.navigate(['users']);


  }

  logout(){
    this.router.navigate(['']);

  }
  check(){
    alert( "this is your MainFactorie: "+this.MF);
  }

}
