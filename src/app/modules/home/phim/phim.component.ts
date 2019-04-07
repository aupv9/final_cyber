import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery'
import { load } from '@angular/core/src/render3';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.css']
})
export class PhimComponent implements OnInit {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }
  public flag:boolean;
  ngOnInit() {
   

  }
  hienPhimDangChieu(){
    this.flag=true;
    location.reload();
  }
  hienPhimSapChieu(){
    this.flag=!this.flag;
    location.reload();
  }

}
