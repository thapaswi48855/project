import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  
  @Input() public inputModel: any = '';
  @Input() public errorMessages: any = '';
  @Input() public appendTo :string="body";
  @Input() public labelName:string ="";
  @Input() public isMandatoryIcon:any=false;
  @Input() public disabled:boolean=false;
  @Input() public dropdownAxis:boolean=false;
  @Input() optionLabel:any="";
  @Input() optionValue:any="";
  @Input() public options: any = [{'optionValue':'','optionLabel':'Select One'}];

  @Output() public onBlur = new EventEmitter();
  @Output() public onChange = new EventEmitter();
  @Output() inputModelChange = new EventEmitter<string>();

 
  ngOnInit() {
    
  }
  onLeaveControl() {
      this.inputModelChange.emit(this.inputModel);
    this.onBlur.emit(true);
    // this.onChangeControl(this.inputModel);
  }
  // onChangeControl(thisValue: any) {
  //   this.onChange.emit(thisValue.value);
  // }
  onChangeControl(){
    this.inputModelChange.emit(this.inputModel);
    this.onChange.emit(true);
  }
}
