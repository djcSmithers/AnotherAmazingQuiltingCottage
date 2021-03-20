import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageAboutComponent } from './cottage-about.component';

describe('CottageAboutComponent', () => {
  let component: CottageAboutComponent;
  let fixture: ComponentFixture<CottageAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CottageAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
