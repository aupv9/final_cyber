import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import * as _ from 'lodash';
import { PhimService } from 'src/app/_core/services/phim.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

  constructor(private phimService:PhimService,private router:Router) { }
  public arrPhim:any[]=[];

  ngOnInit() {
    this.phimService.layDanhSachPhim("GP03").subscribe(
      (data) => {
        console.log(data);
        
        this.arrPhim = data;
      }
    )  
  }
  filterPhim(value){
    console.log(value);
    let rs=_.filter(this.arrPhim,{TenPhim:value})
    this.arrPhim=rs;
    console.log(this.arrPhim);
    //this.router.navigate([ '/trangchitiet',this.arrPhim[0].MaPhim])
  }
  search(value1,value2){
    console.log(value1,value2);
    if(value1 !== ""){
      let rs=_.filter(this.arrPhim,{TenPhim:value1})
      this.router.navigate(['/trangchitiet',rs[0].MaPhim])
    }
    else if(value1 !=="" && value2 !==""){
      let rs=_.filter(this.arrPhim,{TenPhim:value1,NgayKhoiChieu:value2})
      this.router.navigate(['/trangchitiet',rs[0].MaPhim])
    }
  }
}
