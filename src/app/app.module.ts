import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';

import { Routes, RouterModule } from '@angular/router';
import { HomeTemplateComponent } from './modules/home/home-template/home-template.component';
import { AdminModule } from './modules/admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { SafePipePipe } from './_core/pipe/safe-pipe.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

const routes: Routes = [
  { path: '',loadChildren:()=>HomeModule },
  { path: 'home',loadChildren:()=>HomeModule },
  { path: 'admin',loadChildren:()=>AdminModule},
 
];






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HomeModule,RouterModule.forRoot(routes),HttpClientModule,AdminModule, NgxSpinnerModule,ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
