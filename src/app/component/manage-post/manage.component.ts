import { Component, OnInit } from "@angular/core";
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'manage-app',
    templateUrl: './manage.component.html'
})

export class ManageComponent implements OnInit{
    data : any[] = [];
    status : any;
    url = 'http://localhost:3000/updateSNews';
    constructor(private service: ServiceService, private route: Router, private https: HttpClient){}

    ngOnInit(){
        this.status = localStorage.getItem("status");
        this.getNews();
    }

    getNews(){
        this.service.getNews().subscribe(res=>{
            this.data = res.doc;
        });
    }

    deleteNews(id){
        this.service.deleteNews(id).subscribe(res=>{
            alert('ลบข้อมูลเรียบร้อย!');
            this.ngOnInit();
        });
    }

    editData(id){
        this.route.navigate([`/edit/${id}`]);
    }

    updateStatusNews(id){
        const data = {
            "status": "allow"
        }
        this.https.post(`${this.url}/${id}`, data).subscribe(res=>{
            alert('ทำรายการสำเร็จ!');
            this.ngOnInit();
        });
    }

    updateStatusNot(id){
        const data = {
            "status": "notallow"
        }
        this.https.post(`${this.url}/${id}`, data).subscribe(res=>{
            alert('ทำรายการสำเร็จ!');
            this.ngOnInit();
        });
    }
}