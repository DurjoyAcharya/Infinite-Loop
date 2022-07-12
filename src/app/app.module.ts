import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeaderComponent } from './header/header.component';
import { OuthModule } from './outh/outh.module';
import { ProductService } from './product.service';
import { StudentComponent } from './student/student.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    StudentComponent,
    CounterComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, OuthModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
