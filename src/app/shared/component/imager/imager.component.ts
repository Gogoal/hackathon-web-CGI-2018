import { Component, Input } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-imager',
  providers: [],
  templateUrl: './imager.component.html',
  styleUrls:  ['./imager.component.css']
})

export class ImagerComponent {

  public _hasSource = false;
  private activeMediaQuery = '';

  // @Input
  private _src: string;
  private _srcMd: string;
  private _srcSd: string;
  private _width = '100%';
  private _height = '100%';

  public _imgLoadedUrl: string;
  public _imgPreloadUrl: string;

  @Input() set srcMd(value: string) {
    if (value) {
      this._srcMd = value;
    }
  }

  @Input() set srcSd(value: string) {
    if (value) {
      this._srcSd = value;
    }
  }

  @Input() set src(value: string) {
    if (value) {
      this._src = value;
      this._hasSource = true;
      this.manageImageSize(this.activeMediaQuery);
    }
  }

  @Input() set width(value: string) {
    this._width = value;
  }

  get width(): string {
    return this._width;
  }

  @Input() set height(value: string) {
    this._height = value;
  }

  get height(): string {
    return this._height;
  }

  constructor(private media: ObservableMedia) {

   this.media.subscribe((change: MediaChange) => {
      if (change.mqAlias !== this.activeMediaQuery) {
        this.activeMediaQuery = change ? change.mqAlias : '';
        this.manageImageSize(this.activeMediaQuery);
      }
    });

  }

  manageImageSize(currentBreakpoint) {
    if (this._src) {
      let tempUrl = this._src;
      switch (currentBreakpoint) {
        case 'xl':
        case 'lg':
          console.log('>>> Grand ecran' + currentBreakpoint);
          tempUrl = this._src;
          break;
        case 'md':
          console.log('>>> Moyen ecran');
          if (this._srcMd) {
            tempUrl = this._srcMd;
          }else {
            tempUrl = this._src;
          }
          break;
        case 'sm':
        case 'xs':
          console.log('>>> Petit ecran' + currentBreakpoint);
          if (this._srcSd) {
          tempUrl = this._srcSd;
          }else {
            tempUrl = this._src;
          }
          break;
        default:
          break;
      }
      if (tempUrl !== this._imgPreloadUrl) {
        this._imgLoadedUrl = '';
        this._imgPreloadUrl = tempUrl;
      }
    }
  }



}


