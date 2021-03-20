import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CottagePriceComponent } from './cottage-price.component';

describe('CottagePriceComponent', () => {
  let component: CottagePriceComponent;
  let fixture: ComponentFixture<CottagePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CottagePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CottagePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


