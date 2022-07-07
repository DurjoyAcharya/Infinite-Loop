import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { HeaderComponent } from './header/header.component';
import { OuthModule } from './outh/outh.module';
import { StudentComponent } from './student/student.component';
import { UserListComponent } from './user-list/user-list.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    StudentComponent,
    ClockComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, OuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  public Tree() {
    console.log('Tree');
  }
}
