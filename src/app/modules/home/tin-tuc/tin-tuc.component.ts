import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.css']
})
export class TinTucComponent implements OnInit {

  constructor() { }
  
  flag:string="dienanh";


  ngOnInit() {
  }
  setDienAnh(){
    this.flag="dienanh";
  }
  setReview(){
    this.flag="review";
  }
  setKhuyenMai(){
    this.flag="khuyenmai";
  }
}
