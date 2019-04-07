import { Component, OnInit, Input } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';
import Phim from 'src/app/_core/model/Phim';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.css']
})
export class ItemPhimComponent implements OnInit {

  constructor() { }

    @Input() phim:Phim;
  
    ngOnInit() {

     
    

  }

}
