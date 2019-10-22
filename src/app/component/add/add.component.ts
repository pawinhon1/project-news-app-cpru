import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../service/service.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
 
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
  mId : any;
  status : any;
  dateTime : any;
  // let today: Date  = Date.now();

  constructor(private service: ServiceService ,private route: Router, private datePipe: DatePipe) { }
  
  ngOnInit() {
    this.mId = localStorage.getItem("member_id");
    this.status = localStorage.getItem('status');
    this.dateTime = this.datePipe.transform(new Date(),"dd-mm-yyyy");
  }

  inputFile(input){
    if(input.files.length == 0){
        return;
    }
    const readImage = new FileReader();

    readImage.readAsDataURL(input.files[0]);
    readImage.addEventListener('load', (result)=>{
        this.image = readImage.result;
        console.log(this.image);
    });
  }


  addNews(){
    const dataAdd = {
      "caption": this.caption,
      "describtion": this.describtion,
      "type": this.type,
      "image": this.image,
      "member_id": this.mId,
      "date": this.dateTime
    };
    this.service.addNews(dataAdd).subscribe(result=>{
      this.route.navigateByUrl('/index');
    });
  }

}
