import { Component, OnInit } from "@angular/core";
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-member',
    templateUrl: './member.component.html'
})

export class MemberComponent implements OnInit{
    data :any[] = [];
    status:any;
    url = 'http://localhost:3000/updatestatus';
    constructor(private service: ServiceService, private route: Router, private http: HttpClient){

    }

    ngOnInit(){
        this.getMember();
        this.status = localStorage.getItem('status');
    }

    getMember(){
        this.service.getMember().subscribe(member=>{
            this.data =  member.doc;
        });
    }

    allowUser(id){
        const data = {
            "status" : 'user'
        }
        this.http.post<any>(`${this.url}/${id}`,data).subscribe(()=>{
            alert('ยืนยันตัวตนเรียบร้อย');
            this.ngOnInit();
        });
    }
}