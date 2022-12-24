import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { iLoginData } from 'src/app/model/iLoginData';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public hide:boolean = false;

  public loginData:iLoginData ={} as iLoginData;

  constructor(private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  public loginFormSubmit() {

    if(this.loginData.username.trim()=="" || this.loginData.password.trim()=="")
    {
      this._snackBar.open("Invalid Creditials","X",{
        duration:3000
      })
      return;
    }
    
    alert("logged in");
  }

}
