import {Routes} from '@angular/router';
import {RegisterComponent} from "./components/mod5/register/register.component";
import {HomeComponent} from "./components/mod5/home/home.component";
import {DetailComponent} from "./components/mod5/detail/detail.component";

export const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '**', component: HomeComponent},
];
