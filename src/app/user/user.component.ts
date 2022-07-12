import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { User } from './user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  University: string = 'City University';
  user: User = {
    id: 1925102002,
    name: 'Durjoy Acharya',
    email: 'da-durjoy@outlook.com',
    password: '123456',
    created_at: '2022-01-03',
  };
  user1: User = {
    id: 1925102058,
    name: 'Badhon Biswas',
    email: 'da-durjoy@outlook.com',
    password: '123456',
    created_at: '2022-01-03',
  };
  user2: User = {
    id: 1925102030,
    name: 'Shariful',
    email: 'da-durjoy@outlook.com',
    password: '123456',
    created_at: '2022-01-03',
  };
  list: User[] = [this.user, this.user1, this.user2];
  product: any[] = [];
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.product = this.service.getProducts();
  }
}
