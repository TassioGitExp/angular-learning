import { HeaderData } from './header.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _header = new BehaviorSubject<HeaderData>({
    title: 'HOME',
    icon: 'home',
    routeUrl: ''
  }) 

  constructor() { }

  get header(): HeaderData {
    return this._header.value
  }

  set header(header: HeaderData) {
    this._header.next(header)
  }
}
