import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseOriginComponent } from './choose-origin.component';

describe('ChooseOriginComponent', () => {
  let component: ChooseOriginComponent;
  let fixture: ComponentFixture<ChooseOriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseOriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
