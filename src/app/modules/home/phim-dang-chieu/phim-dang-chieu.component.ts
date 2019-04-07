import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';
import * as $ from'jquery'
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.css']
})
export class PhimDangChieuComponent implements OnInit {

 
  constructor(private phimService:PhimService) { }
  public arrPhim:any[]=[];
  ngOnInit() {
    this.phimService.layDanhSachPhim("GP03").subscribe(
      (data) => {
        console.log(data);
        
        this.arrPhim = data;
      }
    )  


  }



}
