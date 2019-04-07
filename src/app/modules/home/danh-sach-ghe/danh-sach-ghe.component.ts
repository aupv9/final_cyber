import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_core/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.css']
})
export class DanhSachGheComponent implements OnInit,OnChanges {

  constructor(private param:ActivatedRoute,private UserService:UserService,private router: Router ) { }
  @Input()dsGhe:any[]=[];
   soGheDaDat:number=0;
   soGheChuaDat:number=this.dsGhe.length;
  dsGheDangDat:any[]=[];
  
  ngOnChanges(){
    this.soGheChuaDat=this.dsGhe.length;
    console.log(this.soGheChuaDat);
  }

  ngOnInit() {
    console.log(this.dsGhe);
    this.soGheChuaDat=this.dsGhe.length;
    this.loadGhe();   
    this.param.params.subscribe(
      data => console.log(data.malichchieu)
    )
  }
  loadGhe(){
    for(let i of this.dsGhe) {
      if(i.DaDat ===false){
        this.soGheChuaDat++;
      }
    }
  }
  datGhe(value1,value2){
    if(value1){
      console.log(value1,value2);
      this.soGheDaDat++;
      this.dsGheDangDat.push(value2);     
    }else{    
      this.soGheDaDat--;
      for (const index in this.dsGheDangDat) {
          if(this.dsGheDangDat[index].MaGhe === value2.MaGhe){
            this.dsGheDangDat.splice(parseInt(index),1);
          }
      }
    }
    console.log(this.dsGheDangDat);
  }

  malichchieu:string;
  getUser:any=JSON.parse(localStorage.getItem("userLogin")); ///lấy thông tin người dùng qua localStorge
  
  datVe(){

    if(this.getUser === null){
      this.router.navigate(['dangnhap']);
      Swal.fire('Bạn Phải Đăng Nhập Để Tiến Hành Đặt Vé!' , 'warning');
    }
    else{
      this.param.params.subscribe(
        data => this.malichchieu=data.malichchieu
      )
      let dsVe=[];
      for (const key of this.dsGheDangDat) {
          let ve={
            MaGhe:key.MaGhe,
            GiaVe:key.GiaVe
          }
          dsVe.push(ve);
      }
      const ve={
        MaLichChieu:this.malichchieu,
        TaiKhoanNguoiDung:this.getUser.TaiKhoan,
        DanhSachVe:dsVe
      }
      //tiến hành đặt vé
       this.UserService.datVe(ve).subscribe(
          (data) =>{
            if (typeof data === 'object') {
              Swal.fire('Thông báo!', 'Chúc mừng bạn đặt vé  thành công!', 'success');
            } else {          
              Swal.fire('Thông báo!', data , 'warning');
            }
          }
       );
  
    }
    //console.log(this.getUser);
    //console.log(ve);
  }
}
