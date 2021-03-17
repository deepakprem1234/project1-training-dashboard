import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  public adminLogged: boolean;
  public userLogged: boolean;
  public trainerLogged: boolean;

  @Output() loginEvent = new EventEmitter();
  
  constructor(private loginservice: LoginService, private router: Router) { 
   this.adminLogged = false;
   this.userLogged=false;
   this.trainerLogged=false;
  }

  onLogin() {
    this.loginservice.setName(this.username);

    if((this.username == 'admin') && (this.password == 'admin'))
      {
        this.adminLogged = true;
        console.log(this.adminLogged);
        this.loginEvent.emit(this.adminLogged);
        this.router.navigate(['default']);
      }
      else if((this.username == 'trainer') && (this.password == '1234'))
      {
        console.log("hii");
        this.trainerLogged=true;
        this.router.navigate(['trainer']);
      }
      else{
        console.log("hello")
        this.userLogged = true;
        this.router.navigate(['userdefault']);
      }
  }

  register(){
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
  }

}
