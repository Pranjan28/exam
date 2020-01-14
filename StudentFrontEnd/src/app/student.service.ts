import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: any;
  loginStatus:boolean;
  constructor() {
    this.studentList = [];
    this.loginStatus=false;
  }

  getEmployees():any {
    this.studentList = [
      {
        "id": "1", "name": "Vaishnavi", "email": "vaishnavi@gmail.com", "password": "123"
      },
      {
        "id": "2", "name": "Laxmi", "email": "laxmi@gmail.com", "password": "123"
      },
      {
        "id": "3", "name": "Ashish", "email": "ashish@gmail.com", "password": "123"
      },
      {
        "id": "4", "name": "Pranjan", "email": "pranjan@gmail.com", "password": "123"
      },
      {
        "id": "5", "name": "Harshada", "email": "harshada@gmail.com", "password": "123"
      },
    ];
    return this.studentList;
  }

  addEmp(employee:any){
    this.studentList.push(employee);
    alert("Registered successfully");
  }
  
  authenticateUser(email:any,password:any):boolean{
    
    this.studentList.forEach(student => {
      if(student.email.equals(email) && student.password.equals(password))
        this.loginStatus=true;
    });
    return this.loginStatus;
  }
}
