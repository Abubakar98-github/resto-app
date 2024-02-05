import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent }from './myComponents/add/add.component'
import { ListComponent } from './myComponents/list/list.component'
import { LoginComponent } from './myComponents/login/login.component'
import { RegisterComponent } from './myComponents/register/register.component'
import { UpdateComponent } from './myComponents/update/update.component'


const routes: Routes = [
{
component:AddComponent,
path:"add"
},
{
component:ListComponent,
path:"list"
},
{
component:LoginComponent,
path:"login"
},
{
component:RegisterComponent,
path:"register"
},
{
component:UpdateComponent,
path:"update/:id"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
