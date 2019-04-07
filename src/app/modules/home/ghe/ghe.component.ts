import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {


  @Input() ghe;
  @Output() status=new EventEmitter();
  flag:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  //gửi trạng thái của ghế qua emit
  datGhe(){
    if(this.flag){
      this.flag=false;
    }else{
      this.flag=true;
    }
   // this.status.emit(this.flag);
    this.status?this.status.emit(this.flag):this.status.emit(!this.flag);
  }

}
