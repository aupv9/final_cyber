import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/_core/services/phim.service';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-trangchitiet',
  templateUrl: './trangchitiet.component.html',
  styleUrls: ['./trangchitiet.component.css']
})
export class TrangchitietComponent implements OnInit {

  constructor(private param:ActivatedRoute,private phim:PhimService,private scrollService:ScrollToService) { }
  public chitietPhim:any;

  ngOnInit() {
    // lấy thông tin phim thông qua mã phim qua api get
    this.param.params.subscribe(    
      data => {
        this.phim.layPhim(data.id).subscribe(
            (chitiet) =>{
            this.chitietPhim=chitiet;
            console.log(chitiet);
          }
        )
      }
    )
  }
  triggerScrollTo(value){
    this.scrollService.scrollTo(value);
    console.log(value)
  }
}
