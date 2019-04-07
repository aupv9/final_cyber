import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { Routes, RouterModule } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrangchitietComponent } from './trangchitiet/trangchitiet.component';
import { TrangdatgheComponent } from './trangdatghe/trangdatghe.component';
import { TrangdangkyComponent } from './trangdangky/trangdangky.component';
import { TrangdangnhapComponent } from './trangdangnhap/trangdangnhap.component';
import { PhimComponent } from './phim/phim.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { ReviewComponent } from './review/review.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { ItemTintucComponent } from './item-tintuc/item-tintuc.component';
import { FormsModule } from '@angular/forms';
import { TrangDatVeComponent } from './trang-dat-ve/trang-dat-ve.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';
import { LichSuDatVeComponent } from './lich-su-dat-ve/lich-su-dat-ve.component';
import { SafePipePipe } from 'src/app/_core/pipe/safe-pipe.pipe';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'
const routes: Routes = [
  {path:'',component:HomeTemplateComponent,children:[
    { path: 'trangchitiet/:id', component: TrangchitietComponent },
    { path: '', component: TrangchuComponent },
    { path: 'trangdatve/:malichchieu', component: TrangDatVeComponent },
    { path: 'lichsudatve', component: LichSuDatVeComponent },
  ] 
  }

];






@NgModule({
  declarations: [ HomeTemplateComponent, TrangchuComponent, HeaderComponent,
     FooterComponent, TrangchitietComponent, TrangdatgheComponent, 
     TrangdangkyComponent, TrangdangnhapComponent, PhimComponent, CarouselComponent,
     TrangDatVeComponent, PhimDangChieuComponent, PhimSapChieuComponent, ItemPhimComponent,
      TinTucComponent, DienAnhComponent, ReviewComponent, KhuyenMaiComponent, ItemTintucComponent, DanhSachGheComponent, GheComponent, LichSuDatVeComponent,
      SafePipePipe],
  imports: [
    CommonModule,[RouterModule.forChild(routes)],FormsModule,NgxPageScrollCoreModule.forRoot({duration: 2500}),BsDatepickerModule.forRoot()      
  ]
})
export class HomeModule { }
