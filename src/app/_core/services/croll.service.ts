import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class CrollService {

  constructor(private _scrollToService: ScrollToService) { }

  public triggerScrollTo(value) {
    
    const config: ScrollToConfigOptions = {
      target:value
    };
    this._scrollToService.scrollTo(config);
  }


}
