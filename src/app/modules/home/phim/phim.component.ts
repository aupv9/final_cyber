import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery'
import { load } from '@angular/core/src/render3';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { PhimService } from 'src/app/_core/services/phim.service';
@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.css']
})
export class PhimComponent implements OnInit {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any,private phimService:PhimService) { }
  public flag:boolean;
  
  arrPhim:any=[]
  ngOnInit() {
    this.phimService.layDanhSachPhim("GP03").subscribe(
      data => this.arrPhim=data
    )

  }
  
  hienPhimDangChieu(){
    this.flag=true;
    location.reload();
  }
  hienPhimSapChieu(){
    this.flag=!this.flag;
    location.reload();
  }
  xemThem(){
    this.flag=true;
  }
}
