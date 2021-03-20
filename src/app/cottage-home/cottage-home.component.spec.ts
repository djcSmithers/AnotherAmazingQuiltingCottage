import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageHomeComponent } from './cottage-home.component';

describe('CottageHomeComponent', () => {
  let component: CottageHomeComponent;
  let fixture: ComponentFixture<CottageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CottageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
