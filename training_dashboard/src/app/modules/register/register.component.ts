import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  cancel(){
    this.router.navigate(['']);
  }

  signup(){
    Swal.fire('Successfully Registered', '', 'success');
    this.router.navigate(['']);
  }

}
