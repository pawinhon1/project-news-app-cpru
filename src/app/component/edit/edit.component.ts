import { Component, OnInit } from "@angular/core";
import { ServiceService } from 'src/app/service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'
})

export class EditComponent implements OnInit{
    data : any = {};
    id : any;
    news: any;
    image: any;
    url = 'http://localhost:3000/update';

    constructor(private service: ServiceService, private actRoute: ActivatedRoute,private http: HttpClient, private route: Router){
    }
    
    ngOnInit(){
        this.actRoute.params.subscribe(params => {
            this.id = params.id;
            // alert(this.id);
            this.service.editNews(this.id)
              .subscribe(res => {
                this.data = res.doc;
              });
          });
    }


    inputFile(input){
        if(input.files.length == 0){
            return;
        }
        const readImage = new FileReader();
    
        readImage.readAsDataURL(input.files[0]);
        readImage.addEventListener('load', (result)=>{
            this.image = readImage.result;
        });
      }

      clickUpdate() {
        if(this.image == null){
            this.http.post<any>(`${this.url}/${this.id}`, this.data).subscribe(result=>{
              alert('อัพเดทข้อมูลเรียบร้อย!');
            });
        }
        else{
            const allData = {
            "caption": this.data['caption'],
            "describtion": this.data['describtion'],
            "type": this.data['type'],
            "image": this.image
            }
            this.http.post<any>(`${this.url}/${this.id}`, allData).subscribe(result=>{
              alert('อัพเดทข้อมูลเรียบร้อย!');
            });
        }
      }
      
}