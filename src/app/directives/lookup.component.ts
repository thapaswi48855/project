import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  // styleUrls: ['./lookup.component.css']
})
export class LookupComponent {
  @Input() inputModel: any = '';
  @Input() errorMessages: any = '';
  @Input() labelName: string = '';
  @Input() disabled: boolean = false;
  @Input() lookupAxis: boolean = false;
  @Input() filteredOptions: any = [];
  @Input() ngModel: any = '';
  @Input() filterField: any = '';
  @Input() filterName: any = '';

  @Output() public onBlur = new EventEmitter();
  @Output() inputModelChange = new EventEmitter<string>();
  @Output() onLoopUp = new EventEmitter();

  onLeaveControl() {
    this.inputModelChange.emit(this.inputModel);
    this.onBlur.emit(true);
  }
  countries: any[] | undefined;

  selectedCountry: any;

  // filteredCountries: any[];

  // constructor(private countryService: CountryService) {}

  ngOnInit() {
    // this.countryService.getCountries().then((countries:any) => {
    // this.countries =[{name:'india',value:'1'},
    // {name:'asia',value:'2'}];
    // });
  }
  public filteredOption: any = [];
  filterCountry(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.filteredOptions as any[]).length; i++) {
      let country = (this.filteredOptions as any[])[i];
      if (
        country[this.filterName].toLowerCase().indexOf(query.toLowerCase()) == 0
      ) {
        filtered.push(country);
      }
    }

    this.filteredOption = filtered;
  }
  onblur(inputModel: any) {
    this.filterCountry(inputModel);
  }
  onLookUpSelect(inputModel: any) {
    this.inputModelChange.emit(this.inputModel);
    this.onLoopUp.emit(inputModel);
  }
}
