import { Injectable } from '@angular/core';
import sure from './user-list/Data.json';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): any {
    return sure;
  }
  constructor() {}
}
