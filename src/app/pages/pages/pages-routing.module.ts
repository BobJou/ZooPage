import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesVisitComponent } from '../Visit/pages.visit/pages.visit.component';
import { PagesAnimalComponent } from '../Animal/pages.animal/pages.animal.component';


const routes: Routes = [
  {path: 'visit',component:PagesVisitComponent},
  {path: 'animals',component:PagesAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
