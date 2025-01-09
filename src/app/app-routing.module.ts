import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultatComponent } from './resultat/resultat.component';

const routes: Routes = [
  {path:'resultat' ,component:ResultatComponent},
  {path:'' ,component:ResultatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
