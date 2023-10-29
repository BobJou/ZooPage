import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smallcard',
  templateUrl: './smallcard.component.html',
  styleUrls: ['./smallcard.component.css']
})
export class SmallcardComponent {
  @Input()
  linkImagem:string="";

  @Input()
  titulo:string = "";

  @Input()
  desc: string="";

  
}
