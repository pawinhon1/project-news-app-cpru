import { Component, OnInit } from "@angular/core";
import { ServiceService } from 'src/app/service/service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'
})

export class EditComponent implements OnInit{
    data : any;
    image: any;
    caption: any;
    describtion: any;
    type: any;
    id : any;

    constructor(private service: ServiceService, private actRoute: ActivatedRoute){}

    ngOnInit(){
        this.actRoute.params.subscribe(params => {
            this.service
              .editNews(params['id'])
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

    // updateNews(){
    //     const data = {
    //         "caption": this.caption,
    //         "describtion": this.describtion,
    //         "type": this.type,
    //         "image": this.image
    //     }
    //     this.service.updateNews(this.id,data).subscribe(result=>{
    //         alert('Update success!');
    //     });
    // }

    
    // editNews(id){
    //     this.service.editNews(id).subscribe(res=>{
    //         alert(res);
    //     });
    // }
}