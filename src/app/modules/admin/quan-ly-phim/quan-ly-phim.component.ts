import { Component, OnInit, OnChanges } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';
import { NgForm } from '@angular/forms';
import Phim from 'src/app/_core/model/Phim';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css']
})
export class QuanLyPhimComponent implements OnInit {

  constructor(private phimService:PhimService,  private router : Router) {
    this.ngOnInit();  
   }
  dsPhim:any=[];
  manhoms:any=[
    "GP01","GP02","GP03"
  ]
  danhgias:any=[
    1,2,3,4,5
  ]
  ;
  maphim:any;trailer:any;hinhanh:any;manhom="GP03";

  ngOnInit() {
    this.phimService.layDanhSachPhim(this.manhom).subscribe(
      data => this.dsPhim=data
    )
  }
  delete(maphim){
    this.maphim=maphim;
    console.log(maphim);
    this.phimService.deletePhim(this.maphim).subscribe(
      (data) =>{
        if (typeof data === 'object') {
          Swal.fire('Thông báo!', 'Bạn Xóa thành công!', 'success');
          location.reload();
        } else {
          Swal.fire('Thông báo!', data , 'warning');
        }
      }
    )
  }
  update(maphim,trailer,hinhanh){
    this.maphim=maphim;
    this.trailer=trailer;
    this.hinhanh=hinhanh;
  }
  Add(phim:Phim){
    this.phimService.addPhim(phim).subscribe(
      (data) =>{
        if (typeof data === 'object') {
          Swal.fire('Thông báo!', 'Bạn thêm phim thành công!', 'success');
        } else {
          Swal.fire('Thông báo!', data , 'warning');
        }
      }
    )
  }
  Update(form:Phim){

    console.log(form)
    form.MaPhim=this.maphim;
    this.phimService.upDatePhim(form).subscribe(
      (data) =>{
        if (typeof data === 'object') {
          Swal.fire('Thông báo!', 'Bạn Sửa thành công!', 'success');
        } else {
          Swal.fire('Thông báo!', data , 'warning');
        }
      }
    )
  }
  ChangingValue(value){
    this.phimService.layDanhSachPhim(value).subscribe(
      data => this.dsPhim=data
    )
  }
}
