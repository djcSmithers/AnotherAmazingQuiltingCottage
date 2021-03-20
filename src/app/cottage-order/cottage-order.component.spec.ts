import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageOrderComponent } from './cottage-order.component';

describe('CottageOrderComponent', () => {
  let component: CottageOrderComponent;
  let fixture: ComponentFixture<CottageOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CottageOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
