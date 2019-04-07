import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { Routes, RouterModule } from '@angular/router';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyNhanVienModule } from './quan-ly-nhan-vien/quan-ly-nhan-vien.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'



const adminRoutes:Routes =[ 
  {path:'',component:AdminTemplateComponent,children:[
    { path:'quanlyphim',component:QuanLyPhimComponent },
    { path:'quanlynguoidung',component:QuanLyNguoiDungComponent },
    { path: 'quanlynhanvien', loadChildren: () =>  QuanLyNhanVienModule}
  ]
}
]
@NgModule({
  declarations: [AdminTemplateComponent,QuanLyPhimComponent,QuanLyNguoiDungComponent],
  imports: [
    CommonModule,RouterModule.forChild(adminRoutes),FormsModule, ReactiveFormsModule ,BsDatepickerModule.forRoot()      
  ]
})
export class AdminModule { }
