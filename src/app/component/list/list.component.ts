import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataResult : any[] = [];
  // dataNews :any[] = [];
  type: any;
  firstname : any ;
  status: any;

  constructor(private service: ServiceService, private route: Router) { }

  ngOnInit() {
      this.getNews();
      this.firstname = localStorage.getItem("firstname");
      this.status = localStorage.getItem('status');
  }

  getNews(){
    this.service.listNews().subscribe(res=>{
        this.dataResult = res.doc;
    });
  }
  
  deleteData(id){
    // alert(id);
    this.service.deleteNews(id).subscribe(result=>{
      console.log(JSON.stringify(result));
      this.ngOnInit();
    });
  }

  editNews(id){
    this.route.navigate([`/edit/${id}`]);
  }

}
