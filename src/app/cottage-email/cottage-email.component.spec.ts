import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {AngularMaterialModule} from '../angular-material.module';

import { CottageEmailComponent } from './cottage-email.component';

describe('CottageEmailComponent', () => {
  let component: CottageEmailComponent;
  let fixture: ComponentFixture<CottageEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CottageEmailComponent ],
      imports: [
        AngularMaterialModule,
        NoopAnimationsModule,
        LayoutModule
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
