import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RegistraionComponent } from './registraion/registraion.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListComponent},
    { path: 'registration', component: RegistraionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
