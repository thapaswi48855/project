import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {

  @Input() public inputModel:any='';
  @Input() public errorMessages:any="";
  @Input() public labelName:string='';
  @Input() public disabled:boolean=false;
  @Input() public showWeek:boolean=false;
  @Input() public showTime:boolean=false;
  @Input() public showSeconds:boolean=false;
  @Input() public minDate:Date ;
  @Input() public maxDate:Date ;
  // @Input() public dateFormat:any="dd/mm/yy";
  @Input() public view:any="";
  @Input() public labelAxis:boolean=false;



  @Output() public onBlur =new EventEmitter();
  @Output() inputModelChange = new EventEmitter<string>();

  onLeaveControl(){
    this.inputModelChange.emit(this.inputModel);
    this.onBlur.emit(true);
  }
}
