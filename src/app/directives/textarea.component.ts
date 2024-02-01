import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {
  @Input() public inputModel:any="";
  @Input() public errorMessages:any="";
  @Input() public labelName:string='';
  @Input() public isMandatoryIcon:any=false;
  @Input() public rows:any=0;
  @Input() public cols:any=0;
  @Input() public disabled:boolean=false;


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
