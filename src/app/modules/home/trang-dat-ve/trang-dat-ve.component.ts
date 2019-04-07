import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trang-dat-ve',
  templateUrl: './trang-dat-ve.component.html',
  styleUrls: ['./trang-dat-ve.component.css']
})
export class TrangDatVeComponent implements OnInit {

  constructor(private phimservice:PhimService,private param:ActivatedRoute) { }
  public ctPhongVe:any[];
  ngOnInit() {
    this.getChiTietPhongVe();
  }
  getChiTietPhongVe(){
    this.param.params.subscribe(
      (data) =>{
        this.phimservice.layChiTietPhongVe(data.malichchieu).subscribe(
          (ct)=>{
            this.ctPhongVe=ct["DanhSachGhe"];
            console.log(this.ctPhongVe);
          }
        )   
      }
    )
  }
}
