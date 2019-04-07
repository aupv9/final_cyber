import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyNhanVienTemplateComponent } from './quan-ly-nhan-vien-template/quan-ly-nhan-vien-template.component';
import { DanhSachNhanVienComponent } from './danh-sach-nhan-vien/danh-sach-nhan-vien.component';
import { Routes, RouterModule } from '@angular/router';


const nhanVienRoutes: Routes = [
  { path: '', component:QuanLyNhanVienTemplateComponent, children: [
    { path: '', component: DanhSachNhanVienComponent },
    { path: 'danhsach', component: DanhSachNhanVienComponent },
    
  ]}
]
@NgModule({
  declarations: [QuanLyNhanVienTemplateComponent, DanhSachNhanVienComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(nhanVienRoutes)
  ]
})
export class QuanLyNhanVienModule { }
