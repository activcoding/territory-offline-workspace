import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DonateHintDialogComponent } from './donate-hint-dialog.component';

describe('DonateHintDialogComponent', () => {
  let component: DonateHintDialogComponent;
  let fixture: ComponentFixture<DonateHintDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateHintDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateHintDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
