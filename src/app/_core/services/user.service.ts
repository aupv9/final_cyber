import { Injectable } from '@angular/core';
import User from '../model/User';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public login(taiKhoan: string, matKhau: string): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`;
    const header: Headers = new Headers(); // Cho biết định dạng dữ liệu truyền đi
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, null);
    return observable;
  }
  public register(tv:User){
    const body:User={
      TaiKhoan:tv.TaiKhoan,
      MatKhau:tv.MatKhau,
      HoTen:tv.HoTen,
      Email:tv.Email,
      SoDT:tv.SoDT,
      MaNhom:tv.MaNhom,
      MaLoaiNguoiDung:tv.MaLoaiNguoiDung,
      TenLoaiNguoiDung:tv.TenLoaiNguoiDung,
      SSID:tv.SSID,
      SecretKey:tv.SecretKey
    }

    let url="http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung";

    return this.http.post(url,body,{
      headers:new HttpHeaders({
        'content-type':'application/json;charset=UTF-8'
      })
    });
  }

  public datVe(ve){
    let url=`http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe`;
    return this.http.post(url,ve,{
      headers:new HttpHeaders({
        'content-type':'application/json;charset=UTF-8'
      })
    });
  }
  public lichSuDatVe(taikhoan){
    let url=`http://svcy2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${taikhoan}`;
    return this.http.post(url,{
      headers:new HttpHeaders({
        'content-type':'application/json;charset=UTF-8'
      })
    });
  }
}
