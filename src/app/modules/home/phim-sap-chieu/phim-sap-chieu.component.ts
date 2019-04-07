import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';
import * as $ from'jquery'
@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.css']
})
export class PhimSapChieuComponent implements OnInit {

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
