import { Component, OnInit, Input } from '@angular/core';
import { TinTucComponent } from '../tin-tuc/tin-tuc.component';

@Component({
  selector: 'app-item-tintuc',
  templateUrl: './item-tintuc.component.html',
  styleUrls: ['./item-tintuc.component.css']
})
export class ItemTintucComponent implements OnInit {

  constructor() { }
  @Input() tintuc;
 
  ngOnInit() {
  }

}
