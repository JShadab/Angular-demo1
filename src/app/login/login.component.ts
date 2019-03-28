import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // userName = "shadab@gmail.com";
  // userpassword = "1234";

  isAuthenticate = false;

  data = {
    username: 'amit',
    userpassword: 'aa'
  }

  constructor(private router: Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  authenticate() {
    this._loginService.isAuthenticate(this.data).subscribe(res => {

      if (res && res.length!=0) {
        //alert(res);
       // this.isAuthenticate = true;
      this.Dashboard();

      } else { this.isAuthenticate = false; }
    },
      error => alert(error),
      () => console.log('Finished')
    );

  }



  Dashboard() {
    this.router.navigate(['dashboard']);
  }


}
