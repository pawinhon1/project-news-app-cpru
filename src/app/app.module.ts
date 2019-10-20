import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
import { ListComponent } from './component/list/list.component';
import { AddComponent } from './component/add/add.component';
import { ShowComponent } from './component/show-find-news/show.component';
import { EditComponent } from './component/edit/edit.component';
import { FooterComponent } from './component/footer/footer.component';
import { ManageComponent } from './component/manage-post/manage.component';
import { MnuserComponent } from './component/manage-post-user/mnuser.component';
import { MemberComponent } from './component/member/membber.component';
import { DetailComponent } from './component/detail-component/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ListComponent,
    AddComponent,
    ShowComponent,
    EditComponent,
    FooterComponent,
    ManageComponent,
    MnuserComponent,
    MemberComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
