import { Component, OnInit } from "@angular/core";
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'mnuser-app',
    templateUrl: './mnuser.component.html'
})

export class MnuserComponent implements OnInit{
    dataNews : any[] = [];
    status : any;
    member_id: any;
    constructor(private service: ServiceService, private route: Router){

    }

    ngOnInit(){
        this.getNews();
        this.member_id = localStorage.getItem('member_id');
        this.status = localStorage.getItem('status');
    }

    getNews(){
        this.service.getNews().subscribe(result=>{
            this.dataNews = result.doc;
        });
    }

    delete(id){
        this.service.deleteNews(id).subscribe(result=>{
            alert('ลบข้อมูลเรียบร้อย!');
            this.ngOnInit();
        });
    }

    editData(id){
        this.route.navigate([`/edit/${id}`]);
    }
}