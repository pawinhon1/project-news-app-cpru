import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../service/service.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  caption: any;
  describtion: any; 
  type: any;
  image: any;

  constructor(private service: ServiceService ,private route: Router) { }

  ngOnInit() {
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


  addNews(){
    const dataAdd = {
      "caption": this.caption,
      "describtion": this.describtion,
      "type": this.type,
      "image": this.image
    };
    this.service.addNews(dataAdd).subscribe(result=>{
      this.route.navigateByUrl('/index');
    });
  }

}
