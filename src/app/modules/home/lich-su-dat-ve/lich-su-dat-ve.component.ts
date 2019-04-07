import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lich-su-dat-ve',
  templateUrl: './lich-su-dat-ve.component.html',
  styleUrls: ['./lich-su-dat-ve.component.css']
})
export class LichSuDatVeComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  public dsVeDaDat:any=[]
  ngOnInit() {

    let getUser=JSON.parse(localStorage.getItem("userLogin"));
    if( typeof getUser ==='object'){
      this.userService.lichSuDatVe(getUser.TaiKhoan).subscribe(
        (data) => {
          this.dsVeDaDat=data;
          console.log(this.dsVeDaDat);
        }
      )
    }else{
      this.router.navigate(['/']);
    }
    
    console.log(getUser);
  }

}
