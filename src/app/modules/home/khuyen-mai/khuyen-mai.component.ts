import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khuyen-mai',
  templateUrl: './khuyen-mai.component.html',
  styleUrls: ['./khuyen-mai.component.css']
})
export class KhuyenMaiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  DanhSachKhuyenMai = [
    {TieuDeSuKien:"Khuyến Mãi 1",HinhAnh:'https://media.vietteltelecom.vn/upload/ckfinder/images/3112.png'},
    {TieuDeSuKien:"Khuyến Mãi 2",HinhAnh:'https://topshare.s3.amazonaws.com/production/posts/pictures/000/000/145/original/kichi-kichi-khuyen-mai.jpg?1502809882'},
    {TieuDeSuKien:"Khuyến Mãi 3",HinhAnh:'http://giaydantuong365.com/uploads/user/2/khuyenmaigiay/khuyen-mai-giay-dan-tuong-dep-gia-re-cuc-soc.jpg'}, 
  ]

}
