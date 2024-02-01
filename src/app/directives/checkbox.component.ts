import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input() public inputModel:any="";
  @Input() public labelName:string='';


  @Output() public onBlur =new EventEmitter();
  @Output() inputModelChange = new EventEmitter<string>();

  constructor(
    // public _service:FetodbconnectionService
  ){}

  ngOnInit(){}

  onLeaveControl(){
    this.inputModelChange.emit(this.inputModel);
    this.onBlur.emit(true);
  }
 
}
