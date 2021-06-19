import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private api: ApiService,
    public router:Router
    ) { }

  ngOnInit(): void {
  }

  post() {
    let data = {
      "firstname": "NOHELI",
      "lastname": "GUERRA"
    }
    
    this.api.postToAPi(data).subscribe((response) => {
      let _response;
      _response = response;
      alert(_response.message);

    })

  }

  get() {
    this.api.getFromApi().subscribe((response) => {
      let _response;
      _response = response;
      alert(_response.message);

    })

  }

  logout(){
    this.router.navigate(['']);

  }

}
