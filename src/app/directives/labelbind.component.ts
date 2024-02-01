import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-labelbind',
  templateUrl: './labelbind.component.html',
  styleUrls: ['./labelbind.component.css']
})
export class LabelbindComponent {

  @Input() public labelName:string='';
  @Input() public labelValue:any=0;
  @Input() public labelAxis:boolean=true;

}
