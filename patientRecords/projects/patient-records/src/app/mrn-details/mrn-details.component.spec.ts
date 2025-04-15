import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrnDetailsComponent } from './mrn-details.component';

describe('MrnDetailsComponent', () => {
  let component: MrnDetailsComponent;
  let fixture: ComponentFixture<MrnDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MrnDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrnDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
