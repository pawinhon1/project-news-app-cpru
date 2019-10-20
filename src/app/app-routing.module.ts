import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { ListComponent } from './component/list/list.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ShowComponent } from './component/show-find-news/show.component';
import { EditComponent } from './component/edit/edit.component';
import { ManageComponent } from './component/manage-post/manage.component';
import { MnuserComponent } from './component/manage-post-user/mnuser.component';
import { MemberComponent } from './component/member/membber.component';
import { DetailComponent } from './component/detail-component/detail.component';

const routes: Routes = [
  {path: 'homepage', component: AppComponent},
  {path: 'adddata', component: AddComponent},
  {path: 'index', component: ListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'showList', component: ShowComponent},
  {path : 'edit/:id', component: EditComponent},
  {path: 'manage', component: ManageComponent},
  {path: 'manageuser', component: MnuserComponent},
  {path: 'menageuser', component: MemberComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '' , pathMatch: 'full', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
