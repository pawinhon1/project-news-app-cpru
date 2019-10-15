import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data = {}
  
  constructor(private memberService: ServiceService, private route: Router) { 
  }

  ngOnInit() {
  }

  register(){
      this.memberService.registerData(this.data).subscribe(result=>{
        // console.log(JSON.stringify({}));
          console.log(JSON.stringify(result));
          alert('สมัครสมาิชิกเรียบร้อย');
          // this.route.navigateByUrl('/login');
          window.location.reload();
      });
  }


}
