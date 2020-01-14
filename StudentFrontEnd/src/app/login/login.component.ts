import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  constructor(private service: StudentService) {    

   }

  ngOnInit() {
  }

  validateUser() {
    if(this.service.authenticateUser(this.email,this.password)!=false){
      alert("Valid Credentials");      
    }
    else
      alert("Invalid credentials");
  }
}
