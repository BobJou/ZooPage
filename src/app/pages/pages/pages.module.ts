import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesAnimalComponent } from '../Animal/pages.animal/pages.animal.component';
import { PagesVisitComponent } from '../Visit/pages.visit/pages.visit.component';
import { BigcardComponent } from 'src/app/components/bigcard/bigcard.component';
import { SmallcardComponent } from 'src/app/components/smallcard/smallcard.component';





@NgModule({
  declarations: [PagesVisitComponent,PagesAnimalComponent, BigcardComponent, SmallcardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
})
export class PagesModule { }
