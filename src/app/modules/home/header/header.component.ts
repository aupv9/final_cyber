import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/app/_core/model/User';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/_core/services/user.service';
import { CrollService } from 'src/app/_core/services/croll.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private userService:UserService,private scrollService:CrollService) { }
  flag:boolean;
  getUser:any;
  ngOnInit() {
    this.getUser=JSON.parse(localStorage.getItem("userLogin"));
    if(typeof this.getUser === 'object'){
        this.flag=false;
    }else{
        this.flag=true;
        this.router.navigate(["/"]);
    }
    
  }

  triggerScrollTo(value){
    this.scrollService.triggerScrollTo(value);
    console.log(value)
  }
  logOut(){
    //localStorage.clear();
    localStorage.removeItem("userLogin");
    this.flag=true;
     this.router.navigate(["/"]);
    
  }
  scroll(element){
    window.scrollTo(element.yPosition);
  }
  
  DangKy(nguoiDung: User) {
    nguoiDung.MaNhom = 'GP02';
    nguoiDung.MaLoaiNguoiDung = 'KhachHang';
    console.log(nguoiDung);
    this.userService.register(nguoiDung).subscribe((data) => {
      if (typeof data === 'object') {
        Swal.fire('Thông báo!', 'Chúc mừng bạn đăng ký thành công!', 'success');
      } else {
        Swal.fire('Thông báo!', data , 'warning');
      }

    });
  }
  DangNhap(thongTinDangNhap: any) {
    console.log(thongTinDangNhap);
    this.userService.login(thongTinDangNhap.TaiKhoan, thongTinDangNhap.MatKhau)
      .subscribe((data) => {
        if (typeof data === 'object') {
          // Thành công: Lưu vào localstorage;
          const sUserLogin: string = JSON.stringify(data);
          localStorage.setItem('userLogin', sUserLogin);
          window.location.reload();
          this.router.navigate(['/']);
        } else {
          alert(data);
        }
      });
  }
}



