import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
    selector: 'app-dt',
    templateUrl: './detail.component.html'
})

export class DetailComponent implements OnInit{
    id : any;
    data : any[] = [];
    member :any = {};
    dataMember : any[] = [];
    constructor(private acRoute: ActivatedRoute, private service: ServiceService){}
    
    ngOnInit(){
        this.acRoute.params.subscribe(params=>{
            this.id = params.id;
            this.service.newsDetail(this.id).subscribe(news=>{
                this.data = news.doc;
                this.member = news.doc;
                this.service.findMember(this.member['member_id']).subscribe(member=>{
                    this.dataMember = member.doc;
                });
            });
        });
    }

}