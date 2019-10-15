import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  data : any = {};
  constructor(private service: ServiceService, private route: Router) { }

  ngOnInit() {
  }

  clickLogin(){
    const data = {
      "username": this.username,
      "password": this.password
    }
    this.service.login(data).subscribe(result=>{
        alert(JSON.stringify(result));
        this.data = result.doc;
        console.log(JSON.stringify(this.data));
          if(this.data != null){
            this.takeLogin();
          }
    });
  }

  takeLogin(){
    // console.log(this.data['firstname'],this.data['lastname']);
    // ขอบคุณ https://www.c-sharpcorner.com/article/create-registration-and-login-page-using-angular-7-and-web-api/ ที่ทำให้เกิดไอเดียในเรื่องการดึงข้อมูลอาเรย์มาแสดงใน ts file ขอบคุณจากใจ
    localStorage.setItem("firstname", this.data['firstname']);
    localStorage.setItem("lastname", this.data['lastname']);
    localStorage.setItem("status", this.data['status']);
    this.route.navigateByUrl('/index');
  }
  
}
