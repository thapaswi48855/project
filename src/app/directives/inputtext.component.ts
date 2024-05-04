import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css'],
})
export class InputtextComponent {
  @Input() public inputModel: any = '';
  @Input() public errorMessages: any = '';
  @Input() public labelName: string = '';
  @Input() public disabled: boolean = false;
  @Input() public inputAxis: boolean = false;

  @Input() pKeyFilter: string = 'alpha';
  @Input() labelText: boolean = true;

  @Output() public onBlur = new EventEmitter();
  @Output() public onChange = new EventEmitter();
  @Output() inputModelChange = new EventEmitter<string>();

  @HostListener('input', ['$event']) onInput(event: any) {
    const pattern = /^[a-zA-Z]*$/;
    const numberPattern =/^[0-9]*$/ ;
    const alphanumPattern =/^[a-zA-Z0-9]*$/ ;
    if (this.pKeyFilter == 'alpha' && !pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
    } else if (this.pKeyFilter == 'num' && !numberPattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/\D/g, '');
    }else if (this.pKeyFilter == 'alphanum' && !alphanumPattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z0-9]/g, '');
    }
  }

  onLeaveControl() {
    this.inputModelChange.emit(this.inputModel);
    this.onBlur.emit(true);
  }
  onChangeControl() {
    this.inputModelChange.emit(this.inputModel);
    this.onChange.emit(true);
  }
}
