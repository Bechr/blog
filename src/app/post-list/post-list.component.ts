import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


  @Input() loveNbr:number;
  @Input() PostTitle: string;
  @Input() Content: string;
  @Input() PostDate : Date;
  @Input() IndexPost:number;
   


  constructor() { }

  ngOnInit() {
    
  }

  getColor(){
    if(this.loveNbr > 0){
      return 'green';
    }else if(this.loveNbr < 0) {
      return 'danger';
    }
  }

  LovePlus(){
    this.loveNbr = ++this.loveNbr  ;
  }

  LoveMinus() {
    this.loveNbr = this.loveNbr - 1;
  }

}
