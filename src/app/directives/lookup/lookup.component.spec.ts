import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupComponent } from '../lookup.component';

describe('LookupComponent', () => {
  let component: LookupComponent;
  let fixture: ComponentFixture<LookupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookupComponent]
    });
    fixture = TestBed.createComponent(LookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
