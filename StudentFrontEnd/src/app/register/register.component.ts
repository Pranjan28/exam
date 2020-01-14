import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  id: any;
  name: String;
  email: String;
  password: String;

  emplist:any;
  constructor(private service: StudentService) {
    this.emplist=[];
  }

  ngOnInit() {
    this.emplist=this.service.getEmployees();
  }
  onSubmit() {
    this.id = Math.floor(Math.random() * 100) + 6;
    this.service.addEmp({ "id": this.id, "name": this.name, "email": this.email, "password": this.password })
  }

}
