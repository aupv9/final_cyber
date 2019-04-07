import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trangdangnhap',
  templateUrl: './trangdangnhap.component.html',
  styleUrls: ['./trangdangnhap.component.css']
})
export class TrangdangnhapComponent implements OnInit {

  constructor(private userService:UserService, private router: Router, ) { }

  ngOnInit() {
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
