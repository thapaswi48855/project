import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent {
  @Input() public options: any = [];
  @Input() public inputModel: any = '';
  @Input() public errorMessages: any = '';
  @Input() public appendTo :string="body";
  @Input() public labelName:string ="";
  @Input() public isMandatoryIcon:any=false;
  @Input() public disabled:boolean=false;

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
}
