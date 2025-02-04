import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListItemWithDescriptionComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: ListItemWithDescriptionComponent;
  let fixture: ComponentFixture<ListItemWithDescriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemWithDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemWithDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
