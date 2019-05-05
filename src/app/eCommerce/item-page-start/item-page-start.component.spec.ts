import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPageStartComponent } from './item-page-start.component';

describe('ItemPageStartComponent', () => {
  let component: ItemPageStartComponent;
  let fixture: ComponentFixture<ItemPageStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPageStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPageStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
