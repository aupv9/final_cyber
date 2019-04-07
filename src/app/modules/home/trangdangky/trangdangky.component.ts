import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { PhimService } from 'src/app/_core/services/phim.service';
import User from 'src/app/_core/model/User';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/_core/services/user.service';
@Component({
  selector: 'app-trangdangky',
  templateUrl: './trangdangky.component.html',
  styleUrls: ['./trangdangky.component.css']
})
export class TrangdangkyComponent implements OnInit {

  constructor(private userService:UserService) { }
  frmDangKy:FormGroup;
  ngOnInit() {
  }

  kiemTraMatKhau(reMatKhau: string, matKhau: string): boolean {
    if (reMatKhau !== matKhau) {

      //tạo ra 1 lỗi cho form
      // this.frmDangKy.controls.setErrors({ 'loiNhapLaiMatKhau': true });
      return true;
    }
    console.log(this.frmDangKy.errors);
      // this.frmDangKy.controls.setErrors({ 'loiNhapLaiMatKhau': false });
    return false;
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
}
