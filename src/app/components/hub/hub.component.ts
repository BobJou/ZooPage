import { Component } from '@angular/core';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent{
  aparecePesquisa:boolean = false;
  botaoClicado(){
    this.aparecePesquisa = !this.aparecePesquisa;
  }
  

}
