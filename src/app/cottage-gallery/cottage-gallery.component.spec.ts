import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageGalleryComponent } from './cottage-gallery.component';

describe('CottageGalleryComponent', () => {
  let component: CottageGalleryComponent;
  let fixture: ComponentFixture<CottageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CottageGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
