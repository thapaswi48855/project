import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css']
})
export class InputtextComponent {
 
  @Input() public inputModel:any="";
  @Input() public errorMessages:any="";
  @Input() public labelName:string='';
  @Input() public disabled:boolean=false;
  @Input() public inputAxis:boolean=false;

  @Output() public onBlur =new EventEmitter();
  @Output() public onChange =new EventEmitter();
  @Output() inputModelChange = new EventEmitter<string>();

  onLeaveControl(){
    this.inputModelChange.emit(this.inputModel);
    this.onBlur.emit(true);
  }
  onChangeControl(){
    this.inputModelChange.emit(this.inputModel);
    this.onChange.emit(true);
  }

}
