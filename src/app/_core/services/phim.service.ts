import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import User from '../model/User';
import Phim from '../model/Phim';
@Injectable({
  providedIn: 'root'
})
export class PhimService implements OnInit{

  constructor(private http:HttpClient) { }

  ngOnInit(){

  }
  public layDanhSachPhim(maphim): Observable<any[]> {
    let response: any = this.http.get<any>(`http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=${maphim}`);
    return response;
  }
  public layPhim(ma:string){
    let url=`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${ma}`;
    return this.http.get(url);
  }
  public layChiTietPhongVe(malichchieu:string){
    let url=`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${malichchieu}`;

    return this.http.get(url);
  }
  public upDatePhim(phim:Phim){
    const p:Phim=new Phim(phim.MaPhim,phim.TenPhim,phim.Trailer,phim.MoTa,phim.NgayKhoiChieu,phim.DanhGia,phim.HinhAnh,phim.MaNhom);
    let url=`http://svcy2.myclass.vn/api/QuanLyPhim/CapNhatPhim`;

    return this.http.post(url,p,{
      headers:new HttpHeaders({
        'content-type':'application/json;charset=UTF-8'
      })
    });
  }
  public deletePhim(maphim){
    let url=`http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maphim}`;
    return this.http.delete(url,{
      headers:new HttpHeaders({
        'content-type':'application/json;charset=UTF-8'
      })
    })
  }
  public addPhim(phim:Phim){
    let url=`http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
    return this.http.post(url,phim,{
      headers:new HttpHeaders({
        'content-type':'application/json;charset=UTF-8'
      })
    })

  }
}
